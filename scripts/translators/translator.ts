import { RecipeTranslation } from "@/types/recipe-translation";

export interface Translator {
  translateRecipe(recipe: RecipeTranslation): Promise<RecipeTranslation>;
}
