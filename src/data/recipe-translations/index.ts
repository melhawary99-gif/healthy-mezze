import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";

import { greekSaladAr } from "./ar/greek-salad";
import { FalafelBowlAr } from "./ar/falafel-bowl";
import { LentilSoupAr } from "./ar/lentil-soup";
import { chickenShawarmaAr } from "./ar/chicken-shawarma";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
};

const arTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladAr,
  "falafel-bowl": FalafelBowlAr,
  "lentil-soup": LentilSoupAr,
  "chicken-shawarma": chickenShawarmaAr,
};

export function getRecipeTranslation(
  slug: string,
  locale: "en" | "ar"
): RecipeTranslation | undefined {
  return locale === "ar" ? arTranslations[slug] : enTranslations[slug];
}
