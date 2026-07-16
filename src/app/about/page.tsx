import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <Container>
        <section className="pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              About Healthy Mezze
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Healthy Mezze
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Fresh Mediterranean recipes made simple, healthy, and delicious.
            </p>
          </div>
        </section>

        <section className="mb-16 rounded-[2rem] border border-green-100 bg-green-50 px-6 py-10 shadow-sm sm:px-12 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold text-gray-900">Our brand story</h2>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
              Healthy Mezze shares Mediterranean-inspired recipes focused on fresh ingredients, balanced nutrition, simple cooking, and traditional flavors. We bring vibrant meals that feel authentic and approachable so every home cook can enjoy wholesome food with ease.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Fresh ingredients</h3>
                <p className="mt-3 text-gray-600">
                  Recipes built around seasonal produce, bright herbs, and vibrant pantry staples.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Balanced nutrition</h3>
                <p className="mt-3 text-gray-600">
                  Meals designed to feel satisfying, nourishing, and full of wholesome Mediterranean flavor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                Our philosophy
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
                What makes Healthy Mezze different
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Fresh Ingredients",
                  description: "Bright vegetables, herbs, and olive oil form every recipe's foundation.",
                },
                {
                  title: "Healthy Balance",
                  description: "Protein, fiber, and fresh produce come together in every meal.",
                },
                {
                  title: "Simple Cooking",
                  description: "Easy-to-follow recipes let you cook with confidence and minimal fuss.",
                },
                {
                  title: "Mediterranean Tradition",
                  description: "Inspired by classic flavors from across the Mediterranean region.",
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-3 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-green-100 bg-emerald-50 px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
              Start exploring healthy recipes today
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
              Find Mediterranean meals that are easy to make, full of flavor, and perfect for everyday cooking.
            </p>
            <a
              href="/recipes"
              className="mt-8 inline-flex rounded-full bg-green-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Explore Recipes
            </a>
          </div>
        </section>
      </Container>
    </main>
  );
}
