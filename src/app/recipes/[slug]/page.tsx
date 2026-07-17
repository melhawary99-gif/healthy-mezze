import { notFound } from "next/navigation";
import { getRecipeBySlug, getRelatedRecipes } from "@/lib/recipes";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import RecipeCard from "@/components/recipes/RecipeCard";
import FavoriteButton from "@/components/recipes/FavoriteButton";

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedRecipes = getRelatedRecipes(recipe.id, recipe.category);
  const prepMinutes = Number(recipe.prepTime.replace(/\D/g, ""));
  const cookMinutes = Number(recipe.cookTime.replace(/\D/g, ""));
  const totalTime =
    Number.isFinite(prepMinutes) && Number.isFinite(cookMinutes)
      ? `${prepMinutes + cookMinutes} min`
      : null;

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <div className="pt-20 pb-10 sm:pb-16">
          <Link
            href="/recipes"
            className="text-sm font-medium text-green-700 transition hover:text-green-800"
          >
            ← Back to recipes
          </Link>

          <article className="mt-8 space-y-12">
            <section className="space-y-8">
              <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-sm">
                <div className="relative aspect-[16/9] bg-gray-200 sm:aspect-[3/1]">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                      {recipe.category}
                    </span>
                    <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-semibold text-gray-700">
                      {recipe.difficulty}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                      {recipe.title}
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
                      {recipe.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start justify-start lg:justify-end">
                  <FavoriteButton recipeId={recipe.id} />
                </div>
              </div>
            </section>

            <section className="grid gap-4 rounded-[2rem] bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl bg-gray-50 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                  Prep time
                </p>
                <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.prepTime} min</p>
              </div>
              <div className="rounded-3xl bg-gray-50 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                  Cook time
                </p>
                <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.cookTime} min</p>
              </div>
              {totalTime ? (
                <div className="rounded-3xl bg-gray-50 p-5">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                    Total time
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-gray-900">{totalTime}</p>
                </div>
              ) : null}
              <div className="rounded-3xl bg-gray-50 p-5">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                  Servings
                </p>
                <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.servings}</p>
              </div>
            </section>

            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr]">
              <div className="space-y-10">
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Ingredients</h2>
                  <ul className="mt-6 space-y-3">
                    {recipe.ingredients.map((ingredient) => (
                      <li
                        key={ingredient}
                        className="rounded-3xl border border-gray-200 bg-white px-5 py-4 text-gray-700 shadow-sm"
                      >
                        <span className="mr-2 font-semibold text-green-700">✓</span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Instructions</h2>
                  <ol className="mt-6 space-y-5">
                    {recipe.instructions.map((step, index) => (
                      <li
                        key={`${index}-${step}`}
                        className="flex gap-5 rounded-3xl bg-white p-5 shadow-sm"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <aside className="space-y-6 rounded-[2rem] border border-gray-200 bg-green-50 p-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Nutrition facts</h2>
                  <p className="mt-3 text-sm text-gray-600">
                    Key nutrition values for this recipe.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 text-center">
                    <p className="text-sm text-gray-500">Calories</p>
                    <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.nutrition.calories}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-center">
                    <p className="text-sm text-gray-500">Protein</p>
                    <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.nutrition.protein}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-center">
                    <p className="text-sm text-gray-500">Carbs</p>
                    <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.nutrition.carbs}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 text-center">
                    <p className="text-sm text-gray-500">Fat</p>
                    <p className="mt-3 text-2xl font-semibold text-gray-900">{recipe.nutrition.fat}</p>
                  </div>
                </div>
              </aside>
            </div>

            {relatedRecipes.length > 0 && (
              <section className="space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Related recipes</h2>
                    <p className="mt-2 text-sm text-gray-600">More recipes from {recipe.category.toLowerCase()}.</p>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedRecipes.map((related) => (
                    <RecipeCard key={related.slug} recipe={related} />
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>
      </Container>
    </main>
  );
}
