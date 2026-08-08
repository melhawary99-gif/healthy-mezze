"use client";

import { categories } from "@/data/categories";
import { getRecipesByCategory } from "@/lib/categories";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function CategoriesPage() {
  const t = useTranslations("Categories");
  const categoryT = useTranslations();

  const categoryCards = categories.map((category) => ({
    ...category,
    recipeCount: getRecipesByCategory(category.slug).length,
  }));

  return (
    <main>
      <Container>
        {/* Hero */}
        <section className="py-16 text-center sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {t("browse")}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">{t("subtitle")}</p>
          </div>
        </section>

        {/* Categories */}
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
                      alt={categoryT(category.nameKey)}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        {category.recipeCount} {t("recipes")}
                      </span>
                    </div>

                    <div className="mt-6">
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {categoryT(category.nameKey)}
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {categoryT(category.descriptionKey)}
                      </p>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-3">
                      <span className="text-sm font-medium text-green-700 transition group-hover:text-green-800">
                        {t("browse")}
                      </span>

                      <span aria-hidden="true" className="text-2xl font-bold text-gray-900">
                        →
                      </span>
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
