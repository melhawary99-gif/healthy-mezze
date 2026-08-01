"use client";

import { useEffect, useState } from "react";
import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

const STORAGE_KEY = "healthy-mezze-favorites";

export default function FavoritesPage() {
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        setFavoriteSlugs([]);
        return;
      }

      const parsed = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        setFavoriteSlugs(
          parsed.filter(
            (item): item is string => typeof item === "string"
          )
        );
      } else {
        setFavoriteSlugs([]);
      }
    } catch {
      setFavoriteSlugs([]);
    }
  }, []);

  const favoriteRecipes = recipes.filter((recipe) =>
    favoriteSlugs.includes(recipe.slug)
  );

  return (
    <main className="bg-white py-20">
      <Container>
        <section className="rounded-3xl bg-green-50 p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900">
            My Favorite Recipes
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Your saved recipes will appear here when you add them from the recipe details page.
          </p>
        </section>

        {favoriteRecipes.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.slug}
                recipe={recipe}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-green-200 bg-white p-10 text-center text-gray-700 shadow-sm">
            <p className="text-xl font-medium text-gray-900">
              No favorite recipes yet.
            </p>

            <p className="mt-3 text-gray-600">
              Save recipes you love and they will appear here.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}