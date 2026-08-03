import { RecipeTranslation } from "@/types/recipeTranslation";
import { chickenShawarmaAr } from "./ar/chicken-shawarma";

import { greekSaladAr } from "./ar/greek-salad";

export const recipeTranslations: Record<string, Partial<Record<"en" | "ar", RecipeTranslation>>> = {
  "greek-salad": {
    ar: greekSaladAr,
  },

  "chicken-shawarma": {
    ar: chickenShawarmaAr,
  },
};
