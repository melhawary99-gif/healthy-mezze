import { getTranslations } from "next-intl/server";

import RecipeCard from "@/components/recipes/RecipeCard";
import Container from "@/components/ui/Container";
import RecipeFilters from "@/components/recipes/RecipeFilters";

import { getLocalizedRecipes } from "@/lib/getLocalizedRecipes";

interface RecipesPageProps {
  params: Promise<{
    locale: "en" | "ar";
  }>;
  searchParams: Promise<{
    q?: string;
    category?: string;
    sort?: string;
  }>;
}

export default async function RecipesPage({
  params,
  searchParams,
}: RecipesPageProps) {
  const { locale } = await params;
  const { q, category, sort } = await searchParams;

  const t = await getTranslations({
    locale,
    namespace: "Recipes",
  });
  const recipes = await getLocalizedRecipes(locale);

  const query = q?.trim() ?? "";
  const selectedCategory = category || "All";
  const sortBy =
    sort === "Z-A" || sort === "Prep Time" || sort === "A-Z"
      ? sort
      : "A-Z";

  const popularSearches = [
    t("popularSearches.chicken"),
    t("popularSearches.salad"),
    t("popularSearches.vegan"),
    t("popularSearches.soup"),
    t("popularSearches.wraps"),
  ];

  const availableCategories = [
    "All",
    ...Array.from(new Set(recipes.map((recipe) => recipe.category))),
  ];

  const normalizedQuery = query.toLowerCase();

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "All" ||
      recipe.category === selectedCategory;

    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    return (
      recipe.title.toLowerCase().includes(normalizedQuery) ||
      recipe.description.toLowerCase().includes(normalizedQuery) ||
      recipe.category.toLowerCase().includes(normalizedQuery)
    );
  });

  switch (sortBy) {
    case "Z-A":
      filteredRecipes.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;

    case "Prep Time":
      filteredRecipes.sort(
        (a, b) =>
          parseInt(a.prepTime, 10) -
          parseInt(b.prepTime, 10)
      );
      break;

    default:
      filteredRecipes.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
  }

  return (
    <main className="bg-[#FAFAF7] text-gray-900">
      <Container>
        <section className="pt-20 pb-8 text-center sm:pt-24 sm:pb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            {t("title")}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t("heading")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {t("description")}
          </p>
        </section>

        <RecipeFilters
          query={query}
          sortBy={sortBy}
          categories={availableCategories}
          selectedCategory={selectedCategory}
          popularSearches={popularSearches}
        />

        <section className="mt-10">
          {filteredRecipes.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("noResults")}
              </h2>

              <p className="mt-3 text-gray-600">
                {t("tryAgain")}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
