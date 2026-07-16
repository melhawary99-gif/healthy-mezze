import { notFound } from "next/navigation";
import { getRecipesByCategory } from "@/lib/categories";
import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;

  const recipes = getRecipesByCategory(category);

  if (recipes.length === 0) {
    notFound();
  }

  const title =
    category.charAt(0).toUpperCase() +
    category.slice(1);

  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-3 text-gray-600">
          Explore our healthy {category.toLowerCase()} recipes.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
  <RecipeCard
    key={recipe.id}
    recipe={recipe}
  />
))}
        </div>
      </Container>
    </main>
  );
}