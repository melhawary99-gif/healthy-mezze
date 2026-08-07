import { Recipe } from "@/types/recipe";
import RecipeCard from "./RecipeCard";
import { useTranslations } from "next-intl";

interface RelatedRecipesSectionProps {
  recipes: Recipe[];
  category: string;
}

export default function RelatedRecipesSection({ recipes, category }: RelatedRecipesSectionProps) {
  const t = useTranslations("RelatedRecipes");
  const categoryT = useTranslations();
  if (recipes.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">{t("title")}</h2>

        <p className="mt-2 text-gray-600">
          {t("description")}{" "}
          <span className="font-semibold">
            {categoryT(
              `CategoriesData.${category.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}.name`
            )}
          </span>
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
