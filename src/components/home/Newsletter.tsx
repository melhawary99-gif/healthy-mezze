"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

export default function Newsletter() {
  const t = useTranslations("Newsletter");

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert(t("subscriptionFailed"));
    }
  };

  return (
    <section className="bg-green-700 py-16">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("join")}</h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-100">{t("heroDescription")}</p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder={t("placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label={t("emailAddress")}
              className="flex-1 rounded-xl px-5 py-3 text-gray-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 font-medium text-green-700 transition hover:bg-green-50"
            >
              {t("subscribe")}
            </button>
          </form>

          {subscribed && (
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              🎉 {t("success")}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
