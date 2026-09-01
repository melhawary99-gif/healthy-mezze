"use client";

import { useTranslations } from "next-intl";

export default function JumpToRecipeButton() {
  const t = useTranslations("JumpToRecipe");

  return (
    <div className="flex justify-center py-2">
      <a
        href="#recipe-card"
        className="inline-flex items-center rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        {t("button")}
        <span className="ml-2" aria-hidden="true">
          ↓
        </span>
      </a>
    </div>
  );
}
