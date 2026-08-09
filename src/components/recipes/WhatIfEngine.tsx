"use client";

import { useState } from "react";
import { WhatIfScenario } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface WhatIfEngineProps {
  scenarios: WhatIfScenario[];
}

export default function WhatIfEngine({ scenarios }: WhatIfEngineProps) {
  const t = useTranslations("Recipe");

  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (!scenarios.length) {
    return null;
  }

  const selectedScenario = scenarios.find((scenario) => scenario.id === selectedId);

  return (
    <section className="rounded-[2rem] border border-green-200 bg-green-50/60 p-8 shadow-sm sm:p-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
          {t("whatIfLabel")}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">🔄 {t("whatIfTitle")}</h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-700">{t("whatIfDescription")}</p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {scenarios.map((scenario) => {
          const isSelected = scenario.id === selectedId;

          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setSelectedId(isSelected ? null : scenario.id)}
              aria-expanded={isSelected}
              className={`rounded-2xl border p-5 text-left transition ${
                isSelected
                  ? "border-green-500 bg-white shadow-sm"
                  : "border-green-100 bg-white hover:border-green-300"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-semibold leading-6 text-gray-900">{scenario.title}</span>

                <span
                  className={`shrink-0 text-xl transition-transform ${
                    isSelected ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </div>

              {isSelected && (
                <p className="mt-3 text-sm leading-6 text-gray-600">{scenario.description}</p>
              )}
            </button>
          );
        })}
      </div>

      {selectedScenario && (
        <div className="mt-6 rounded-3xl border border-green-100 bg-white p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-gray-900">{selectedScenario.title}</h3>

          <p className="mt-3 leading-7 text-gray-700">{selectedScenario.description}</p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              {t("pathway")}
            </h4>

            <ol className="mt-4 space-y-4">
              {selectedScenario.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-800">
                    {index + 1}
                  </span>

                  <span className="pt-1 leading-7 text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {selectedScenario.result && (
            <div className="mt-6 rounded-2xl bg-green-50 p-5">
              <p className="font-semibold text-green-900">{t("expectedResult")}</p>

              <p className="mt-2 leading-7 text-green-900/80">{selectedScenario.result}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
