import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { getRecipesByCategory } from "@/lib/categories";
import { getLocalizedRecipe } from "@/lib/localizedRecipes";
import { categories } from "@/data/categories";
import { categoryEditorial } from "@/data/categoryEditorial";

import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";

import { SITE_URL } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{
    locale: "en" | "ar";
    category: string;
  }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { locale, category } = await params;

  const categoryData = categories.find((item) => item.slug === category);

  if (!categoryData) {
    return {
      title: "Category Not Found | Healthy Mezze",
      robots: { index: false, follow: false },
    };
  }

  const t = await getTranslations({ locale });
  const categoryName = t(categoryData.nameKey);
  const categoryDescription = t(categoryData.descriptionKey);

  const localizedUrl = `${SITE_URL}/${locale}/categories/${categoryData.slug}`;
  const englishUrl = `${SITE_URL}/en/categories/${categoryData.slug}`;
  const arabicUrl = `${SITE_URL}/ar/categories/${categoryData.slug}`;

  const title =
    locale === "ar"
      ? `وصفات ${categoryName} | Healthy Mezze`
      : `${categoryName} Recipes | Healthy Mezze`;

  return {
    title,
    description: categoryDescription,
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
    authors: [{ name: "Healthy Mezze" }],
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

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { locale, category } = await params;

  const t = await getTranslations({ locale });

  const categoryData = categories.find((item) => item.slug === category);

  if (!categoryData) notFound();

  const recipes = getRecipesByCategory(categoryData.slug);

  if (recipes.length === 0) notFound();

  const localizedRecipes = (
    await Promise.all(
      recipes.map((recipe) => getLocalizedRecipe(recipe.slug, locale))
    )
  ).filter(
    (recipe): recipe is NonNullable<typeof recipe> => recipe !== null
  );

  const categoryName = t(categoryData.nameKey);
  const categoryDescription = t(categoryData.descriptionKey);
  const editorial = categoryEditorial[locale][categoryData.slug];

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

  const isArabic = locale === "ar";

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
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              {categoryData.icon} {t("Categories.title")}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {categoryName}
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              {editorial.intro}
            </p>
          </header>

          <section className="mx-auto mt-14 max-w-4xl">
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {editorial.contextTitle}
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                {editorial.context}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {editorial.guidanceTitle}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {editorial.guidance}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {editorial.notesTitle}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-600">
                    {editorial.notes}
                  </p>
                </div>
              </div>

              {editorial.guide && (
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <Link
                    href={`/guides/${editorial.guide.slug}`}
                    className="font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    {editorial.guide.label} →
                  </Link>
                </div>
              )}
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {isArabic
                  ? `وصفات ${categoryName}`
                  : `${categoryName} Recipes`}
              </h2>

              <p className="mt-2 text-gray-600">
                {categoryDescription}
              </p>
            </div>

            <div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              aria-label={`${categoryName} recipes`}
            >
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
