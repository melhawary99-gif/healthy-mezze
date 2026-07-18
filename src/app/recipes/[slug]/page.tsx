import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipeBySlug, getRelatedRecipes } from "@/lib/recipes";
import Container from "@/components/ui/Container";
import Link from "next/link";

import RecipeHero from "@/components/recipes/RecipeHero";
import RecipeQuickInfo from "@/components/recipes/RecipeQuickInfo";
import IngredientsSection from "@/components/recipes/IngredientsSection";
import InstructionsSection from "@/components/recipes/InstructionsSection";
import NutritionSidebar from "@/components/recipes/NutritionSidebar";
import RelatedRecipesSection from "@/components/recipes/RelatedRecipesSection";

type RecipePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;

  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: recipe.title,

    description: recipe.description,

    keywords: recipe.keywords,

    alternates: {
      canonical: `/recipes/${recipe.slug}`,
    },

    openGraph: {
      title: recipe.title,
      description: recipe.description,
      url: `/recipes/${recipe.slug}`,
      type: "article",

      images: [
        {
          url: recipe.image,
          alt: recipe.imageAlt ?? recipe.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description,
      images: [recipe.image],
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedRecipes = getRelatedRecipes(recipe.id, recipe.category);

  
 

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <div className="pt-20 pb-16">

          <Link
            href="/recipes"
            className="inline-flex items-center text-sm font-semibold text-green-700 transition hover:text-green-900"
          >
            ← Back to Recipes
          </Link>

          <article className="mt-8 space-y-12">

            <RecipeHero recipe={recipe} />

           <RecipeQuickInfo recipe={recipe} />

            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr]">

              <div className="space-y-12">

                <IngredientsSection recipe={recipe} />

               <InstructionsSection recipe={recipe} />

              </div>

            <NutritionSidebar recipe={recipe} />

            </div>

            <RelatedRecipesSection
  recipes={relatedRecipes}
  category={recipe.category}
/>

          </article>

        </div>

      </Container>

    </main>
  );
}