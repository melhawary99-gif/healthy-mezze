import Image from "next/image";
import Link from "next/link";
import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/recipes/${recipe.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-gray-100"
      >
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            {recipe.category}
          </span>

          <span className="text-sm text-gray-500">
            {recipe.difficulty}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold leading-tight text-gray-900">
          {recipe.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-gray-600">
          {recipe.description}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>⏱ {recipe.prepTime} min</span>
          <span>👥 {recipe.servings} servings</span>
        </div>

        <Link
          href={`/recipes/${recipe.slug}`}
          className="mt-6 rounded-xl bg-green-700 px-5 py-3 text-center font-medium text-white transition-colors hover:bg-green-800"
        >
          View Recipe
        </Link>
      </div>
    </article>
  );
}