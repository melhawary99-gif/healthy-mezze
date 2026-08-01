import { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Learn how Healthy Mezze develops, reviews, and maintains its Mediterranean recipes and food content.",
  alternates: {
    canonical: "/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="mx-auto max-w-4xl py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Healthy Mezze
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Editorial Policy
          </h1>

          <p className="mt-6 text-gray-600">
            <strong>Last Updated:</strong> July 2026
          </p>

          <div className="mt-10 space-y-10 leading-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h2>

              <p className="mt-4">
                Healthy Mezze is dedicated to making healthy Mediterranean
                cooking simple, enjoyable, and accessible. Our goal is to
                publish recipes that are practical for everyday home cooks while
                respecting the rich culinary traditions of Mediterranean
                cuisine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Recipe Development
              </h2>

              <p className="mt-4">
                Every recipe is carefully written with clear ingredients,
                step-by-step instructions, preparation times, and estimated
                nutrition information. We focus on fresh ingredients, balanced
                meals, and techniques that are easy to follow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Accuracy
              </h2>

              <p className="mt-4">
                We review our content regularly to keep recipes accurate and
                up to date. If we discover an error, we correct it as soon as
                possible to maintain the quality of our content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Nutrition Information
              </h2>

              <p className="mt-4">
                Nutrition values are provided as estimates only and should be
                used as general guidance. They are not intended to replace
                professional medical or dietary advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Independence
              </h2>

              <p className="mt-4">
                Our editorial decisions are based on quality, authenticity,
                usefulness, and the needs of our readers. Sponsored content,
                when present, will always be clearly identified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact
              </h2>

              <p className="mt-4">
                Questions or suggestions about our content are always welcome.
                Contact us at{" "}
                <a
                  href="mailto:contact@healthymezze.com"
                  className="font-semibold text-green-700 hover:underline"
                >
                  contact@healthymezze.com
                </a>.
              </p>
            </section>

          </div>
        </section>
      </Container>
    </main>
  );
}