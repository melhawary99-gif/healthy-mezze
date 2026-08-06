"use client";

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";
import RecipeFilters from "@/components/recipes/RecipeFilters";

import { Recipe } from "@/types/recipe";
import { getLocalizedRecipes } from "@/lib/getLocalizedRecipes";

const popularSearches = ["Chicken", "Salad", "Vegan", "Soup", "Wraps"];

export default function RecipesPage() {
  const locale = useLocale() as "en" | "ar";

  const t = useTranslations("Recipes");

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("A-Z");

  useEffect(() => {
    getLocalizedRecipes(locale).then(setRecipes);
  }, [locale]);

  const availableCategories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(recipes.map((recipe) => recipe.category)));

    return ["All", ...uniqueCategories];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = recipes.filter((recipe) => {
      const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      return (
        recipe.title.toLowerCase().includes(normalizedQuery) ||
        recipe.description.toLowerCase().includes(normalizedQuery) ||
        recipe.category.toLowerCase().includes(normalizedQuery)
      );
    });

    switch (sortBy) {
      case "Z-A":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "Prep Time":
        filtered.sort((a, b) => parseInt(a.prepTime, 10) - parseInt(b.prepTime, 10));
        break;

      default:
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [recipes, query, selectedCategory, sortBy]);

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-8 text-center sm:pt-24 sm:pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {t("title")}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("heading")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {t("description")}
          </p>
        </section>

        <RecipeFilters
          query={query}
          onQueryChange={setQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          categories={availableCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          popularSearches={popularSearches}
        />

        <section className="mt-10">
          {filteredRecipes.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">{t("noResults")}</h2>

              <p className="mt-3 text-gray-600">{t("tryAgain")}</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
