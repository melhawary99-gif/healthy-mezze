import { CookingGuide } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface CookingGuideSectionProps {
  cookingGuide: CookingGuide;
}

export default function CookingGuideSection({ cookingGuide }: CookingGuideSectionProps) {
  const t = useTranslations("Recipe");

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {t("beforeYouCookLabel")}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">{t("beforeYouCook")}</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <GuideCard title={t("beforeYouStart")} items={cookingGuide.beforeYouCook} icon="👨‍🍳" />

        <GuideCard title={t("tips")} items={cookingGuide.tips} icon="💡" />
      </div>

      {cookingGuide.howDoIKnowItsDone.length > 0 && (
        <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-7 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900">👀 {t("howDoIKnowItsDone")}</h3>

          <ul className="mt-5 space-y-3">
            {cookingGuide.howDoIKnowItsDone.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-7 text-gray-700">
                <span>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

interface GuideCardProps {
  title: string;
  items: string[];
  icon: string;
}

function GuideCard({ title, items, icon }: GuideCardProps) {
  return (
    <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900">
        {icon} {title}
      </h3>

      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-7 text-gray-700">
            <span className="font-bold text-green-700">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
