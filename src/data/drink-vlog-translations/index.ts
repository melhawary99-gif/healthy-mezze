import type { DrinkVlogTranslation } from "@/types/drinkVlogTranslation";

import { strawberryIceMatchaLatteEn } from "./en/strawberry-ice-matcha-latte";
import { strawberryIceMatchaLatteAr } from "./ar/strawberry-ice-matcha-latte";
import { oreoIcedLatteEn } from "./en/oreo-iced-latte";
import { oreoIcedLatteAr } from "./ar/oreo-iced-latte";
import { blueCuracaoLemonIcedTeaEn } from "./en/blue-curacao-lemon-iced-tea";
import { blueCuracaoLemonIcedTeaAr } from "./ar/blue-curacao-lemon-iced-tea";
import { caramelIceLatteEn } from "./en/caramel-ice-latte";
import { caramelIceLatteAr } from "./ar/caramel-ice-latte";
import { passionFruitChocoSmoothieEn } from "./en/passion-fruit-choco-smoothie";
import { passionFruitChocoSmoothieAr } from "./ar/passion-fruit-choco-smoothie";

const englishTranslations: Record<string, DrinkVlogTranslation> = {
  "strawberry-ice-matcha-latte": strawberryIceMatchaLatteEn,
  "oreo-iced-latte": oreoIcedLatteEn,
  "blue-curacao-lemon-iced-tea": blueCuracaoLemonIcedTeaEn,
  "caramel-ice-latte": caramelIceLatteEn,
  "passion-fruit-choco-smoothie": passionFruitChocoSmoothieEn,
};

const arabicTranslations: Record<string, DrinkVlogTranslation> = {
  "strawberry-ice-matcha-latte": strawberryIceMatchaLatteAr,
  "oreo-iced-latte": oreoIcedLatteAr,
  "blue-curacao-lemon-iced-tea": blueCuracaoLemonIcedTeaAr,
  "caramel-ice-latte": caramelIceLatteAr,
  "passion-fruit-choco-smoothie": passionFruitChocoSmoothieAr,
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
