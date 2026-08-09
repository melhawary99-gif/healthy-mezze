import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";
import { beetrootSaladEn } from "./en/beetroot-salad";
import { cucumberHummusBitesEn } from "./en/cucumber-hummus-bites";
import { tabboulehEn } from "./en/tabbouleh";
import fattoushEn from "./en/fattoush";

import { greekSaladAr } from "./ar/greek-salad";
import { beetrootSaladAr } from "./ar/beetroot-salad";
import { cucumberHummusBitesAr } from "./ar/cucumber-hummus-bites";
import { TabboulehAr } from "./ar/tabbouleh";
import fattoushAr from "./ar/fattoush";
import { FalafelBowlAr } from "./ar/falafel-bowl";
import { LentilSoupAr } from "./ar/lentil-soup";
import { chickenShawarmaAr } from "./ar/chicken-shawarma";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
  "mediterranean-beetroot-salad": beetrootSaladEn,
  "cucumber-hummus-bites": cucumberHummusBitesEn,
  "tabbouleh": tabboulehEn,
  "fattoush": fattoushEn,
};

const arTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladAr,
  "mediterranean-beetroot-salad": beetrootSaladAr,
  "cucumber-hummus-bites": cucumberHummusBitesAr,
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
