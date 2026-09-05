import type {
  DrinkReviewsResponse,
  SubmitDrinkReviewInput,
  SubmitDrinkReviewResponse,
} from "@/types/drinkReview";

export async function getDrinkReviews(
  slug: string,
): Promise<DrinkReviewsResponse> {
  const response = await fetch(
    `/api/reviews?slug=${encodeURIComponent(slug)}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : `Failed to load reviews: ${response.status}`,
    );
  }

  return data;
}

export async function submitDrinkReview(
  input: SubmitDrinkReviewInput,
): Promise<SubmitDrinkReviewResponse> {
  const response = await fetch(
    "/api/reviews",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(input),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : `Failed to submit review: ${response.status}`,
    );
  }

  return data;
}
