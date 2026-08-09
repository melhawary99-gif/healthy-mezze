import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";
import { beetrootSaladEn } from "./en/beetroot-salad";
import { cucumberHummusBitesEn } from "./en/cucumber-hummus-bites";
import { cucumberYogurtSaladEn } from "./en/cucumber-yogurt-salad";
import { tabboulehEn } from "./en/tabbouleh";
import fattoushEn from "./en/fattoush";
import { lentilSaladEn } from "./en/lentil-salad";
import { mediterraneanChickpeaSaladEn } from "./en/mediterranean-chickpea-salad";

import { greekSaladAr } from "./ar/greek-salad";
import { beetrootSaladAr } from "./ar/beetroot-salad";
import { cucumberHummusBitesAr } from "./ar/cucumber-hummus-bites";
import { cucumberYogurtSaladAr } from "./ar/cucumber-yogurt-salad";
import { TabboulehAr } from "./ar/tabbouleh";
import fattoushAr from "./ar/fattoush";
import { FalafelBowlAr } from "./ar/falafel-bowl";
import { LentilSoupAr } from "./ar/lentil-soup";
import { chickenShawarmaAr } from "./ar/chicken-shawarma";
import { lentilSaladAr } from "./ar/lentil-salad";
import { mediterraneanChickpeaSaladAr } from "./ar/mediterranean-chickpea-salad";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
  "mediterranean-beetroot-salad": beetrootSaladEn,
  "cucumber-hummus-bites": cucumberHummusBitesEn,
  "cucumber-yogurt-salad": cucumberYogurtSaladEn,
  "tabbouleh": tabboulehEn,
  "fattoush": fattoushEn,
  "mediterranean-lentil-salad": lentilSaladEn,
  "mediterranean-chickpea-salad": mediterraneanChickpeaSaladEn,
};

const arTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladAr,
  "mediterranean-beetroot-salad": beetrootSaladAr,
  "cucumber-hummus-bites": cucumberHummusBitesAr,
  "cucumber-yogurt-salad": cucumberYogurtSaladAr,
  "tabbouleh": TabboulehAr,
  "fattoush": fattoushAr,
  "falafel-bowl": FalafelBowlAr,
  "lentil-soup": LentilSoupAr,
  "chicken-shawarma": chickenShawarmaAr,
  "mediterranean-lentil-salad": lentilSaladAr,
  "mediterranean-chickpea-salad": mediterraneanChickpeaSaladAr,
};

export function getRecipeTranslation(
  slug: string,
  locale: "en" | "ar"
): RecipeTranslation | undefined {
  return locale === "ar" ? arTranslations[slug] : enTranslations[slug];
}
