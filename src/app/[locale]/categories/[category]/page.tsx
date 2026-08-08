import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { getRecipesByCategory } from "@/lib/categories";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";
import { categories } from "@/data/categories";

import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

type CategoryPageProps = {
  params: Promise<{
    locale: "en" | "ar";
    category: string;
  }>;
};

const SITE_URL = "https://healthymezze.com";

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale, category } = await params;

  const categoryData = categories.find((item) => item.slug === category);

  if (!categoryData) {
    return {
      title: "Category Not Found | Healthy Mezze",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const t = await getTranslations({
    locale,
  });

  const categoryName = t(categoryData.nameKey);
  const categoryDescription = t(categoryData.descriptionKey);

  const localizedUrl = `${SITE_URL}/${locale}/categories/${categoryData.slug}`;
  const englishUrl = `${SITE_URL}/en/categories/${categoryData.slug}`;
  const arabicUrl = `${SITE_URL}/ar/categories/${categoryData.slug}`;

  const keywords =
    locale === "ar"
      ? [
          `${categoryName} وصفات`,
          `وصفات ${categoryName}`,
          "وصفات صحية",
          "وصفات البحر الأبيض المتوسط",
          "أكلات متوسطية",
          "وصفات صحية سهلة",
        ]
      : [
          `${categoryName} recipes`,
          `healthy ${categoryName} recipes`,
          "healthy Mediterranean recipes",
          "Mediterranean recipes",
          "healthy recipes",
          "easy healthy recipes",
        ];

  const title = `${categoryName} Recipes | Healthy Mezze`;

  return {
    title,

    description: categoryDescription,

    keywords,

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
      type: "website",

      locale: locale === "ar" ? "ar_AR" : "en_US",

      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_AR"],

      url: localizedUrl,

      siteName: "Healthy Mezze",

      title,

      description: categoryDescription,

      images: [
        {
          url: `${SITE_URL}${categoryData.image}`,
          alt: categoryName,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description: categoryDescription,

      images: [`${SITE_URL}${categoryData.image}`],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, category } = await params;

  const t = await getTranslations({
    locale,
  });

  const categoryData = categories.find((item) => item.slug === category);

  if (!categoryData) {
    notFound();
  }

  const recipes = getRecipesByCategory(categoryData.slug);

  if (recipes.length === 0) {
    notFound();
  }

  const localizedRecipes = (
    await Promise.all(recipes.map((recipe) => getLocalizedRecipe(recipe.slug, locale)))
  ).filter((recipe): recipe is NonNullable<typeof recipe> => recipe !== null);

  const categoryName = t(categoryData.nameKey);

  const categoryDescription = t(categoryData.descriptionKey);

  const localizedUrl = `${SITE_URL}/${locale}/categories/${categoryData.slug}`;

  const recipeItems = localizedRecipes.map((recipe, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: recipe.title,
    url: `${SITE_URL}/${locale}/recipes/${recipe.slug}`,
  }));

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",

    name: `${categoryName} Recipes`,

    description: categoryDescription,

    url: localizedUrl,

    mainEntityOfPage: localizedUrl,

    inLanguage: locale,

    isAccessibleForFree: true,

    mainEntity: {
      "@type": "ItemList",

      name: `${categoryName} Recipes`,

      numberOfItems: localizedRecipes.length,

      itemListElement: recipeItems,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("Navigation.home"),
        item: `${SITE_URL}/${locale}`,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: t("Navigation.categories"),
        item: `${SITE_URL}/${locale}/categories`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: localizedUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categorySchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Container>
        <main className="pt-20 pb-16">
          <section className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {categoryData.icon} {t("Categories.title")}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {categoryName}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {categoryDescription}
            </p>
          </section>

          <section className="mt-12" aria-label={`${categoryName} recipes`}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {localizedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
