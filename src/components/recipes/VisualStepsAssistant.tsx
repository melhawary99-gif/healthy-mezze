"use client";

import Image from "next/image";
import { useState } from "react";
import type { RecipeVisualStep } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface VisualStepsAssistantProps {
  visualSteps: RecipeVisualStep[];
  locale: "en" | "ar";
  mode: "embedded" | "button";
}

export default function VisualStepsAssistant({
  visualSteps,
  locale,
  mode,
}: VisualStepsAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Recipe");
  const isArabic = locale === "ar";

  if (!visualSteps.length) return null;

  const visualContent = (
    <section>
      <div className={isArabic ? "text-right" : ""}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {t("visualGuideLabel")}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          {t("aiVisualAssistant")}
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          {isArabic
            ? "شاهد خطوات الوصفة بصريًا خطوة بخطوة أثناء الطهي."
            : "Follow the recipe visually, step by step, while you cook."}
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {visualSteps.map((step) => (
          <article
            key={step.step}
            className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm"
          >
            {step.image && (
              <div className="w-full overflow-hidden bg-gray-100">
                <Image
                  src={step.image}
                  alt={step.imageAlt ?? step.title}
                  width={1536}
                  height={1152}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            )}

            <div className="p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {step.step}
                </span>

                <div className={isArabic ? "text-right" : ""}>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {step.description}
                  </p>

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

  if (mode === "embedded") {
    return (
      <div className="mt-6 rounded-3xl border border-emerald-100 bg-emerald-50/30 p-5 sm:p-7">
        {visualContent}
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-6 flex w-full items-center justify-center rounded-2xl border-2 border-emerald-600 bg-white px-6 py-4 text-base font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:text-lg"
      >
        ✨ {t("aiVisualAssistant")}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[110] flex min-h-screen flex-col bg-white"
          role="dialog"
          aria-modal="true"
          aria-label={t("aiVisualAssistant")}
          dir={isArabic ? "rtl" : "ltr"}
        >
          <header className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-emerald-600">
                {t("visualGuideLabel")}
              </p>

              <h2 className="truncate text-lg font-bold text-gray-900">
                {t("aiVisualAssistant")}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={
                isArabic ? "إغلاق المساعد البصري" : "Close visual assistant"
              }
              className="ml-4 rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              ✕
            </button>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-10">
            <div className="mx-auto w-full max-w-[1100px]">
              {visualContent}
            </div>
          </main>
        </div>
      )}
    </>
  );
}
