import type { DrinkVlogTranslation } from "@/types/drinkVlogTranslation";

import { strawberryIceMatchaLatteEn } from "./en/strawberry-ice-matcha-latte";
import { strawberryIceMatchaLatteAr } from "./ar/strawberry-ice-matcha-latte";

const englishTranslations: Record<string, DrinkVlogTranslation> = {
  "strawberry-ice-matcha-latte": strawberryIceMatchaLatteEn,
};

const arabicTranslations: Record<string, DrinkVlogTranslation> = {
  "strawberry-ice-matcha-latte": strawberryIceMatchaLatteAr,
};

export function getDrinkVlogTranslation(
  slug: string,
  locale: "en" | "ar",
): DrinkVlogTranslation | undefined {
  if (locale === "ar") {
    return arabicTranslations[slug];
  }

  return englishTranslations[slug];
}
