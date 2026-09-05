"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

type GoogleSignInButtonProps = {
  callbackUrl?: string;
};

export default function GoogleSignInButton({
  callbackUrl = "/",
}: GoogleSignInButtonProps) {
  const t = useTranslations("DrinkReviews");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn() {
    try {
      setLoading(true);
      setError("");

      await signIn("google", {
        redirectTo: callbackUrl,
      });
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setError(t("signInError"));
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      {error && (
        <div
          role="alert"
          className="rounded-lg bg-red-500 px-4 py-3 text-sm font-medium text-white"
        >
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleSignIn}
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.95 2.94v2.45h3.15c1.84-1.69 2.91-4.18 2.91-7.42Z"
          />
          <path
            fill="#34A853"
            d="M12 21.6c2.63 0 4.84-.87 6.45-2.35l-3.15-2.45c-.87.58-1.98.92-3.3.92-2.54 0-4.69-1.72-5.46-4.03H3.28v2.53A9.74 9.74 0 0 0 12 21.6Z"
          />
          <path
            fill="#FBBC05"
            d="M6.54 13.69A5.85 5.85 0 0 1 6.23 12c0-.59.11-1.16.31-1.69V7.78H3.28A9.74 9.74 0 0 0 2.25 12c0 1.53.37 2.98 1.03 4.22l3.26-2.53Z"
          />
          <path
            fill="#EA4335"
            d="M12 6.28c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.29 14.63 2.4 12 2.4a9.74 9.74 0 0 0-8.72 5.38l3.26 2.53Z"
          />
        </svg>

        {loading ? t("connectingToGoogle") : t("signInWithGoogle")}
      </button>
    </div>
  );
}
