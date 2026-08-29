"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

import { Recipe } from "@/types/recipe";
import { getLocalizedRecipes } from "@/lib/getLocalizedRecipes";

const STORAGE_KEY = "healthy-mezze-favorites";

export default function FavoritesClient() {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("Favorites");

  const [favoriteSlugs] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw);

      return Array.isArray(parsed)
        ? parsed.filter((item): item is string => typeof item === "string")
        : [];
    } catch {
      return [];
    }
  });

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    let cancelled = false;

    getLocalizedRecipes(locale).then((data) => {
      if (!cancelled) {
        setRecipes(data);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const favoriteRecipes = recipes.filter((recipe) =>
    favoriteSlugs.includes(recipe.slug)
  );

  return (
    <main className="bg-white py-20">
      <Container>
        <section className="rounded-3xl bg-green-50 p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900">{t("title")}</h1>

          <p className="mt-3 max-w-2xl text-gray-600">{t("description")}</p>
        </section>

        {favoriteRecipes.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-green-200 bg-white p-10 text-center text-gray-700 shadow-sm">
            <p className="text-xl font-medium text-gray-900">
              {t("emptyTitle")}
            </p>

            <p className="mt-3 text-gray-600">{t("emptyDescription")}</p>
          </div>
        )}
      </Container>
    </main>
  );
}
