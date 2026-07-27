import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";

export function getRecipesByCategory(categorySlug: string) {
  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return [];
  }

  // Dietary categories
  if (category.name === "Vegan") {
    return recipes.filter((recipe) => recipe.vegan === true);
  }

  if (category.name === "Vegetarian") {
    return recipes.filter((recipe) => recipe.vegetarian === true);
  }

  // Regular categories
  return recipes.filter(
    (recipe) => recipe.category === category.name
  );
}