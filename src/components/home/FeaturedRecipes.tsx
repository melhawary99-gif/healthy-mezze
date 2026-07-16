import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedRecipes() {
  const featuredRecipes = recipes.slice(0, 4);

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Featured Recipes"
          subtitle="Discover healthy Mediterranean dishes made with fresh ingredients."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredRecipes.map((recipe) => (
            <RecipeCard
  key={recipe.id}
  recipe={recipe}
/>
          ))}
        </div>
      </Container>
    </section>
  );
}