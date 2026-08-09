import { RecipeTranslation } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface RecipeAdaptationsSectionProps {
  adaptations: NonNullable<RecipeTranslation["adaptations"]>;
}

export default function RecipeAdaptationsSection({ adaptations }: RecipeAdaptationsSectionProps) {
  const t = useTranslations("Recipe");

  const sections = [
    {
      key: "substitutions",
      title: t("substitutions"),
      icon: "🔄",
      items: adaptations.substitutions,
    },
    {
      key: "dietary",
      title: t("dietaryAdjustments"),
      icon: "🌱",
      items: adaptations.dietary,
    },
    {
      key: "budget",
      title: t("budgetOptions"),
      icon: "💰",
      items: adaptations.budget,
    },
    {
      key: "timeSaving",
      title: t("timeSaving"),
      icon: "⏱️",
      items: adaptations.timeSaving,
    },
    {
      key: "servings",
      title: t("servingAdjustments"),
      icon: "👨‍👩‍👧‍👦",
      items: adaptations.servings,
    },
    {
      key: "mealPrep",
      title: t("mealPrep"),
      icon: "🥡",
      items: adaptations.mealPrep,
    },
  ].filter(
    (
      section
    ): section is typeof section & {
      items: NonNullable<typeof section.items>;
    } => Boolean(section.items?.length)
  );

  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-green-100 bg-white p-8 shadow-sm sm:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {t("makeItWorkLabel")}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">{t("makeItWork")}</h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-600">{t("makeItWorkDescription")}</p>
      </div>

      <div className="mt-8 space-y-10">
        {sections.map((section) => (
          <div key={section.key}>
            <h3 className="text-xl font-bold text-gray-900">
              {section.icon} {section.title}
            </h3>

            <div className="mt-5 grid gap-4">
              {section.items.map((item) => (
                <div key={item.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>

                  <p className="mt-2 leading-7 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
