"use client";

import { Recipe } from "@/types/recipe";
import { useTranslations } from "next-intl";

interface RecipeQuickInfoProps {
  recipe: Recipe;
}

export default function RecipeQuickInfo({ recipe }: RecipeQuickInfoProps) {
  const t = useTranslations("Recipe");
  const prepMinutes = Number(recipe.prepTime.replace(/\D/g, ""));
  const cookMinutes = Number(recipe.cookTime.replace(/\D/g, ""));

  const totalTime =
    Number.isFinite(prepMinutes) && Number.isFinite(cookMinutes)
      ? `${prepMinutes + cookMinutes} mins`
      : null;

  return (
    <section className="grid gap-4 rounded-[2rem] bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-3xl bg-gray-50 p-6 text-center">
        <div className="text-4xl">⏱</div>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">{t("prepTime")}</p>

        <p className="mt-2 text-2xl font-bold">{recipe.prepTime}</p>
      </div>

      <div className="rounded-3xl bg-gray-50 p-6 text-center">
        <div className="text-4xl">🔥</div>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">{t("cookTime")}</p>

        <p className="mt-2 text-2xl font-bold">{recipe.cookTime}</p>
      </div>

      {totalTime && (
        <div className="rounded-3xl bg-gray-50 p-6 text-center">
          <div className="text-4xl">⌛</div>

          <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">{t("totalTime")}</p>

          <p className="mt-2 text-2xl font-bold">{totalTime}</p>
        </div>
      )}

      <div className="rounded-3xl bg-gray-50 p-6 text-center">
        <div className="text-4xl">🍽</div>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">{t("servings")}</p>

        <p className="mt-2 text-2xl font-bold">{recipe.servings}</p>
      </div>
    </section>
  );
}
