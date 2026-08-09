import { RecipeFAQ } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface RecipeFAQSectionProps {
  faq: RecipeFAQ[];
}

export default function RecipeFAQSection({ faq }: RecipeFAQSectionProps) {
  const t = useTranslations("Recipe");

  if (!faq.length) {
    return null;
  }

  return (
    <section className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
        {t("faqLabel")}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">❓ {t("faqTitle")}</h2>

      <div className="mt-8 divide-y divide-gray-100">
        {faq.map((item) => (
          <details key={item.question} className="group py-5 first:pt-0 last:pb-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-gray-900">
              <span>{item.question}</span>

              <span
                className="shrink-0 text-green-700 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ↓
              </span>
            </summary>

            <p className="mt-4 max-w-4xl leading-7 text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
