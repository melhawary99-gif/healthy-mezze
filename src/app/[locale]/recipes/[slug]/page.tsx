import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRelatedRecipes } from "@/lib/recipes";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";
import { toISODuration } from "@/lib/schema";

import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

import RecipeHero from "@/components/recipes/RecipeHero";
import RecipeQuickInfo from "@/components/recipes/RecipeQuickInfo";
import IngredientsSection from "@/components/recipes/IngredientsSection";
import InstructionsSection from "@/components/recipes/InstructionsSection";
import NutritionSidebar from "@/components/recipes/NutritionSidebar";
import RelatedRecipesSection from "@/components/recipes/RelatedRecipesSection";

import RecipeStorySection from "@/components/recipes/RecipeStorySection";
import CookingGuideSection from "@/components/recipes/CookingGuideSection";
import RecipeAdaptationsSection from "@/components/recipes/RecipeAdaptationsSection";
import VisualStepsSection from "@/components/recipes/VisualStepsSection";
import RecipeRescue from "@/components/recipes/RecipeRescue";
import WhatIfEngine from "@/components/recipes/WhatIfEngine";
import RecipeStorageSection from "@/components/recipes/RecipeStorageSection";
import RecipeServingSection from "@/components/recipes/RecipeServingSection";
import RecipeFAQSection from "@/components/recipes/RecipeFAQSection";

import { SITE_URL } from "@/lib/seo";
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const localizedUrl = `${SITE_URL}/${locale}/recipes/${recipe.slug}`;
  const englishUrl = `${SITE_URL}/en/recipes/${recipe.slug}`;
  const arabicUrl = `${SITE_URL}/ar/recipes/${recipe.slug}`;

  return {
    title: `${recipe.title} | Healthy Mezze`,

    description: recipe.description,

    keywords: recipe.keywords,

    alternates: {
      canonical: localizedUrl,

      languages: {
        en: englishUrl,
        ar: arabicUrl,
        "x-default": englishUrl,
      },
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
      url: localizedUrl,
      type: "article",

      locale: locale === "ar" ? "ar_AR" : "en_US",

      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_AR"],

      images: [
        {
          url: `${SITE_URL}${recipe.image}`,
          alt: recipe.imageAlt ?? recipe.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${recipe.title} | Healthy Mezze`,
      description: recipe.description,
      images: [`${SITE_URL}${recipe.image}`],
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

  const localizedUrl = `${SITE_URL}/${locale}/recipes/${recipe.slug}`;

  const categorySlug = recipe.category.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

  const categoryUrl = `${SITE_URL}/${locale}/categories/${categorySlug}`;

  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",

    name: recipe.title,

    description: recipe.description,

    mainEntityOfPage: localizedUrl,

    url: localizedUrl,

    inLanguage: locale,

    isAccessibleForFree: true,

    datePublished: recipe.datePublished ?? "2026-01-01",

    dateModified: recipe.dateModified ?? recipe.datePublished ?? "2026-01-01",

    image: [
      {
        "@type": "ImageObject",
        url: `${SITE_URL}${recipe.image}`,
      },
    ],

    author: {
      "@type": "Organization",
      name: "Healthy Mezze",
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: "Healthy Mezze",
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
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

    recipeInstructions:
      recipe.visualSteps && recipe.visualSteps.length > 0
        ? recipe.visualSteps.map((step) => ({
            "@type": "HowToStep",
            name: step.title,
            text: step.description,
            image: step.image ? `${SITE_URL}${step.image}` : undefined,
          }))
        : recipe.instructions.map((step: string) => ({
            "@type": "HowToStep",
            text: step,
          })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: nav("home"),
        item: `${SITE_URL}/${locale}`,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: nav("recipes"),
        item: `${SITE_URL}/${locale}/recipes`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: recipe.category,
        item: categoryUrl,
      },

      {
        "@type": "ListItem",
        position: 4,
        name: recipe.title,
        item: localizedUrl,
      },
    ],
  };

  return (
    <>
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
            {/* Recipe Hero */}
            <RecipeHero recipe={recipe} />

            {/* Quick Information */}
            <RecipeQuickInfo recipe={recipe} />

            {/* The Story Behind the Recipe */}
            {recipe.story && <RecipeStorySection story={recipe.story} />}

            {/* Ingredients + Instructions + Nutrition */}
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr]">
              <div className="space-y-12">
                <IngredientsSection recipe={recipe} />

                <InstructionsSection recipe={recipe} />
              </div>

              <NutritionSidebar recipe={recipe} />
            </div>

            {/* Before You Cook / Cooking Guide */}
            {recipe.cookingGuide && <CookingGuideSection cookingGuide={recipe.cookingGuide} />}

            {/* Step-by-Step Visual Guide */}
            {recipe.visualSteps && recipe.visualSteps.length > 0 && (
              <VisualStepsSection visualSteps={recipe.visualSteps} />
            )}

            {/* Make This Recipe Work for You */}
            {recipe.adaptations && <RecipeAdaptationsSection adaptations={recipe.adaptations} />}

            {/* Interactive Recipe Rescue */}
            {recipe.recipeRescue && recipe.recipeRescue.length > 0 && (
              <RecipeRescue options={recipe.recipeRescue} />
            )}

            {/* What If? Engine */}
            {recipe.whatIf && recipe.whatIf.length > 0 && (
              <WhatIfEngine scenarios={recipe.whatIf} />
            )}

            {/* Storage & Leftovers */}
            {recipe.storage && <RecipeStorageSection storage={recipe.storage} />}

            {/* Serving & Pairing */}
            {recipe.serving && <RecipeServingSection serving={recipe.serving} />}

            {/* Recipe FAQ */}
            {recipe.faq && recipe.faq.length > 0 && <RecipeFAQSection faq={recipe.faq} />}

            {/* Related Recipes */}
            <RelatedRecipesSection recipes={localizedRelatedRecipes} category={recipe.category} />
          </article>
        </div>
      </Container>
    </>
  );
}
