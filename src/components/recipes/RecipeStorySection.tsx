import { RecipeStory } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface RecipeStorySectionProps {
  story: RecipeStory;
}

export default function RecipeStorySection({ story }: RecipeStorySectionProps) {
  const t = useTranslations("Recipe");

  return (
    <section className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-sm">
      <div className="bg-green-50 p-8 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {t("storyLabel")}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">{t("storyTitle")}</h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-700">{story.introduction}</p>
      </div>

      <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{t("culturalContext")}</h3>

          <p className="mt-4 leading-7 text-gray-700">{story.culturalContext}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">{t("mediterraneanConnection")}</h3>

          <p className="mt-4 leading-7 text-gray-700">{story.mediterraneanConnection}</p>
        </div>
      </div>

      {story.whatMakesItMediterranean.length > 0 && (
        <div className="border-t border-green-100 bg-[#FAFAF7] p-8 sm:p-10">
          <h3 className="text-xl font-bold text-gray-900">{t("whatMakesItMediterranean")}</h3>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {story.whatMakesItMediterranean.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span className="mt-0.5 text-xl">🌿</span>

                <span className="leading-7 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
