import { Recipe } from "@/types/recipe";

interface NutritionSidebarProps {
  recipe: Recipe;
}

export default function NutritionSidebar({
  recipe,
}: NutritionSidebarProps) {
  return (
    <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">

      <section className="rounded-[2rem] border border-gray-200 bg-green-50 p-6">

        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Nutrition Facts
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Approximate nutrition values per serving.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

          <NutritionCard
            icon="🔥"
            label="Calories"
            value={recipe.nutrition.calories}
          />

          <NutritionCard
            icon="💪"
            label="Protein"
            value={recipe.nutrition.protein}
          />

          <NutritionCard
            icon="🌾"
            label="Carbohydrates"
            value={recipe.nutrition.carbs}
          />

          <NutritionCard
            icon="🥑"
            label="Fat"
            value={recipe.nutrition.fat}
          />

          {"fiber" in recipe.nutrition &&
            recipe.nutrition.fiber && (
              <NutritionCard
                icon="🌿"
                label="Fiber"
                value={recipe.nutrition.fiber}
              />
            )}

          {"sugar" in recipe.nutrition &&
            recipe.nutrition.sugar && (
              <NutritionCard
                icon="🍯"
                label="Sugar"
                value={recipe.nutrition.sugar}
              />
            )}

          {"sodium" in recipe.nutrition &&
            recipe.nutrition.sodium && (
              <NutritionCard
                icon="🧂"
                label="Sodium"
                value={recipe.nutrition.sodium}
              />
            )}

        </div>

      </section>

      {"healthBenefits" in recipe &&
        recipe.healthBenefits &&
        recipe.healthBenefits.length > 0 && (

          <section className="rounded-[2rem] bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold">
              Health Benefits
            </h2>

            <ul className="mt-6 space-y-4">

              {recipe.healthBenefits.map((benefit) => (

                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl bg-green-50 p-4"
                >
                  <span className="text-xl">🌿</span>

                  <span className="text-gray-700">
                    {benefit}
                  </span>

                </li>

              ))}

            </ul>

          </section>

        )}

    </aside>
  );
}

interface NutritionCardProps {
  icon: string;
  label: string;
  value: string | number;
}

function NutritionCard({
  icon,
  label,
  value,
}: NutritionCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="text-4xl">
        {icon}
      </div>

      <p className="mt-3 text-3xl font-bold text-green-700">
        {value}
      </p>

      <p className="text-sm text-gray-500">
        {label}
      </p>

    </div>
  );
}
