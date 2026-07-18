import { Recipe } from "@/types/recipe";
import IngredientChecklist from "./IngredientChecklist";

interface IngredientsSectionProps {
  recipe: Recipe;
}

export default function IngredientsSection({
  recipe,
}: IngredientsSectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold">
        Ingredients
      </h2>

      <div className="mt-6">
        <IngredientChecklist
          ingredients={recipe.ingredients}
        />
      </div>
    </section>
  );
}