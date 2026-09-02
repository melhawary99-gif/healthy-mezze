
import { recipes } from "@/data/recipes";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import RecipeCard from "@/components/recipes/RecipeCard";

const featuredRecipeSlugs = [
  "greek-salad",
  "falafel-bowl",
  "lentil-soup",
  "chicken-shawarma",
  "baba-ganoush",
  "fattoush",
  "ful-medames",
  "egyptian-koshari",
  "classic-hummus",
  "tabbouleh-salad",
];

export default function FeaturedRecipes() {
  const t = useTranslations("FeaturedRecipes");

  const featuredRecipes = featuredRecipeSlugs
    .map((slug) => recipes.find((recipe) => recipe.slug === slug))
    .filter((recipe): recipe is (typeof recipes)[number] => Boolean(recipe));

  return (
    <section className="py-20">
      <Container>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </Container>
    </section>
  );
}
