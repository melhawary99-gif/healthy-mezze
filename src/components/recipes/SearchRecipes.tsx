"use client";

import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";
import Container from "@/components/ui/Container";

export default function SearchRecipes() {
  const [query, setQuery] = useState("");

  const popularSearches = ["Chicken", "Salad", "Vegan", "Soup", "Wraps"];

  const filteredRecipes: Recipe[] = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return recipes;
    }

    return recipes.filter((recipe) => {
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
  }, [query]);

  return (
    <section className="w-full py-10">
      <Container>
        <div className="mb-6">
          <label htmlFor="recipe-search" className="mb-2 block text-sm font-medium text-gray-700">
            Search recipes
          </label>

          <input
            id="recipe-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try chicken, salad, vegan..."
            className="w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? "s" : ""} found
          </p>

          <div className="flex flex-wrap gap-3">
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

        {filteredRecipes.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900">No recipes match your search</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Try searching for chicken, salad, vegan, soup, or wraps.
            </p>
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
