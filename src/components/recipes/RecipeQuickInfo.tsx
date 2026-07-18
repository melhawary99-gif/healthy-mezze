import { Recipe } from "@/types/recipe";

interface RecipeQuickInfoProps {
  recipe: Recipe;
}

export default function RecipeQuickInfo({
  recipe,
}: RecipeQuickInfoProps) {
  const prepMinutes = Number(recipe.prepTime.replace(/\D/g, ""));
  const cookMinutes = Number(recipe.cookTime.replace(/\D/g, ""));

  const totalTime =
    Number.isFinite(prepMinutes) && Number.isFinite(cookMinutes)
      ? `${prepMinutes + cookMinutes} min`
      : null;

  return (
    <section className="grid gap-4 rounded-[2rem] bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-3xl bg-gray-50 p-6 text-center">
        <div className="text-4xl">⏱</div>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
          Prep Time
        </p>

        <p className="mt-2 text-2xl font-bold">
          {recipe.prepTime} min
        </p>
      </div>

      <div className="rounded-3xl bg-gray-50 p-6 text-center">
        <div className="text-4xl">🔥</div>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
          Cook Time
        </p>

        <p className="mt-2 text-2xl font-bold">
          {recipe.cookTime} min
        </p>
      </div>

      {totalTime && (
        <div className="rounded-3xl bg-gray-50 p-6 text-center">
          <div className="text-4xl">⌛</div>

          <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
            Total Time
          </p>

          <p className="mt-2 text-2xl font-bold">
            {totalTime}
          </p>
        </div>
      )}

      <div className="rounded-3xl bg-gray-50 p-6 text-center">
        <div className="text-4xl">🍽</div>

        <p className="mt-3 text-sm uppercase tracking-widest text-gray-500">
          Servings
        </p>

        <p className="mt-2 text-2xl font-bold">
          {recipe.servings}
        </p>
      </div>
    </section>
  );
}