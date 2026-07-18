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
    title: `${recipe.title} | Healthy Mezze`,

    description: recipe.description,

    keywords: recipe.keywords,

    alternates: {
  canonical:
    `https://healthymezze.com/recipes/${recipe.slug}`,
},



 robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Healthy Mezze",
    },
  ],

  creator: "Healthy Mezze",

  publisher: "Healthy Mezze",




    openGraph: {
      title: `${recipe.title} | Healthy Mezze`,
      description: recipe.description,
      url: `https://healthymezze.com/recipes/${recipe.slug}`,
      type: "article",

      images: [
        {
          url: `https://healthymezze.com${recipe.image}`,
          alt: recipe.imageAlt ?? recipe.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${recipe.title} | Healthy Mezze`,
      description: recipe.description,
      images: [
  `https://healthymezze.com${recipe.image}`,
],
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

  
 const recipeSchema = {
  "@context": "https://schema.org",
  "@type": "Recipe",

  name: recipe.title,

  description: recipe.description,

  mainEntityOfPage: `https://healthymezze.com/recipes/${recipe.slug}`,

url: `https://healthymezze.com/recipes/${recipe.slug}`,

inLanguage: "en",

isAccessibleForFree: true,

datePublished:
  recipe.datePublished ?? "2026-01-01",

dateModified:
  recipe.dateModified ??
  recipe.datePublished ??
  "2026-01-01",

  image: [
  {
    "@type": "ImageObject",
    url: `https://healthymezze.com${recipe.image}`,
  },
],

  author: {
    "@type": "Organization",
    name: "Healthy Mezze",
  },

  publisher: {
    "@type": "Organization",
    name: "Healthy Mezze",
  },

  recipeCuisine: recipe.cuisine,

  recipeCategory: recipe.category,

  recipeYield: `${recipe.servings} servings`,

  prepTime: recipe.prepTime,

  cookTime: recipe.cookTime,

  totalTime:
  recipe.totalTime ??
  `${recipe.prepTime} ${recipe.cookTime}`,

  keywords: recipe.keywords?.join(", "),

  nutrition: {
    "@type": "NutritionInformation",

    calories: `${recipe.nutrition.calories} calories`,

    proteinContent: recipe.nutrition.protein,

    carbohydrateContent: recipe.nutrition.carbs,

    fatContent: recipe.nutrition.fat,

    fiberContent: recipe.nutrition.fiber,

    sugarContent: recipe.nutrition.sugar,

    sodiumContent: recipe.nutrition.sodium,
  },

  recipeIngredient: recipe.ingredients.map(
    (ingredient) =>
      `${ingredient.amount} ${ingredient.unit} ${ingredient.name}${
        ingredient.note ? ` (${ingredient.note})` : ""
      }`
  ),

  recipeInstructions: recipe.instructions.map((step) => ({
    "@type": "HowToStep",
    text: step,
  })),
};

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
    
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(recipeSchema),
  }}
/>


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