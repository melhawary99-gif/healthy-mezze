import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const REVIEWS_API_URL = process.env.REVIEWS_API_URL;
const REVIEWS_API_SECRET = process.env.REVIEWS_API_SECRET;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET;

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function getWorkerUrl(path: string) {
  if (!REVIEWS_API_URL) {
    throw new Error("REVIEWS_API_URL is not configured.");
  }

  return `${REVIEWS_API_URL.replace(/\/$/, "")}${path}`;
}

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get("slug")?.trim();

    if (
      !slug ||
      slug.length > 120 ||
      !/^[a-z0-9-]+$/.test(slug)
    ) {
      return json(
        { error: "Invalid drink slug." },
        400,
      );
    }

    const response = await fetch(
      getWorkerUrl(`/reviews/${encodeURIComponent(slug)}`),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    return json(data, response.status);
  } catch (error) {
    console.error("Review GET proxy error:", error);

    return json(
      { error: "Unable to load reviews." },
      500,
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!REVIEWS_API_SECRET) {
      console.error("REVIEWS_API_SECRET is not configured.");

      return json(
        { error: "Review service is not configured." },
        500,
      );
    }

    if (!TURNSTILE_SECRET) {
      console.error("TURNSTILE_SECRET is not configured.");

      return json(
        { error: "Review security is not configured." },
        500,
      );
    }

    const session = await auth();

    if (!session?.user) {
      return json(
        { error: "You must be signed in to submit a review." },
        401,
      );
    }

    const googleSubject = session.user.id;

    if (!googleSubject) {
      return json(
        { error: "Unable to verify your Google account." },
        401,
      );
    }

    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return json(
        { error: "Invalid request body." },
        400,
      );
    }

    const data = body as Record<string, unknown>;

    const drinkSlug =
      typeof data.drinkSlug === "string"
        ? data.drinkSlug.trim()
        : "";

    const reviewText =
      typeof data.reviewText === "string"
        ? data.reviewText.trim()
        : "";

    const turnstileToken =
      typeof data.turnstileToken === "string"
        ? data.turnstileToken.trim()
        : "";

    const rating = Number(data.rating);

    const name =
      session.user.name?.trim() ||
      "Google user";

    if (
      !drinkSlug ||
      drinkSlug.length > 120 ||
      !/^[a-z0-9-]+$/.test(drinkSlug)
    ) {
      return json(
        { error: "Invalid drink slug." },
        400,
      );
    }

    if (!turnstileToken || turnstileToken.length > 2048) {
      return json(
        { error: "Invalid security verification." },
        400,
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: TURNSTILE_SECRET,
          response: turnstileToken,
        }),
        cache: "no-store",
      },
    );

    const turnstileResult: unknown = await turnstileResponse.json();

    if (
      !turnstileResponse.ok ||
      !turnstileResult ||
      typeof turnstileResult !== "object" ||
      !("success" in turnstileResult) ||
      turnstileResult.success !== true
    ) {
      const result = turnstileResult as {
        success?: unknown;
        "error-codes"?: unknown;
        hostname?: unknown;
        action?: unknown;
      };

      console.warn("Turnstile verification failed.", {
        success: result.success,
        errorCodes: result["error-codes"],
        hostname: result.hostname,
        action: result.action,
        httpStatus: turnstileResponse.status,
      });

      return json(
        { error: "Security verification failed. Please try again." },
        403,
      );
    }

    if (
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      return json(
        { error: "Rating must be an integer from 1 to 5." },
        400,
      );
    }

    if (
      !reviewText ||
      reviewText.length < 5 ||
      reviewText.length > 1000
    ) {
      return json(
        { error: "Review must be between 5 and 1000 characters." },
        400,
      );
    }

    const response = await fetch(
      getWorkerUrl("/reviews"),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Review-API-Key": REVIEWS_API_SECRET,
        },
        body: JSON.stringify({
          drinkSlug,
          googleSubject,
          name,
          rating,
          reviewText,
        }),
        cache: "no-store",
      },
    );

    const responseData = await response.json();

    return json(responseData, response.status);
  } catch (error) {
    console.error("Review POST proxy error:", error);

    return json(
      { error: "Unable to submit review." },
      500,
    );
  }
}
