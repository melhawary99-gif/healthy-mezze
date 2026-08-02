import { getRecipeBySlug } from "@/lib/recipes";
import { getRecipeTranslation } from "@/lib/recipeTranslationLoader";

export function getLocalizedRecipe(slug: string, locale: "en" | "ar") {
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return null;
  }

  const translation = getRecipeTranslation(slug, locale);

  if (!translation) {
    return recipe;
  }

  return {
    ...recipe,

    title: translation.title,
    description: translation.description,
    longDescription: translation.longDescription,

    imageAlt: translation.imageAlt,

    ingredients: translation.ingredients,
    instructions: translation.instructions,

    healthBenefits: translation.healthBenefits,
    keywords: translation.keywords,
    tags: translation.tags,
  };
}
