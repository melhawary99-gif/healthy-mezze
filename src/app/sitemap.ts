import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import { drinkVlogs } from "@/data/drink-vlogs";

const locales = ["en", "ar"] as const;


export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomePages = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const localizedStaticPages = locales.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}/recipes`,
        changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/${locale}/categories`,
        changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/${locale}/about`,
        changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/${locale}/contact`,
        changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/${locale}/faq`,
        changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/${locale}/privacy`,
        changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/${locale}/terms`,
        changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/${locale}/cookies`,
        changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/${locale}/disclaimer`,
        changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/${locale}/editorial-policy`,
        changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/${locale}/guides`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/${locale}/drink-vlog`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]);

  const localizedCategoryPages = locales.flatMap((locale) =>
    categories.map((category) => ({
      url: `${SITE_URL}/${locale}/categories/${encodeURIComponent(category.slug)}`,
        changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );


  const guideSlugs = [
    "egyptian-cuisine-guide",
    "lebanese-cuisine-guide",
    "eastern-mediterranean-food-guide",
    "egyptian-breakfast-guide",
    "lebanese-mezze-guide",
    "egyptian-pantry-essentials",
    "lebanese-pantry-essentials",
    "mediterranean-herbs-spices-guide",
    "tahini-guide",
    "zaatar-guide",
    "sumac-guide",
    "healthy-mezze-table-guide",
    "healthy-mediterranean-meal-planning",
    "mediterranean-cooking-techniques",
    "healthier-mediterranean-recipes-guide",
  ];

  const localizedGuidePages = locales.flatMap((locale) =>
    guideSlugs.map((slug) => ({
      url: `${SITE_URL}/${locale}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const localizedDrinkVlogPages = locales.flatMap((locale) =>
    drinkVlogs.map((drink) => ({
      url: `${SITE_URL}/${locale}/drink-vlog/${drink.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const localizedRecipePages = locales.flatMap((locale) =>
    recipes.map((recipe) => ({
      url: `${SITE_URL}/${locale}/recipes/${recipe.slug}`,
      ...(recipe.dateModified ? { lastModified: new Date(recipe.dateModified) } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  return [
    ...localizedHomePages,
    ...localizedStaticPages,
    ...localizedCategoryPages,
    ...localizedGuidePages,
    ...localizedDrinkVlogPages,
    ...localizedRecipePages,
  ];
}
