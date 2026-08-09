import { getRecipeBySlug } from "@/lib/recipes";
import { getRecipeTranslation } from "@/lib/recipeTranslationLoader";
import type { Recipe } from "@/types/recipe";
import type { RecipeTranslation } from "@/types/recipeTranslation";

export type LocalizedRecipe = Recipe & Partial<RecipeTranslation>;

export async function getLocalizedRecipe(
  slug: string,
  locale: "en" | "ar"
): Promise<LocalizedRecipe | null> {
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

    longDescription: translation.longDescription ?? recipe.longDescription,

    imageAlt: translation.imageAlt ?? recipe.imageAlt,

    ingredients: translation.ingredients.length > 0 ? translation.ingredients : recipe.ingredients,

    instructions:
      translation.instructions.length > 0 ? translation.instructions : recipe.instructions,

    healthBenefits: translation.healthBenefits?.length
      ? translation.healthBenefits
      : recipe.healthBenefits,

    keywords: translation.keywords?.length ? translation.keywords : recipe.keywords,

    tags: translation.tags?.length ? translation.tags : recipe.tags,

    story: translation.story,

    cookingGuide: translation.cookingGuide,

    adaptations: translation.adaptations,

    visualSteps: translation.visualSteps,

    recipeRescue: translation.recipeRescue,

    whatIf: translation.whatIf,

    storage: translation.storage,

    serving: translation.serving,

    faq: translation.faq,
  };
}
