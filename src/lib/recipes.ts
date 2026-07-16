import { recipes } from "@/data/recipes";

export function getRecipeBySlug(slug: string) {
  return recipes.find(
    (recipe) => recipe.slug === slug
  );
}

export function getRelatedRecipes(
  recipeId: number,
  category: string
) {
  return recipes
    .filter(
      (recipe) =>
        recipe.id !== recipeId &&
        recipe.category === category
    )
    .slice(0, 3);
}