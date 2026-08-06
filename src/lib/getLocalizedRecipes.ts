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

        ingredients: recipe.ingredients.map((ingredient, index) => ({
          ...ingredient,
          name: translation.ingredients[index]?.name ?? ingredient.name,
        })),

        instructions:
          translation.instructions.length > 0 ? translation.instructions : recipe.instructions,

        healthBenefits: translation.healthBenefits?.length
          ? translation.healthBenefits
          : recipe.healthBenefits,

        keywords: translation.keywords?.length ? translation.keywords : recipe.keywords,

        tags: translation.tags?.length ? translation.tags : recipe.tags,
      };
    })
  );
}
