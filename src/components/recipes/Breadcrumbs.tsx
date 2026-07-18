"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  category: string;
  categorySlug: string;
  recipeTitle: string;
}

export default function Breadcrumbs({
  category,
  categorySlug,
  recipeTitle,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500"
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition hover:text-green-700"
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight size={16} />

      <Link
        href="/recipes"
        className="transition hover:text-green-700"
      >
        Recipes
      </Link>

      <ChevronRight size={16} />

      <Link
        href={`/categories/${categorySlug}`}
        className="transition hover:text-green-700"
      >
        {category}
      </Link>

      <ChevronRight size={16} />

      <span className="font-medium text-gray-900">
        {recipeTitle}
      </span>
    </nav>
  );
}