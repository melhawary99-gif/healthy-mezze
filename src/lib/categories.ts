import { recipes } from "@/data/recipes";

export function getRecipesByCategory(category: string) {
  return recipes.filter(
    (recipe) =>
      recipe.category.toLowerCase() ===
      category.toLowerCase()
  );
}