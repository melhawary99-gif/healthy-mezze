import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Healthy Mezze, our mission, and our passion for sharing healthy Mediterranean recipes inspired by Egyptian, Lebanese, Greek, Turkish, Syrian, Jordanian, and Palestinian cuisine.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-10 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              About Healthy Mezze
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Mediterranean meals made simple, healthy, and unforgettable.
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Healthy Mezze celebrates fresh ingredients, easy recipes, and balanced Mediterranean-inspired eating designed for every home cook.
            </p>
          </div>
        </section>

        <section className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Fresh inspiration from Mediterranean kitchens
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Healthy Mezze was created to make healthy Mediterranean cooking simple, approachable, and enjoyable for everyone. Inspired by the rich culinary traditions of Egypt, Lebanon, Greece, Turkey, Syria, Jordan, and Palestine, our goal is to help home cooks prepare delicious meals using fresh ingredients and straightforward techniques.
            </p>
            <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
              Every recipe is designed with everyday home kitchens in mind. We focus on balanced nutrition, practical ingredients, clear step-by-step instructions, and authentic Mediterranean flavors that are easy to recreate at home.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-4xl border border-green-100 bg-green-50 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Our mission
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Healthy eating",
                    description: "Nutritious meals that feel delicious and balanced.",
                  },
                  {
                    title: "Easy home cooking",
                    description: "Simple recipes for busy weeknights and relaxed weekends.",
                  },
                  {
                    title: "Seasonal ingredients",
                    description: "Fresh produce, herbs, and pantry staples every season.",
                  },
                  {
                    title: "Balanced lifestyle",
                    description: "Meals that support energy, wellness, and joy.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Our values
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Built on flavor, health, and tradition.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: "🥬",
                    title: "Fresh Ingredients",
                    description: "Seasonal vegetables, herbs, and wholesome pantry staples.",
                  },
                  {
                    icon: "🍋",
                    title: "Simple Recipes",
                    description: "Clean steps that make cooking easy and stress-free.",
                  },
                  {
                    icon: "💪",
                    title: "Healthy Living",
                    description: "Meals that nourish your body and your routine.",
                  },
                  {
                    icon: "🌊",
                    title: "Mediterranean Tradition",
                    description: "Inspired by timeless flavors from coastal kitchens.",
                  },
                ].map((value) => (
                  <div key={value.title} className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                      {value.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

                <section className="mb-16">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Our commitment
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              What you can expect from Healthy Mezze
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We strive to publish recipes that are carefully written, easy to
              follow, and inspired by authentic Mediterranean cooking
              traditions. Our nutrition information is intended for general
              guidance and should not replace professional medical or dietary
              advice.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Why choose Healthy Mezze
              </p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Everyday cooking that feels special.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Beginner friendly",
                  description: "Step-by-step recipes for cooks of any experience level.",
                },
                {
                  title: "Quick recipes",
                  description: "Balanced meals ready in under an hour.",
                },
                {
                  title: "Nutritious meals",
                  description: "Flavorful dishes that support wellness.",
                },
                {
                  title: "Family friendly",
                  description: "Food everyone at the table can enjoy together.",
                },
                {
                  title: "Easy ingredients",
                  description: "Accessible pantry staples with a Mediterranean twist.",
                },
                {
                  title: "Beautiful presentation",
                  description: "Dishes designed to delight every sense.",
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-4xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-4xl border border-green-100 bg-emerald-50 px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Ready to make Mediterranean cooking part of your routine?
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
              Explore our recipe collection for fresh meals, simple preparation, and delicious results.
            </p>
            
           <div className="mt-8 flex flex-wrap justify-center gap-4">
  <Link
    href="/recipes"
    className="inline-flex rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
  >
    Browse Recipes
  </Link>

  <Link
    href="/contact"
    className="inline-flex rounded-full border border-green-600 bg-white px-8 py-3 text-base font-semibold text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
  >
    Contact Us
  </Link>
</div>


          </div>
        </section>
      </Container>
    </main>
  );
}
