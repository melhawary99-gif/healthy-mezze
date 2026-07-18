import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";

interface RelatedRecipesSectionProps {
  recipes: Recipe[];
  category: string;
}

export default function RelatedRecipesSection({
  recipes,
  category,
}: RelatedRecipesSectionProps) {
  if (recipes.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">
          You May Also Like
        </h2>

        <p className="mt-2 text-gray-600">
          More delicious recipes from the{" "}
          <span className="font-semibold">
            {category}
          </span>{" "}
          category.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.slug}
            recipe={recipe}
          />
        ))}
      </div>
    </section>
  );
}