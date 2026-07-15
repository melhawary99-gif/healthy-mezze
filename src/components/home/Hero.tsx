export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
        Healthy Mediterranean Recipes
      </span>

      <h1 className="mt-6 text-5xl font-bold text-gray-900">
        Eat Fresh.
        <br />
        Live Healthy.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Discover delicious Mediterranean recipes that are simple,
        nutritious, and easy to prepare for the whole family.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
          Browse Recipes
        </button>

        <button className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">
          Categories
        </button>
      </div>
    </section>
  );
}