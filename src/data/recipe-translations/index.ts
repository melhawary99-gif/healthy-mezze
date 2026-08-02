import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
};

const arTranslations: Record<string, RecipeTranslation> = {
  // We'll add Arabic recipes here later
};

export function getRecipeTranslation(
  slug: string,
  locale: "en" | "ar"
): RecipeTranslation | undefined {
  return locale === "ar" ? arTranslations[slug] : enTranslations[slug];
}
