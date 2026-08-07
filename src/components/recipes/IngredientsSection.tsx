import { Recipe } from "@/types/recipe";
import IngredientChecklist from "./IngredientChecklist";
import { useTranslations } from "next-intl";

interface IngredientsSectionProps {
  recipe: Recipe;
}

export default function IngredientsSection({ recipe }: IngredientsSectionProps) {
  const t = useTranslations("Recipe");
  return (
    <section>
      <h2 className="text-3xl font-bold">{t("ingredients")}</h2>

      <div className="mt-6">
        <IngredientChecklist ingredients={recipe.ingredients} />
      </div>
    </section>
  );
}
