import { recipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";

export async function getRecipe(slug: string, locale: string = "en"): Promise<Recipe | null> {
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return null;
  }

  if (locale === "en") {
    return recipe;
  }

  try {
    const translation = (await import(`@/translations/${locale}/recipes/${slug}`)).default;

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
  } catch {
    return recipe;
  }
}
