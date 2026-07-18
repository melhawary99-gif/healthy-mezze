import Image from "next/image";
import Link from "next/link";
import { Heart, Clock3, Users } from "lucide-react";

import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Link
        href={`/recipes/${recipe.slug}`}
        className="relative block h-72 overflow-hidden bg-gray-100"
      >
        <Image
          src={recipe.image}
          alt={recipe.imageAlt ?? recipe.title}
          fill
          sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <button
          type="button"
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:scale-110"
        >
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {recipe.category}
          </span>

          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            {recipe.difficulty}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-green-700">
          {recipe.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-gray-600">
          {recipe.description}
        </p>

        <div className="mt-6 flex items-center gap-5 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-green-700" />
            <span>{recipe.prepTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-green-700" />
            <span>{recipe.servings}</span>
          </div>
        </div>

        <div className="mt-6 border-t pt-5">
          <Link
            href={`/recipes/${recipe.slug}`}
            className="font-semibold text-green-700 transition-all hover:translate-x-1 hover:text-green-800"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </article>
  );
}