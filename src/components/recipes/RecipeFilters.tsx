"use client";

interface RecipeFiltersProps {
  query: string;
  onQueryChange: (value: string) => void;

  sortBy: string;
  onSortChange: (value: string) => void;

  categories: string[];
  selectedCategory: string;
  onCategoryChange: (value: string) => void;

  popularSearches: string[];
}

export default function RecipeFilters({
  query,
  onQueryChange,
  sortBy,
  onSortChange,
  categories,
  selectedCategory,
  onCategoryChange,
  popularSearches,
}: RecipeFiltersProps) {
  return (
    <section className="rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Search recipes
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Search by name, ingredient, description, or category.
          </p>

          <div className="mt-6">
            <label
              htmlFor="recipe-search"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Search recipes
            </label>

            <input
              id="recipe-search"
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Try chicken, salad, vegan..."
              className="w-full rounded-3xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {popularSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onQueryChange(item)}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-green-100 bg-emerald-50 p-6">
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Sort Recipes
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm focus:border-green-500 focus:outline-none"
          >
            <option value="A-Z">A–Z</option>
            <option value="Z-A">Z–A</option>
            <option value="Prep Time">Prep Time</option>
          </select>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-gray-700">
              Categories
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}