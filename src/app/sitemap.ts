import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";

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
  ]);

  const localizedCategoryPages = locales.flatMap((locale) =>
    categories.map((category) => ({
      url: `${SITE_URL}/${locale}/categories/${encodeURIComponent(category.slug)}`,
        changeFrequency: "weekly" as const,
      priority: 0.7,
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
    ...localizedRecipePages,
  ];
}
