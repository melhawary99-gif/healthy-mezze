import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";

const REVIEWS_API_URL = process.env.REVIEWS_API_URL;
const REVIEWS_API_SECRET = process.env.REVIEWS_API_SECRET;

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

export async function PATCH(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  },
) {
  const session = await requireAdmin();

  if (!session) {
    return json({ error: "Forbidden." }, 403);
  }

  if (!REVIEWS_API_URL || !REVIEWS_API_SECRET) {
    console.error("Review moderation API is not configured.");
    return json({ error: "Server configuration error." }, 500);
  }

  const { id } = await context.params;

  if (!/^\d+$/.test(id)) {
    return json({ error: "Invalid review ID." }, 400);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON." }, 400);
  }

  if (!body || typeof body !== "object") {
    return json({ error: "Invalid request body." }, 400);
  }

  const status = (body as Record<string, unknown>).status;

  if (status !== "approved" && status !== "rejected") {
    return json({
      error: "Status must be approved or rejected.",
    }, 400);
  }

  try {
    const response = await fetch(
      `${REVIEWS_API_URL.replace(/\/$/, "")}/admin/reviews/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-Review-API-Key": REVIEWS_API_SECRET,
        },
        body: JSON.stringify({ status }),
        cache: "no-store",
      },
    );

    const data = await response.json();

    return json(data, response.status);
  } catch (error) {
    console.error("Failed to update review moderation status.", error);

    return json({
      error: "Unable to update review.",
    }, 502);
  }
}
