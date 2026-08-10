import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";
import { beetrootSaladEn } from "./en/beetroot-salad";
import { cucumberHummusBitesEn } from "./en/cucumber-hummus-bites";
import { cucumberYogurtSaladEn } from "./en/cucumber-yogurt-salad";
import { tabboulehEn } from "./en/tabbouleh";
import fattoushEn from "./en/fattoush";
import { babaGanoushEn } from "./en/baba-ganoush";
import { bakedBeefKoftaEn } from "./en/baked-beef-kofta";
import { bakedEggsSpinachTomatoesEn } from "./en/baked-eggs-spinach-tomatoes";
import { bakedHerbFishEn } from "./en/baked-herb-fish";
import { bakedKibbehEn } from "./en/baked-kibbeh";
import { bakedSpinachSambousekEn } from "./en/baked-spinach-sambousek";
import { roastedEggplantSaladEn } from "./en/roasted-eggplant-salad";
import { lentilSaladEn } from "./en/lentil-salad";
import { mediterraneanChickpeaSaladEn } from "./en/mediterranean-chickpea-salad";
import { tomatoCucumberSaladEn } from "./en/tomato-cucumber-salad";

import { greekSaladAr } from "./ar/greek-salad";
import { beetrootSaladAr } from "./ar/beetroot-salad";
import { cucumberHummusBitesAr } from "./ar/cucumber-hummus-bites";
import { cucumberYogurtSaladAr } from "./ar/cucumber-yogurt-salad";
import { TabboulehAr } from "./ar/tabbouleh";
import fattoushAr from "./ar/fattoush";
import { FalafelBowlAr } from "./ar/falafel-bowl";
import { LentilSoupAr } from "./ar/lentil-soup";
import { chickenShawarmaAr } from "./ar/chicken-shawarma";
import { babaGanoushAr } from "./ar/baba-ganoush";
import { bakedBeefKoftaAr } from "./ar/baked-beef-kofta";
import { bakedEggsSpinachTomatoesAr } from "./ar/baked-eggs-spinach-tomatoes";
import { bakedHerbFishAr } from "./ar/baked-herb-fish";
import { bakedKibbehAr } from "./ar/baked-kibbeh";
import { bakedSpinachSambousekAr } from "./ar/baked-spinach-sambousek";
import { roastedEggplantSaladAr } from "./ar/roasted-eggplant-salad";
import { lentilSaladAr } from "./ar/lentil-salad";
import { mediterraneanChickpeaSaladAr } from "./ar/mediterranean-chickpea-salad";
import { tomatoCucumberSaladAr } from "./ar/tomato-cucumber-salad";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
  "mediterranean-beetroot-salad": beetrootSaladEn,
  "cucumber-hummus-bites": cucumberHummusBitesEn,
  "cucumber-yogurt-salad": cucumberYogurtSaladEn,
  "tabbouleh": tabboulehEn,
  "fattoush": fattoushEn,
  "classic-baba-ganoush": babaGanoushEn,
  "baked-beef-kofta": bakedBeefKoftaEn,
  "baked-eggs-spinach-tomatoes": bakedEggsSpinachTomatoesEn,
  "baked-herb-fish": bakedHerbFishEn,
  "baked-kibbeh": bakedKibbehEn,
  "baked-spinach-sambousek": bakedSpinachSambousekEn,
  "roasted-eggplant-salad": roastedEggplantSaladEn,
  "mediterranean-lentil-salad": lentilSaladEn,
  "mediterranean-chickpea-salad": mediterraneanChickpeaSaladEn,
  "mediterranean-tomato-cucumber-salad": tomatoCucumberSaladEn,
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
  "classic-baba-ganoush": babaGanoushAr,
  "baked-beef-kofta": bakedBeefKoftaAr,
  "baked-eggs-spinach-tomatoes": bakedEggsSpinachTomatoesAr,
  "baked-herb-fish": bakedHerbFishAr,
  "baked-kibbeh": bakedKibbehAr,
  "baked-spinach-sambousek": bakedSpinachSambousekAr,
  "roasted-eggplant-salad": roastedEggplantSaladAr,
  "mediterranean-lentil-salad": lentilSaladAr,
  "mediterranean-chickpea-salad": mediterraneanChickpeaSaladAr,
  "mediterranean-tomato-cucumber-salad": tomatoCucumberSaladAr,
};

export function getRecipeTranslation(
  slug: string,
  locale: "en" | "ar"
): RecipeTranslation | undefined {
  return locale === "ar" ? arTranslations[slug] : enTranslations[slug];
}
