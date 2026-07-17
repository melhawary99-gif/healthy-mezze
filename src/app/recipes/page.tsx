"use client";

import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import { categories as categoryData } from "@/data/categories";
import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

const popularSearches = ["Chicken", "Salad", "Vegan", "Soup", "Wraps"];

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const availableCategories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(recipes.map((recipe) => recipe.category))
    );

    return ["All", ...uniqueCategories].sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return a.localeCompare(b);
    });
  }, []);

  const filteredRecipes = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === "All" || recipe.category === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const title = recipe.title.toLowerCase();
      const description = recipe.description.toLowerCase();
      const category = recipe.category.toLowerCase();
      const ingredients = recipe.ingredients.join(" ").toLowerCase();

      return (
        title.includes(normalizedQuery) ||
        description.includes(normalizedQuery) ||
        category.includes(normalizedQuery) ||
        ingredients.includes(normalizedQuery)
      );
    });
  }, [query, selectedCategory]);

  const categoryLabel = selectedCategory === "All" ? "All categories" : selectedCategory;

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-8 text-center sm:pt-24 sm:pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Recipes
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Browse healthy Mediterranean recipes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Find nourishing recipes for salads, soups, wraps, main dishes, vegetarian meals, and more.
          </p>
        </section>

        <section className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Search recipes</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Search by name, ingredient, description, or category.
              </p>

              <div className="mt-6">
                <label htmlFor="recipe-search" className="mb-2 block text-sm font-medium text-gray-700">
                  Search recipes
                </label>
                <input
                  id="recipe-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Try chicken, salad, vegan..."
                  className="w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {popularSearches.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setQuery(item)}
                    className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-green-100 bg-emerald-50 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-700">Selected</p>
              <p className="mt-4 text-3xl font-semibold text-gray-900">{categoryLabel}</p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Showing recipes for the category you choose below.
              </p>
              <p className="mt-6 text-2xl font-semibold text-gray-900">
                {filteredRecipes.length}
                <span className="text-base font-normal text-gray-600"> recipes</span>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap gap-3">
              {availableCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-green-200 ${
                    selectedCategory === category
                      ? "bg-green-700 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          {filteredRecipes.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">No recipes match your search</h2>
              <p className="mt-3 text-gray-600">
                Try a different search term or choose another category.
              </p>
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
