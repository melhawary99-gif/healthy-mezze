"use client";

import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/types/recipe";
import Container from "@/components/ui/Container";

export default function SearchRecipes() {
  const [query, setQuery] = useState("");

  const popularSearches = [
    "Chicken",
    "Salad",
    "Vegan",
    "Soup",
    "Wraps",
  ];

  const filtered: Recipe[] = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return recipes;

    return recipes.filter((recipe) => {
      const inTitle = recipe.title.toLowerCase().includes(q);

      const inDescription = recipe.description
        .toLowerCase()
        .includes(q);

      const inCategory = recipe.category
        .toLowerCase()
        .includes(q);

      const inIngredients = recipe.ingredients
        .join(" ")
        .toLowerCase()
        .includes(q);

      return (
        inTitle ||
        inDescription ||
        inCategory ||
        inIngredients
      );
    });
  }, [query]);

  return (
    <section className="w-full py-10">
      <Container>
        <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Search recipes
        </label>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try chicken, salad, vegan..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div className="mb-6">
        <p className="mb-3 text-sm text-gray-600">
          Popular searches:
        </p>

        <div className="flex flex-wrap gap-3">
          {popularSearches.map((item) => (
            <button
              key={item}
              onClick={() => setQuery(item)}
              className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 text-sm text-gray-600">
        {filtered.length} recipe
        {filtered.length !== 1 && "s"} found
      </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-gray-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            No recipes found
          </h3>

          <p className="mt-2 text-gray-600">
            Try searching for chicken, salad, vegan, soup, or wraps.
          </p>
        </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}