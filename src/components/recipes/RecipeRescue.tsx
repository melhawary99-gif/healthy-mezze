"use client";

import { useState } from "react";
import { RecipeRescueOption } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface RecipeRescueProps {
  options: RecipeRescueOption[];
}

export default function RecipeRescue({ options }: RecipeRescueProps) {
  const t = useTranslations("Recipe");

  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (!options.length) {
    return null;
  }

  const selectedOption = options.find((option) => option.id === selectedId);

  return (
    <section className="rounded-[2rem] border border-amber-200 bg-amber-50/60 p-8 shadow-sm sm:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          {t("recipeRescueLabel")}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">🧩 {t("recipeRescueTitle")}</h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-700">{t("recipeRescueDescription")}</p>
      </div>

      <div className="mt-8 grid gap-3">
        {options.map((option) => {
          const isSelected = option.id === selectedId;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedId(isSelected ? null : option.id)}
              aria-expanded={isSelected}
              className={`w-full rounded-2xl border p-5 text-left transition ${
                isSelected
                  ? "border-amber-400 bg-white shadow-sm"
                  : "border-amber-100 bg-white/70 hover:border-amber-300 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-gray-900">{option.title}</span>

                <span
                  className={`text-xl transition-transform ${isSelected ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </div>

              {isSelected && option.description && (
                <p className="mt-3 leading-7 text-gray-600">{option.description}</p>
              )}
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div className="mt-6 rounded-3xl border border-amber-100 bg-white p-6 sm:p-7">
          <h3 className="text-xl font-bold text-gray-900">{selectedOption.title}</h3>

          {selectedOption.description && (
            <p className="mt-3 leading-7 text-gray-700">{selectedOption.description}</p>
          )}

          <div className="mt-6 space-y-4">
            {selectedOption.solutions.map((solution) => (
              <div key={solution.id} className="rounded-2xl bg-amber-50 p-5">
                <h4 className="font-semibold text-gray-900">{solution.title}</h4>

                <p className="mt-2 leading-7 text-gray-700">{solution.description}</p>

                {solution.steps && solution.steps.length > 0 && (
                  <ol className="mt-4 space-y-2">
                    {solution.steps.map((step, index) => (
                      <li key={step} className="flex gap-3 text-sm leading-6 text-gray-700">
                        <span className="font-bold text-amber-700">{index + 1}.</span>

                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
