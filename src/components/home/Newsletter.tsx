"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
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
    alert("Sorry, something went wrong. Please try again.");
  }
};

  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-green-700 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Join Healthy Mezze
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-100">
            Get healthy Mediterranean recipes, cooking inspiration,
            and wellness tips delivered to you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-xl px-5 py-3 text-gray-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 font-medium text-green-700 transition hover:bg-green-50"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              🎉 Thanks for subscribing! Healthy recipes and nutrition tips are on the way.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}