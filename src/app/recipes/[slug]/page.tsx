import { notFound } from "next/navigation";
import { getRecipeBySlug } from "@/lib/recipes";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { getRelatedRecipes } from "@/lib/recipes";
import RecipeCard from "@/components/recipes/RecipeCard";
import FavoriteButton from "@/components/recipes/FavoriteButton";

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

  const relatedRecipes = getRelatedRecipes(
    recipe.id,
    recipe.category
  );

  return (
    <main className="bg-white py-20">
      <Container>
        <article>

          <Link
            href="/"
            className="text-sm font-medium text-green-700 hover:text-green-800"
          >
            ← Back to recipes
          </Link>

          <div className="mt-6 relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
            />
          </div>


          <div className="mt-8">

            <div className="flex flex-wrap gap-3">

              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                {recipe.category}
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                {recipe.difficulty}
              </span>

            </div>


            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                {recipe.title}
              </h1>

              <div>
                <FavoriteButton recipeId={recipe.id} />
              </div>
            </div>


            <p className="mt-4 max-w-3xl text-lg text-gray-600">
              {recipe.description}
            </p>


            <div className="mt-8 grid gap-4 rounded-3xl bg-gray-50 p-6 sm:grid-cols-3">

              <div>
                <p className="text-sm text-gray-500">
                  Prep Time
                </p>
                <p className="mt-1 text-xl font-bold">
                  ⏱ {recipe.prepTime} min
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Cook Time
                </p>
                <p className="mt-1 text-xl font-bold">
                  🔥 {recipe.cookTime} min
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Servings
                </p>
                <p className="mt-1 text-xl font-bold">
                  👥 {recipe.servings}
                </p>
              </div>

            </div>

          </div>


          <div className="mt-12 grid gap-12 lg:grid-cols-2">


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


              <ol className="mt-6 space-y-5">

                {recipe.instructions.map((step, index) => (

                  <li
                    key={step}
                    className="flex gap-4"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                      {index + 1}
                    </span>


                    <p className="pt-2 text-gray-700">
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


            <div className="mt-6 grid gap-5 sm:grid-cols-4">


              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-gray-500">
                  Calories
                </p>
                <p className="text-2xl font-bold">
                  {recipe.nutrition.calories}
                </p>
              </div>


              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-gray-500">
                  Protein
                </p>
                <p className="text-2xl font-bold">
                  {recipe.nutrition.protein}
                </p>
              </div>


              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-gray-500">
                  Carbs
                </p>
                <p className="text-2xl font-bold">
                  {recipe.nutrition.carbs}
                </p>
              </div>


              <div className="rounded-2xl bg-white p-5">
                <p className="text-sm text-gray-500">
                  Fat
                </p>
                <p className="text-2xl font-bold">
                  {recipe.nutrition.fat}
                </p>
              </div>


            </div>

          </section>


          {relatedRecipes.length > 0 && (
            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900">
                You may also like
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedRecipes.map((r) => (
                  <RecipeCard key={r.slug} recipe={r} />
                ))}
              </div>
            </section>
          )}


        </article>
      </Container>
    </main>
  );
}