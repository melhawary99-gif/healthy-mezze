import { getRecipeTranslation as getStoredRecipeTranslation } from "@/data/recipe-translations";

export async function getRecipeTranslation(slug: string, locale: "en" | "ar") {
  return getStoredRecipeTranslation(slug, locale);
}
