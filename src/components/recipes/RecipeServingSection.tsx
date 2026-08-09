import { RecipeServing } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface RecipeServingSectionProps {
  serving: RecipeServing;
}

export default function RecipeServingSection({ serving }: RecipeServingSectionProps) {
  const t = useTranslations("Recipe");

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-orange-50/50 p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
        {t("servingLabel")}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">🍽️ {t("servingTitle")}</h2>

      <p className="mt-5 max-w-4xl leading-8 text-gray-700">{serving.description}</p>

      {serving.pairings.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900">{t("pairings")}</h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {serving.pairings.map((pairing) => (
              <span
                key={pairing}
                className="rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                {pairing}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
