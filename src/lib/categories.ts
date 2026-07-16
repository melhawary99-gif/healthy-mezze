import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";

export function getRecipesByCategory(categorySlug: string) {
  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return [];
  }

  return recipes.filter(
    (recipe) => recipe.category === category.name
  );
}