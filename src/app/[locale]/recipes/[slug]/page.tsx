import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRelatedRecipes } from "@/lib/recipes";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

import RecipeHero from "@/components/recipes/RecipeHero";
import RecipeQuickInfo from "@/components/recipes/RecipeQuickInfo";
import IngredientsSection from "@/components/recipes/IngredientsSection";
import InstructionsSection from "@/components/recipes/InstructionsSection";
import NutritionSidebar from "@/components/recipes/NutritionSidebar";
import RelatedRecipesSection from "@/components/recipes/RelatedRecipesSection";
import { toISODuration } from "@/lib/schema";

type RecipePageProps = {
  params: Promise<{
    locale: "en" | "ar";
    slug: string;
  }>;
};

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  const recipe = await getLocalizedRecipe(slug, locale);

  const t = await getTranslations({
    locale,
    namespace: "Recipe",
  });

  if (!recipe) {
    return {
      title: t("notFound"),
    };
  }

  return {
    title: `${recipe.title} | Healthy Mezze`,

    description: recipe.description,

    keywords: recipe.keywords,

    alternates: {
      canonical: `https://healthymezze.com/${locale}/recipes/${recipe.slug}`,
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
      url: `https://healthymezze.com/${locale}/recipes/${recipe.slug}`,
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
      images: [`https://healthymezze.com${recipe.image}`],
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug, locale } = await params;

  const recipe = await getLocalizedRecipe(slug, locale);

  if (!recipe) {
    notFound();
  }

  const nav = await getTranslations({
    locale,
    namespace: "Navigation",
  });

  const relatedRecipes = await Promise.all(
    getRelatedRecipes(recipe.id, recipe.category).map((relatedRecipe) =>
      getLocalizedRecipe(relatedRecipe.slug, locale)
    )
  );

  const localizedRelatedRecipes = relatedRecipes.filter(
    (relatedRecipe): relatedRecipe is NonNullable<typeof relatedRecipe> => relatedRecipe !== null
  );

  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",

    name: recipe.title,

    description: recipe.description,

    mainEntityOfPage: `https://healthymezze.com/${locale}/recipes/${recipe.slug}`,

    url: `https://healthymezze.com/${locale}/recipes/${recipe.slug}`,

    inLanguage: locale,

    isAccessibleForFree: true,

    datePublished: recipe.datePublished ?? "2026-01-01",

    dateModified: recipe.dateModified ?? recipe.datePublished ?? "2026-01-01",

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

    prepTime: toISODuration(recipe.prepTime),

    cookTime: toISODuration(recipe.cookTime),

    totalTime: recipe.totalTime ? toISODuration(recipe.totalTime) : undefined,

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

    recipeInstructions: recipe.instructions.map((step: string) => ({
      "@type": "HowToStep",
      text: step,
    })),
  };

  const categorySlug = recipe.category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: nav("home"),
        item: `https://healthymezze.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: nav("recipes"),
        item: `https://healthymezze.com/${locale}/recipes`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: recipe.category,
        item: `https://healthymezze.com/${locale}/categories/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: recipe.title,
        item: `https://healthymezze.com/${locale}/recipes/${recipe.slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(recipeSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Container>
        <div className="pt-20 pb-16">
          <Link
            href="/recipes"
            className="inline-flex items-center text-sm font-semibold text-green-700 transition hover:text-green-900"
          >
            ← {nav("backToRecipes")}
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

            <RelatedRecipesSection recipes={localizedRelatedRecipes} category={recipe.category} />
          </article>
        </div>
      </Container>
    </main>
  );
}
