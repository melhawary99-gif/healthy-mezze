import { recipeTranslations } from "@/data/recipe-translations/manifest";

export function getRecipeTranslation(slug: string, locale: "en" | "ar") {
  const translation = recipeTranslations[slug];

  if (!translation) {
    return null;
  }

  return translation[locale] ?? translation.en ?? null;
}
