import { notFound } from "next/navigation";
import { getRecipeBySlug } from "@/lib/recipes";
import Container from "@/components/ui/Container";
import Image from "next/image";

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RecipePage({
  params,
}: RecipePageProps) {
  const { slug } = await params;

  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="py-20">
      <Container>
        <article>
  <div className="relative mb-8 h-96 overflow-hidden rounded-3xl">
    <Image
      src={recipe.image}
      alt={recipe.title}
      fill
      className="object-cover"
    />
  </div>

  <h1>
            {recipe.title}
          </h1>

          <p className="mt-4 text-gray-600">
            {recipe.description}
          </p>

          <div className="mt-8 grid gap-4 rounded-3xl bg-gray-50 p-6 sm:grid-cols-3">
            <div>
              <strong>Prep Time</strong>
              <p>{recipe.prepTime} min</p>
            </div>

            <div>
              <strong>Cook Time</strong>
              <p>{recipe.cookTime} min</p>
            </div>

            <div>
              <strong>Servings</strong>
              <p>{recipe.servings}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">

  <section>
    <h2 className="text-3xl font-bold text-gray-900">
      Ingredients
    </h2>

    <ul className="mt-6 space-y-3">
      {recipe.ingredients.map((ingredient) => (
        <li
          key={ingredient}
          className="rounded-xl bg-gray-50 px-5 py-3 text-gray-700"
        >
          ✓ {ingredient}
        </li>
      ))}
    </ul>
  </section>

    <section>
    <h2 className="text-3xl font-bold text-gray-900">
      Instructions
    </h2>

    <ol className="mt-6 space-y-4">
      {recipe.instructions.map((step, index) => (
        <li
          key={step}
          className="flex gap-4 text-gray-700"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
            {index + 1}
          </span>

          <p className="pt-1">
            {step}
          </p>
        </li>
      ))}
    </ol>
  </section>

</div>

<section className="mt-12 rounded-3xl bg-green-50 p-8">
  <h2 className="text-3xl font-bold text-gray-900">
    Nutrition
  </h2>

  <div className="mt-6 grid gap-4 sm:grid-cols-4">
    <div>
      <p className="text-sm text-gray-500">
        Calories
      </p>
      <p className="text-xl font-bold">
        {recipe.nutrition.calories}
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Protein
      </p>
      <p className="text-xl font-bold">
        {recipe.nutrition.protein}
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Carbs
      </p>
      <p className="text-xl font-bold">
        {recipe.nutrition.carbs}
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Fat
      </p>
      <p className="text-xl font-bold">
        {recipe.nutrition.fat}
      </p>
    </div>
  </div>
</section>
        </article>
      </Container>
    </main>
  );
}