import { Recipe } from "@/types/recipe";

export function createTranslationTemplate(recipe: Recipe) {
  return {
    title: "",

    description: "",

    longDescription: "",

    imageAlt: "",

    ingredients: recipe.ingredients.map((ingredient) => ({
      amount: ingredient.amount,
      unit: ingredient.unit,
      name: "",
      ...(ingredient.note !== undefined ? { note: "" } : {}),
    })),

    instructions: recipe.instructions.map(() => ""),

    healthBenefits: [],

    keywords: [],

    tags: [],
  };
}
