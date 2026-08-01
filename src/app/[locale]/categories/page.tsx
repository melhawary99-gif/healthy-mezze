import { categories } from "@/data/categories";
import { getRecipesByCategory } from "@/lib/categories";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesPage() {
  const categoryCards = categories.map((category) => ({
    ...category,
    recipeCount: getRecipesByCategory(category.slug).length,
  }));

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-10 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">
              Categories
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Explore healthy recipe categories
            </h1>
            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Browse Mediterranean recipe categories and discover fresh ideas for salads, soups, wraps, vegetarian meals, and more.
            </p>
          </div>
        </section>

        <section className="pb-20">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categoryCards.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <article className="flex h-full flex-col">
                  <div className="relative h-56 overflow-hidden bg-gray-100 sm:h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        {category.recipeCount} recipes
                      </span>
                    </div>

                    <div className="mt-6">
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {category.name}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-3">
                      <span className="text-sm font-medium text-green-700 transition group-hover:text-green-800">
                        View recipes
                      </span>
                      <span className="text-2xl font-bold text-gray-900">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
