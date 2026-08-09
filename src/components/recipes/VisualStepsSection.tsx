import Image from "next/image";
import { RecipeVisualStep } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface VisualStepsSectionProps {
  visualSteps: RecipeVisualStep[];
}

export default function VisualStepsSection({ visualSteps }: VisualStepsSectionProps) {
  const t = useTranslations("Recipe");

  return (
    <section>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {t("visualGuideLabel")}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">{t("visualGuide")}</h2>
      </div>

      <div className="mt-8 space-y-8">
        {visualSteps.map((step) => (
          <article
            key={step.step}
            className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm"
          >
            {step.image && (
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                <Image
                  src={step.image}
                  alt={step.imageAlt ?? step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            )}

            <div className="p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {step.step}
                </span>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>

                  <p className="mt-3 leading-7 text-gray-700">{step.description}</p>

                  {step.tip && (
                    <p className="mt-4 rounded-2xl bg-green-50 p-4 text-sm leading-6 text-green-900">
                      💡 <strong>{t("tip")}:</strong> {step.tip}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
