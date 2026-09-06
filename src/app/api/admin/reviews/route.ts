import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";

const REVIEWS_API_URL = process.env.REVIEWS_API_URL;
const REVIEWS_API_SECRET = process.env.REVIEWS_API_SECRET;

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function isValidStatus(
  value: string | null,
): value is "pending" | "approved" | "rejected" {
  return (
    value === "pending" ||
    value === "approved" ||
    value === "rejected"
  );
}

export async function GET(request: Request) {
  const session = await requireAdmin();

  if (!session) {
    return json({ error: "Forbidden." }, 403);
  }

  if (!REVIEWS_API_URL || !REVIEWS_API_SECRET) {
    console.error("Review moderation API is not configured.");
    return json({ error: "Server configuration error." }, 500);
  }

  const url = new URL(request.url);
  const status = url.searchParams.get("status") ?? "pending";

  if (!isValidStatus(status)) {
    return json({ error: "Invalid review status." }, 400);
  }

  try {
    const response = await fetch(
      `${REVIEWS_API_URL.replace(/\/$/, "")}/admin/reviews?status=${status}`,
      {
        method: "GET",
        headers: {
          "X-Review-API-Key": REVIEWS_API_SECRET,
        },
        cache: "no-store",
      },
    );

    const data = await response.json();

    return json(data, response.status);
  } catch (error) {
    console.error("Failed to fetch admin reviews.", error);

    return json({
      error: "Unable to load reviews.",
    }, 502);
  }
}
