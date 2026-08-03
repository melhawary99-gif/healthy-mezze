import { getRecipeBySlug } from "@/lib/recipes";
import { getRecipeTranslation } from "@/lib/recipeTranslationLoader";

export async function getLocalizedRecipe(slug: string, locale: "en" | "ar") {
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return null;
  }

  const translation = await getRecipeTranslation(slug, locale);

  if (!translation) {
    return recipe;
  }

  return {
    ...recipe,

    title: translation.title,
    description: translation.description,
    longDescription: translation.longDescription,

    ingredients: recipe.ingredients.map((ingredient, index) => ({
      ...ingredient,
      name: translation.ingredients[index] ?? ingredient.name,
    })),

    instructions:
      translation.instructions.length > 0 ? translation.instructions : recipe.instructions,

    healthBenefits:
      translation.healthBenefits.length > 0 ? translation.healthBenefits : recipe.healthBenefits,

    keywords: translation.keywords.length > 0 ? translation.keywords : recipe.keywords,

    tags: translation.tags.length > 0 ? translation.tags : recipe.tags,
  };
}
