import { recipes } from "@/data/recipes";

export function getRecipeBySlug(slug: string) {
  return recipes.find(
    (recipe) => recipe.slug === slug
  );
}