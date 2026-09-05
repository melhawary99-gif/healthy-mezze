export interface DrinkReview {
  id: number;
  drink_slug: string;
  name: string;
  rating: number;
  review_text: string;
  created_at: string;
}

export interface DrinkReviewsResponse {
  reviews: DrinkReview[];
  averageRating: number;
  reviewCount: number;
}

export interface SubmitDrinkReviewInput {
  drinkSlug: string;
  rating: number;
  reviewText: string;
  turnstileToken: string;
}

export interface SubmitDrinkReviewResponse {
  success: boolean;
  message: string;
  reviewId: number;
}
