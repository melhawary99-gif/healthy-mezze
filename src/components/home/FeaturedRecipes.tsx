import { recipes } from "@/data/recipes";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import RecipeCard from "@/components/recipes/RecipeCard";

const featuredRecipeTitles = [
  "Greek Salad",
  "Falafel Bowl",
  "Lentil Soup",
  "Chicken Shawarma",
];

export default function FeaturedRecipes() {
  const featuredRecipes = featuredRecipeTitles
    .map((title) => recipes.find((recipe) => recipe.title === title))
    .filter((recipe): recipe is (typeof recipes)[number] => Boolean(recipe));

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Featured Recipes"
          subtitle="Fresh Mediterranean-inspired dishes that are healthy, delicious, and easy to prepare."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </Container>
    </section>
  );
}
