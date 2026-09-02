import Image from "next/image";

import FavoriteButton from "./FavoriteButton";
import PrintButton from "./PrintButton";

import { Recipe } from "@/types/recipe";
import ShareButton from "./ShareButton";
import { useTranslations, useLocale } from "next-intl";

interface RecipeHeroProps {
  recipe: Recipe;
}

export default function RecipeHero({ recipe }: RecipeHeroProps) {
  const t = useTranslations("Recipe");
  const locale = useLocale();
  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-lg">
      <div className="w-full overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt ?? recipe.title}
          width={1536}
          height={1152}
          priority
          className="h-auto w-full"
          quality={75}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        />
      </div>

      <div className="p-8 lg:p-12">
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

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{recipe.title}</h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">{recipe.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <FavoriteButton slug={recipe.slug} />
            <PrintButton />
            <ShareButton title={recipe.title} description={recipe.description} />
          </div>
        </div>
      </div>
    </section>
  );
}
