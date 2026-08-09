import { recipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import { RecipeTranslation } from "@/types/recipeTranslation";
import { getRecipeTranslation } from "@/lib/recipeTranslationLoader";

export type LocalizedRecipe = Recipe & Partial<RecipeTranslation>;

export async function getRecipe(
  slug: string,
  locale: "en" | "ar" = "en"
): Promise<LocalizedRecipe | null> {
  const recipe = recipes.find((r) => r.slug === slug);

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
