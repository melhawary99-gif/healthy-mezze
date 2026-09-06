"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, Clock, Loader2, X } from "lucide-react";
import { useTranslations } from "next-intl";

type ReviewStatus = "pending" | "approved" | "rejected";

interface AdminReview {
  id: number;
  drink_slug: string;
  name: string;
  rating: number;
  review_text: string;
  status: ReviewStatus;
  created_at: string;
  updated_at: string;
}

interface AdminReviewsProps {
  locale: string;
}

const statuses: ReviewStatus[] = [
  "pending",
  "approved",
  "rejected",
];

export default function AdminReviews({
  locale,
}: AdminReviewsProps) {
  const t = useTranslations("AdminReviews");

  const [status, setStatus] = useState<ReviewStatus>("pending");
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/admin/reviews?status=${status}`,
        {
          method: "GET",
          cache: "no-store",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : t("loadError"),
        );
      }

      setReviews(
        Array.isArray(data?.reviews)
          ? data.reviews
          : [],
      );
    } catch (err) {
      console.error(err);
      setReviews([]);
      setError(t("loadError"));
    } finally {
      setLoading(false);
    }
  }, [status, t]);

  useEffect(() => {
    void loadReviews();
  }, [loadReviews]);

  async function updateReview(
    id: number,
    nextStatus: "approved" | "rejected",
  ) {
    setUpdatingId(id);
    setError("");

    try {
      const response = await fetch(
        `/api/admin/reviews/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: nextStatus,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : t("updateError"),
        );
      }

      setReviews((current) =>
        current.filter((review) => review.id !== id),
      );
    } catch (err) {
      console.error(err);
      setError(t("updateError"));
    } finally {
      setUpdatingId(null);
    }
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <main
      dir={direction}
      className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            {t("eyebrow")}
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t("title")}
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {t("description")}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {statuses.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStatus(item)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                status === item
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {item === "pending" && (
                <Clock className="me-1.5 inline-block h-4 w-4" />
              )}
              {item === "approved" && (
                <Check className="me-1.5 inline-block h-4 w-4" />
              )}
              {item === "rejected" && (
                <X className="me-1.5 inline-block h-4 w-4" />
              )}
              {t(item)}
            </button>
          ))}
        </div>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300"
          >
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex min-h-48 items-center justify-center rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <Loader2 className="h-7 w-7 animate-spin text-slate-500" />
          </div>
        ) : reviews.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <p className="font-medium text-slate-900 dark:text-white">
              {t("noReviews")}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </h2>

                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {review.rating}/5
                      </span>

                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        #{review.id}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {review.drink_slug}
                    </p>
                  </div>

                  <time
                    dateTime={review.created_at}
                    className="shrink-0 text-xs text-slate-500 dark:text-slate-400"
                  >
                    {new Intl.DateTimeFormat(locale, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    }).format(new Date(`${review.created_at}Z`))}
                  </time>
                </div>

                <div className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {review.review_text}
                </div>

                {review.status === "pending" && (
                  <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <button
                      type="button"
                      disabled={updatingId === review.id}
                      onClick={() =>
                        updateReview(review.id, "approved")
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {updatingId === review.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Check className="h-4 w-4" />
                      )}
                      {t("approve")}
                    </button>

                    <button
                      type="button"
                      disabled={updatingId === review.id}
                      onClick={() =>
                        updateReview(review.id, "rejected")
                      }
                      className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-red-900/60 dark:text-red-300 dark:hover:bg-red-950/30"
                    >
                      {updatingId === review.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <X className="h-4 w-4" />
                      )}
                      {t("reject")}
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
