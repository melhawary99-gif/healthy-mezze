export interface Env {
  healthy_mezze_reviews: D1Database;
  REVIEWS_API_SECRET: string;
}

const ALLOWED_ORIGINS = new Set([
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://healthymezze.com",
  "https://www.healthymezze.com",
]);

const MAX_BODY_BYTES = 10_000;
const MAX_SLUG_LENGTH = 120;
const MAX_NAME_LENGTH = 80;
const MAX_REVIEW_LENGTH = 1000;
const MAX_GOOGLE_SUBJECT_LENGTH = 200;

function getCorsHeaders(request: Request): Headers {
  const origin = request.headers.get("Origin");
  const headers = new Headers();

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  }

  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, X-Review-API-Key");
  headers.set("Content-Type", "application/json");
  headers.set("X-Content-Type-Options", "nosniff");

  return headers;
}

function json(
  request: Request,
  data: unknown,
  status = 200,
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: getCorsHeaders(request),
  });
}

function normalizeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

async function handleGetReviews(
  request: Request,
  env: Env,
  slug: string,
): Promise<Response> {
  if (
    !slug ||
    slug.length > MAX_SLUG_LENGTH ||
    !/^[a-z0-9-]+$/.test(slug)
  ) {
    return json(request, {
      error: "Invalid drink slug.",
    }, 400);
  }

  const result = await env.healthy_mezze_reviews
    .prepare(
      `SELECT
        id,
        drink_slug,
        name,
        rating,
        review_text,
        created_at
       FROM reviews
       WHERE drink_slug = ?1
         AND status = 'approved'
       ORDER BY created_at DESC`,
    )
    .bind(slug)
    .all();

  const averageResult = await env.healthy_mezze_reviews
    .prepare(
      `SELECT
        COUNT(*) AS review_count,
        COALESCE(AVG(rating), 0) AS average_rating
       FROM reviews
       WHERE drink_slug = ?1
         AND status = 'approved'`,
    )
    .bind(slug)
    .first<{
      review_count: number;
      average_rating: number;
    }>();

  return json(request, {
    reviews: result.results,
    averageRating: Number(
      (averageResult?.average_rating ?? 0).toFixed(1),
    ),
    reviewCount: Number(
      averageResult?.review_count ?? 0,
    ),
  });
}

async function handleCreateReview(
  request: Request,
  env: Env,
): Promise<Response> {
  const apiKey = request.headers.get("X-Review-API-Key");

  if (!apiKey || apiKey !== env.REVIEWS_API_SECRET) {
    return json(request, {
      error: "Unauthorized.",
    }, 401);
  }

  const contentType = request.headers.get("Content-Type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return json(request, {
      error: "Content-Type must be application/json.",
    }, 415);
  }

  const contentLength = Number(
    request.headers.get("Content-Length") ?? 0,
  );

  if (contentLength > MAX_BODY_BYTES) {
    return json(request, {
      error: "Request body is too large.",
    }, 413);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json(request, {
      error: "Invalid JSON.",
    }, 400);
  }

  if (!body || typeof body !== "object") {
    return json(request, {
      error: "Invalid request body.",
    }, 400);
  }

  const data = body as Record<string, unknown>;

  const drinkSlug = normalizeString(data.drinkSlug);
  const googleSubject = normalizeString(data.googleSubject);
  const name = normalizeString(data.name);
  const reviewText = normalizeString(data.reviewText);
  const rating = Number(data.rating);

  if (
    !drinkSlug ||
    drinkSlug.length > MAX_SLUG_LENGTH ||
    !/^[a-z0-9-]+$/.test(drinkSlug)
  ) {
    return json(request, {
      error: "Invalid drink slug.",
    }, 400);
  }

  if (
    !googleSubject ||
    googleSubject.length > MAX_GOOGLE_SUBJECT_LENGTH
  ) {
    return json(request, {
      error: "Invalid Google account.",
    }, 400);
  }

  if (
    !name ||
    name.length < 2 ||
    name.length > MAX_NAME_LENGTH
  ) {
    return json(request, {
      error: "Name must be between 2 and 80 characters.",
    }, 400);
  }

  if (
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5
  ) {
    return json(request, {
      error: "Rating must be an integer from 1 to 5.",
    }, 400);
  }

  if (
    !reviewText ||
    reviewText.length < 5 ||
    reviewText.length > MAX_REVIEW_LENGTH
  ) {
    return json(request, {
      error: "Review must be between 5 and 1000 characters.",
    }, 400);
  }

  const duplicate = await env.healthy_mezze_reviews
    .prepare(
      `SELECT id
       FROM reviews
       WHERE drink_slug = ?1
         AND google_subject = ?2
       LIMIT 1`,
    )
    .bind(
      drinkSlug,
      googleSubject,
    )
    .first<{ id: number }>();

  if (duplicate) {
    return json(request, {
      error: "You have already reviewed this drink.",
    }, 409);
  }

  try {
    const result = await env.healthy_mezze_reviews
      .prepare(
        `INSERT INTO reviews (
          drink_slug,
          google_subject,
          name,
          rating,
          review_text,
          status
        )
        VALUES (?1, ?2, ?3, ?4, ?5, 'pending')`,
      )
      .bind(
        drinkSlug,
        googleSubject,
        name,
        rating,
        reviewText,
      )
      .run();

    return json(request, {
      success: true,
      message: "Review submitted for moderation.",
      reviewId: result.meta.last_row_id,
    }, 201);
  } catch (error) {
    const message = error instanceof Error
      ? error.message
      : String(error);

    if (
      message.includes("UNIQUE constraint failed") ||
      message.includes("idx_reviews_google_subject_drink")
    ) {
      return json(request, {
        error: "You have already reviewed this drink.",
      }, 409);
    }

    throw error;
  }
}

export default {
  async fetch(
    request: Request,
    env: Env,
  ): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(request),
      });
    }

    try {
      if (
        request.method === "GET" &&
        url.pathname.startsWith("/reviews/")
      ) {
        const slug = decodeURIComponent(
          url.pathname.slice("/reviews/".length),
        );

        return handleGetReviews(request, env, slug);
      }

      if (
        request.method === "POST" &&
        url.pathname === "/reviews"
      ) {
        return handleCreateReview(request, env);
      }

      if (
        request.method === "GET" &&
        url.pathname === "/"
      ) {
        return json(request, {
          status: "ok",
          service: "healthy-mezze-reviews-api",
        });
      }

      return json(request, {
        error: "Not found.",
      }, 404);
    } catch (error) {
      console.error("Review API error:", error);

      return json(request, {
        error: "Internal server error.",
      }, 500);
    }
  },
};
