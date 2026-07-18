import Image from "next/image";

import FavoriteButton from "./FavoriteButton";
import PrintButton from "./PrintButton";

import { Recipe } from "@/types/recipe";

interface RecipeHeroProps {
  recipe: Recipe;
}

export default function RecipeHero({
  recipe,
}: RecipeHeroProps) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
      <div className="relative aspect-[16/9] sm:aspect-[3/1]">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="p-8 lg:p-12">
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🥗 {recipe.category}
          </span>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            ⭐ {recipe.difficulty}
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ⏱ {recipe.prepTime} min
          </span>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            👥 {recipe.servings} Servings
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {recipe.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {recipe.description}
            </p>
          </div>

          <div className="flex gap-4">
            <FavoriteButton slug={recipe.slug} />
            <PrintButton />
          </div>
        </div>
      </div>
    </section>
  );
}