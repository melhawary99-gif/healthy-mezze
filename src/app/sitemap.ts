import type { MetadataRoute } from "next";

import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";

const SITE_URL = "https://healthymezze.com";

const locales = ["en", "ar"] as const;

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomePages = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const localizedStaticPages = locales.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}/recipes`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/${locale}/categories`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/${locale}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/${locale}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/${locale}/faq`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/${locale}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/${locale}/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/${locale}/cookies`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/${locale}/disclaimer`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/${locale}/editorial-policy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ]);

  const localizedCategoryPages = locales.flatMap((locale) =>
    categories.map((category) => ({
      url: `${SITE_URL}/${locale}/categories/${encodeURIComponent(category.slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  const localizedRecipePages = locales.flatMap((locale) =>
    recipes.map((recipe) => ({
      url: `${SITE_URL}/${locale}/recipes/${recipe.slug}`,
      lastModified: recipe.dateModified ? new Date(recipe.dateModified) : now,
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
