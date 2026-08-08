"use client";

import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function SearchRecipes() {
  const t = useTranslations("Recipes");

  const [query, setQuery] = useState("");

  const popularSearches = [
    {
      key: "chicken",
      label: t("popularSearches.chicken"),
      searchValue: "Chicken",
    },
    {
      key: "salad",
      label: t("popularSearches.salad"),
      searchValue: "Salad",
    },
    {
      key: "vegan",
      label: t("popularSearches.vegan"),
      searchValue: "Vegan",
    },
    {
      key: "soup",
      label: t("popularSearches.soup"),
      searchValue: "Soup",
    },
    {
      key: "wraps",
      label: t("popularSearches.wraps"),
      searchValue: "Wraps",
    },
  ];

  const filteredRecipes: Recipe[] = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const title = recipe.title.toLowerCase();
      const description = recipe.description.toLowerCase();
      const category = recipe.category.toLowerCase();

      const ingredients = recipe.ingredients
        .map((ingredient) => ingredient.name)
        .join(" ")
        .toLowerCase();

      return (
        title.includes(normalizedQuery) ||
        description.includes(normalizedQuery) ||
        category.includes(normalizedQuery) ||
        ingredients.includes(normalizedQuery)
      );
    });
  }, [query]);

  return (
    <section className="bg-[#FAFAF7] py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <label htmlFor="recipe-search" className="mb-3 block text-sm font-semibold text-gray-900">
            {t("title")}
          </label>

          <input
            id="recipe-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            {filteredRecipes.length} {filteredRecipes.length !== 1 ? "recipes" : "recipe"} found
          </p>

          <div className="flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setQuery(item.searchValue)}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900">{t("noResults")}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">{t("tryAgain")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
