import Image from "next/image";

import FavoriteButton from "./FavoriteButton";
import PrintButton from "./PrintButton";

import { Recipe } from "@/types/recipe";
import ShareButton from "./ShareButton";
import { useTranslations } from "next-intl";

interface RecipeHeroProps {
  recipe: Recipe;
}

export default function RecipeHero({ recipe }: RecipeHeroProps) {
  const t = useTranslations("Recipe");

  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
      {/* Main hero: image left, title and description right on desktop */}
      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:p-10">
        <div className="min-w-0 flex justify-center">
          <Image
            src={recipe.image}
            alt={recipe.imageAlt ?? recipe.title}
            width={1536}
            height={1152}
            priority
            className="h-auto max-h-[560px] w-full max-w-full rounded-3xl object-contain"
            quality={75}
            sizes="(max-width: 1024px) 100vw, 680px"
          />
        </div>

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl">
            {recipe.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {recipe.description}
          </p>
        </div>
      </div>

      {/* Recipe information and actions */}
      <div className="border-t border-gray-100 px-5 py-6 sm:px-7 lg:px-10 lg:py-7">
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🥗 {t(`categories.${recipe.category}`)}
          </span>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            ⭐ {t(`difficulty.${recipe.difficulty.toLowerCase()}`)}
          </span>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ⏱ {recipe.prepTime}
          </span>

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            👥 {recipe.servings} {t("servings")}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 lg:justify-end">
          <FavoriteButton slug={recipe.slug} />
          <PrintButton />
          <ShareButton
            title={recipe.title}
            description={recipe.description}
          />
        </div>
      </div>
    </section>
  );
}
