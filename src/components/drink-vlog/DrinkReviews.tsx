"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { FormEvent, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import { signOut, useSession } from "next-auth/react";
import { getDrinkReviews, submitDrinkReview } from "@/lib/drinkReviewsApi";
import type { DrinkReview } from "@/types/drinkReview";

interface DrinkReviewsProps {
  slug: string;
}

function StarRating({
  rating,
  onChange,
  disabled = false,
  ariaLabel,
  starLabel,
}: {
  rating: number;
  onChange?: (rating: number) => void;
  disabled?: boolean;
  ariaLabel?: string;
  starLabel?: (count: number) => string;
}) {
  return (
    <div
      className="flex items-center gap-1"
      role={onChange ? "radiogroup" : undefined}
      aria-label={onChange ? ariaLabel : undefined}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= rating;

        if (onChange) {
          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={star === rating}
              aria-label={starLabel?.(star)}
              disabled={disabled}
              onClick={() => onChange(star)}
              className="text-2xl leading-none transition-transform hover:scale-110 disabled:cursor-not-allowed"
            >
              <span
                className={
                  filled
                    ? "text-amber-500"
                    : "text-slate-300 dark:text-slate-600"
                }
              >
                ★
              </span>
            </button>
          );
        }

        return (
          <span
            key={star}
            className={
              filled
                ? "text-amber-500"
                : "text-slate-300 dark:text-slate-600"
            }
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

function formatReviewDate(dateString: string, locale: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function DrinkReviews({
  slug,
}: DrinkReviewsProps) {
  const t = useTranslations("DrinkReviews");
  const locale = useLocale();
  const { data: session, status: sessionStatus } = useSession();

  const starLabel = (count: number) =>
    t("stars", { count });

  const [reviews, setReviews] = useState<DrinkReview[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadReviews() {
      try {
        setLoading(true);
        setError("");

        const data = await getDrinkReviews(slug);

        if (cancelled) {
          return;
        }

        setReviews(data.reviews);
        setAverageRating(data.averageRating);
        setReviewCount(data.reviewCount);
      } catch {
        if (!cancelled) {
          setError(t("error"));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadReviews();

    return () => {
      cancelled = true;
    };
  }, [slug, t]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess(false);

    const trimmedReview = reviewText.trim();

    if (rating < 1 || rating > 5) {
      setError(t("ratingRequired"));
      return;
    }

    if (trimmedReview.length < 5) {
      setError(t("reviewTooShort"));
      return;
    }

    if (!turnstileToken) {
      setError(t("turnstileRequired"));
      return;
    }

    try {
      setSubmitting(true);

      await submitDrinkReview({
        drinkSlug: slug,
        rating,
        reviewText: trimmedReview,
        turnstileToken,
      });

      setRating(0);
      setReviewText("");
      setTurnstileToken("");
      setSuccess(true);
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "";

      if (message.includes("already reviewed") || message.includes("already submitted")) {
        setError(t("alreadyReviewed"));
      } else if (message.includes("must be signed in")) {
        setError(t("signInRequired"));
      } else {
        setError(t("error"));
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="reviews"
      className="mt-16 border-t border-slate-200 pt-12 dark:border-slate-800"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              {t("title")}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              {reviewCount > 0 && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold text-slate-900 dark:text-white">
                      {averageRating.toFixed(1)}
                    </span>

                    <StarRating
                      rating={Math.round(averageRating)}
                      ariaLabel={t("rating")}
                      starLabel={starLabel}
                    />
                  </div>

                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {t("reviewCount", {
                      count: reviewCount,
                    })}
                  </span>
                </>
              )}
            </div>
          </div>

          {loading ? (
            <div className="space-y-4" aria-busy="true">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="animate-pulse rounded-2xl border border-slate-200 p-5 dark:border-slate-800"
                >
                  <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="mt-4 h-4 w-32 rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                  <div className="mt-2 h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
                </div>
              ))}
            </div>
          ) : reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </h3>

                      <time
                        dateTime={review.created_at}
                        className="mt-1 block text-xs text-slate-500 dark:text-slate-400"
                      >
                        {formatReviewDate(
                          review.created_at,
                          locale,
                        )}
                      </time>
                    </div>

                    <StarRating
                        rating={review.rating}
                        ariaLabel={t("rating")}
                        starLabel={starLabel}
                      />
                  </div>

                  <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {review.review_text}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t("noReviews")}
              </p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {t("writeReview")}
          </h3>

          {sessionStatus === "loading" ? (
            <div
              className="mt-6 h-12 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800"
              aria-busy="true"
            />
          ) : !session ? (
            <div className="mt-6 space-y-4">
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {t("signInToReview")}
              </p>

              <GoogleSignInButton
                callbackUrl={`/${locale}/drink-vlog/${slug}#reviews`}
              />
            </div>
          ) : (
            <>
              <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t("signedInAs", {
                    name:
                      session.user?.name ||
                      t("googleNameUnavailable"),
                  })}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    signOut({
                      callbackUrl: `/${locale}/drink-vlog/${slug}#reviews`,
                    })
                  }
                  className="shrink-0 text-sm font-medium text-slate-600 underline underline-offset-4 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {t("signOut")}
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >
                <fieldset>
                  <legend className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t("rating")}
                  </legend>

                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    disabled={submitting}
                    ariaLabel={t("rating")}
                    starLabel={starLabel}
                  />
                </fieldset>

                <div>
                  <label
                    htmlFor={`review-text-${slug}`}
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t("review")}
                  </label>

                  <div className="mt-6">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken("")}
            onError={() => setTurnstileToken("")}
          />
        </div>

        <textarea
                    id={`review-text-${slug}`}
                    value={reviewText}
                    onChange={(event) =>
                      setReviewText(event.target.value)
                    }
                    placeholder={t("reviewPlaceholder")}
                    maxLength={1000}
                    rows={5}
                    disabled={submitting}
                    required
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-slate-500 dark:focus:ring-slate-800"
                  />
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300"
                  >
                    {error}
                  </div>
                )}

                {success && (
                  <div
                    role="status"
                    className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300"
                  >
                    <p className="font-semibold">
                      {t("successTitle")}
                    </p>

                    <p className="mt-1">
                      {t("successMessage")}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  {submitting ? t("submitting") : t("submit")}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
