import type { MetadataRoute } from "next";

import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";

const SITE_URL = "https://healthymezze.com";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const recipePages = recipes.map((recipe) => ({
    url: `${SITE_URL}/recipes/${recipe.slug}`,
    lastModified: recipe.dateModified
      ? new Date(recipe.dateModified)
      : now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryPages = categories.map((category) => ({
    url: `${SITE_URL}/categories/${encodeURIComponent(category.slug)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/recipes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${SITE_URL}/categories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    ...categoryPages,

    ...recipePages,
  ];
}