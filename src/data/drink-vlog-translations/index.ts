import type { DrinkVlogTranslation } from "@/types/drinkVlogTranslation";

import { strawberryIceMatchaLatteEn } from "./en/strawberry-ice-matcha-latte";
import { strawberryIceMatchaLatteAr } from "./ar/strawberry-ice-matcha-latte";
import { oreoIcedLatteEn } from "./en/oreo-iced-latte";
import { oreoIcedLatteAr } from "./ar/oreo-iced-latte";

const englishTranslations: Record<string, DrinkVlogTranslation> = {
  "strawberry-ice-matcha-latte": strawberryIceMatchaLatteEn,
  "oreo-iced-latte": oreoIcedLatteEn,
};

const arabicTranslations: Record<string, DrinkVlogTranslation> = {
  "strawberry-ice-matcha-latte": strawberryIceMatchaLatteAr,
  "oreo-iced-latte": oreoIcedLatteAr,
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
