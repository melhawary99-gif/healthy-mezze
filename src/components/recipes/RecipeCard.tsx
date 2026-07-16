import Image from "next/image";
import { Recipe } from "@/types/recipe";
import Link from "next/link";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            {recipe.category}
          </span>

          <span className="text-sm text-gray-500">
            {recipe.difficulty}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          {recipe.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-gray-600">
          {recipe.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
          <span>
            ⏱ {recipe.prepTime} min
          </span>

          <span>
            👥 {recipe.servings} servings
          </span>
        </div>

       <Link
  href={`/recipes/${recipe.slug}`}
  className="mt-6 block w-full rounded-xl bg-green-700 px-5 py-3 text-center font-medium text-white transition hover:bg-green-800"
>
  View Recipe
</Link>

      </div>
    </article>
  );
}