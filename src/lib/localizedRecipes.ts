import { getRecipeBySlug } from "@/lib/recipes";
import { getRecipeTranslation } from "@/lib/recipeTranslationLoader";

export async function getLocalizedRecipe(slug: string, locale: "en" | "ar") {
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return null;
  }

  if (locale === "en") {
    return recipe;
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

    ingredients: recipe.ingredients.map((ingredient, index) => ({
      ...ingredient,
      name: (translation.ingredients[index] as unknown as string) ?? ingredient.name,
    })),

    instructions:
      translation.instructions.length > 0 ? translation.instructions : recipe.instructions,

    healthBenefits: translation.healthBenefits?.length
      ? translation.healthBenefits
      : recipe.healthBenefits,

    keywords: translation.keywords?.length ? translation.keywords : recipe.keywords,

    tags: translation.tags?.length ? translation.tags : recipe.tags,
  };
}
