import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";
import { beetrootSaladEn } from "./en/beetroot-salad";
import { tabboulehEn } from "./en/tabbouleh";
import fattoushEn from "./en/fattoush";

import { greekSaladAr } from "./ar/greek-salad";
import { beetrootSaladAr } from "./ar/beetroot-salad";
import { TabboulehAr } from "./ar/tabbouleh";
import fattoushAr from "./ar/fattoush";
import { FalafelBowlAr } from "./ar/falafel-bowl";
import { LentilSoupAr } from "./ar/lentil-soup";
import { chickenShawarmaAr } from "./ar/chicken-shawarma";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
  "mediterranean-beetroot-salad": beetrootSaladEn,
  "tabbouleh": tabboulehEn,
  "fattoush": fattoushEn,
};

const arTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladAr,
  "mediterranean-beetroot-salad": beetrootSaladAr,
  "tabbouleh": TabboulehAr,
  "fattoush": fattoushAr,
  "falafel-bowl": FalafelBowlAr,
  "lentil-soup": LentilSoupAr,
  "chicken-shawarma": chickenShawarmaAr,
};

export function getRecipeTranslation(
  slug: string,
  locale: "en" | "ar"
): RecipeTranslation | undefined {
  return locale === "ar" ? arTranslations[slug] : enTranslations[slug];
}
