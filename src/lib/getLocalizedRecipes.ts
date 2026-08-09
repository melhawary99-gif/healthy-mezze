import { recipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";
import { getRecipeTranslation } from "@/lib/recipeTranslationLoader";

export async function getLocalizedRecipes(locale: "en" | "ar"): Promise<Recipe[]> {
  if (locale === "en") {
    return recipes;
  }

  return Promise.all(
    recipes.map(async (recipe) => {
      const translation = await getRecipeTranslation(recipe.slug, locale);

      if (!translation) {
        return recipe;
      }

      return {
        ...recipe,

        title: translation.title,

        description: translation.description,

        longDescription: translation.longDescription ?? recipe.longDescription,

        imageAlt: translation.imageAlt ?? recipe.imageAlt,

        ingredients: translation.ingredients?.length ? translation.ingredients : recipe.ingredients,

        instructions: translation.instructions?.length
          ? translation.instructions
          : recipe.instructions,

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
    })
  );
}
