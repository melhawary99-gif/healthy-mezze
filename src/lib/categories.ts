import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";

export function getRecipesByCategory(categorySlug: string) {
  const category = categories.find((item) => item.slug === categorySlug);

  if (!category) {
    return [];
  }

  // Dietary categories
  if (category.slug === "vegan") {
    return recipes.filter((recipe) => recipe.vegan);
  }

  if (category.slug === "vegetarian") {
    return recipes.filter((recipe) => recipe.vegetarian);
  }

  // Regular categories
  return recipes.filter((recipe) => recipe.category === category.slug);
}
