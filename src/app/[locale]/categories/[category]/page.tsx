import { notFound } from "next/navigation";
import { getRecipesByCategory } from "@/lib/categories";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";

import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

type CategoryPageProps = {
  params: Promise<{
    locale: "en" | "ar";
    category: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;

  const recipes = getRecipesByCategory(category);

  if (recipes.length === 0) {
    notFound();
  }

  // Localize every recipe before rendering the cards
  const localizedRecipes = (
    await Promise.all(recipes.map((recipe) => getLocalizedRecipe(recipe.slug, locale)))
  ).filter((recipe): recipe is NonNullable<typeof recipe> => recipe !== null);

  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>

        <p className="mt-3 text-gray-600">Explore our healthy {category.toLowerCase()} recipes.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {localizedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Container>
    </main>
  );
}
