import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";
import { authenticAmbaSauceEn } from "./en/authentic-amba-sauce";
import { beetrootSaladEn } from "./en/beetroot-salad";
import { cheeseFatayerEn } from "./en/cheese-fatayer";
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
import { breakfastPitaLabnehEn } from "./en/breakfast-pita-labneh";
import { creamyCauliflowerSoupEn } from "./en/creamy-cauliflower-soup";
import { cauliflowerSteaksTahiniEn } from "./en/cauliflower-steaks-tahini";
import { baklavaYogurtParfaitEn } from "./en/baklava-yogurt-parfait";
import { roastedEggplantSaladEn } from "./en/roasted-eggplant-salad";
import { lentilSaladEn } from "./en/lentil-salad";
import { mediterraneanChickpeaSaladEn } from "./en/mediterranean-chickpea-salad";
import { tomatoCucumberSaladEn } from "./en/tomato-cucumber-salad";
import { mediterraneanWhiteBeanSaladEn } from "./en/mediterranean-white-bean-salad";
import { authenticArabicCoffeeEn } from "./en/authentic-arabic-coffee";
import { MediterraneanChickenOrzoSoupEn } from "./en/mediterranean-chicken-orzo-soup";

import { greekSaladAr } from "./ar/greek-salad";
import { authenticAmbaSauceAr } from "./ar/authentic-amba-sauce";
import { beetrootSaladAr } from "./ar/beetroot-salad";
import { CheeseFatayerAr as cheeseFatayerAr } from "./ar/cheese-fatayer";
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
import { breakfastPitaLabnehAr } from "./ar/breakfast-pita-labneh";
import { creamyCauliflowerSoupAr } from "./ar/creamy-cauliflower-soup";
import { CauliflowerSteaksTahiniAr } from "./ar/cauliflower-steaks-tahini";
import { baklavaYogurtParfaitAr } from "./ar/baklava-yogurt-parfait";
import { roastedEggplantSaladAr } from "./ar/roasted-eggplant-salad";
import { lentilSaladAr } from "./ar/lentil-salad";
import { mediterraneanChickpeaSaladAr } from "./ar/mediterranean-chickpea-salad";
import { tomatoCucumberSaladAr } from "./ar/tomato-cucumber-salad";
import { MediterraneanWhiteBeanSaladAr } from "./ar/mediterranean-white-bean-salad";
import { authenticArabicCoffeeAr } from "./ar/authentic-arabic-coffee";
import { MediterraneanChickenOrzoSoupAr } from "./ar/mediterranean-chicken-orzo-soup";

const enTranslations: Record<string, RecipeTranslation> = {
  "greek-salad": greekSaladEn,
  "mediterranean-beetroot-salad": beetrootSaladEn,
  "cheese-fatayer": cheeseFatayerEn,
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
  "breakfast-pita-labneh": breakfastPitaLabnehEn,
  "creamy-cauliflower-soup": creamyCauliflowerSoupEn,
  "cauliflower-steaks-tahini": cauliflowerSteaksTahiniEn,
  "baklava-yogurt-parfait": baklavaYogurtParfaitEn,
  "roasted-eggplant-salad": roastedEggplantSaladEn,
  "mediterranean-lentil-salad": lentilSaladEn,
  "mediterranean-chickpea-salad": mediterraneanChickpeaSaladEn,
  "mediterranean-tomato-cucumber-salad": tomatoCucumberSaladEn,
  "authentic-amba-sauce": authenticAmbaSauceEn,
  "mediterranean-white-bean-salad": mediterraneanWhiteBeanSaladEn,
  "authentic-arabic-coffee": authenticArabicCoffeeEn,
  "mediterranean-chicken-orzo-soup": MediterraneanChickenOrzoSoupEn,
};

const arTranslations: Record<string, RecipeTranslation> = {
  "authentic-amba-sauce": authenticAmbaSauceAr,
  "greek-salad": greekSaladAr,
  "mediterranean-beetroot-salad": beetrootSaladAr,
  "cheese-fatayer": cheeseFatayerAr,
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
  "breakfast-pita-labneh": breakfastPitaLabnehAr,
  "creamy-cauliflower-soup": creamyCauliflowerSoupAr,
  "cauliflower-steaks-tahini": CauliflowerSteaksTahiniAr,
  "baklava-yogurt-parfait": baklavaYogurtParfaitAr,
  "roasted-eggplant-salad": roastedEggplantSaladAr,
  "mediterranean-lentil-salad": lentilSaladAr,
  "mediterranean-chickpea-salad": mediterraneanChickpeaSaladAr,
  "mediterranean-tomato-cucumber-salad": tomatoCucumberSaladAr,
  "mediterranean-white-bean-salad": MediterraneanWhiteBeanSaladAr,
  "authentic-arabic-coffee": authenticArabicCoffeeAr,
  "mediterranean-chicken-orzo-soup": MediterraneanChickenOrzoSoupAr,
};

export function getRecipeTranslation(
  slug: string,
  locale: "en" | "ar"
): RecipeTranslation | undefined {
  return locale === "ar" ? arTranslations[slug] : enTranslations[slug];
}
