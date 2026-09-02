"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface RecipeFiltersProps {
  query: string;
  sortBy: string;
  categories: string[];
  selectedCategory: string;
  popularSearches: string[];
}

export default function RecipeFilters({
  query,
  sortBy,
  categories,
  selectedCategory,
  popularSearches,
}: RecipeFiltersProps) {
  const t = useTranslations("RecipeFilters");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchValue, setSearchValue] = useState(query);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  useEffect(() => {
    if (searchValue === query) return;

    const timeout = window.setTimeout(() => {
      updateParams({ q: searchValue || null });
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [searchValue, query]);

  function updateParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (!value || (key === "sort" && value === "A-Z")) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    const queryString = params.toString();
    const nextUrl = queryString
      ? `${pathname}?${queryString}`
      : pathname;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  }

  function handleCategoryChange(category: string) {
    updateParams({
      category: category === "All" ? null : category,
    });
  }

  function handleSortChange(value: string) {
    updateParams({
      sort: value === "A-Z" ? null : value,
    });
  }

  function handlePopularSearch(value: string) {
    setSearchValue(value);
    updateParams({ q: value });
  }

  return (
    <section
      className={`rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm sm:p-8 ${
        isPending ? "opacity-90" : ""
      }`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {t("title")}
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {t("description")}
          </p>

          <div className="mt-6">
            <label
              htmlFor="recipe-search"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              {t("search")}
            </label>

            <input
              id="recipe-search"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handlePopularSearch(item)}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-green-100 bg-emerald-50 p-6">
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {t("sort")}
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-green-500 focus:outline-none"
          >
            <option value="A-Z">{t("sortOptions.az")}</option>
            <option value="Z-A">{t("sortOptions.za")}</option>
            <option value="Prep Time">
              {t("sortOptions.prepTime")}
            </option>
          </select>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-gray-700">
              {t("categories")}
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
