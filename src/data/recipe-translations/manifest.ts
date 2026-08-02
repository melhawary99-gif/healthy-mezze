import { RecipeTranslation } from "@/types/recipeTranslation";

import { greekSaladEn } from "./en/greek-salad";

// Arabic imports (we'll add them later)
// import { greekSaladAr } from "./ar/greek-salad";

export const recipeTranslations: Record<string, Partial<Record<"en" | "ar", RecipeTranslation>>> = {
  "greek-salad": {
    en: greekSaladEn,

    // ar: greekSaladAr,
  },
};
