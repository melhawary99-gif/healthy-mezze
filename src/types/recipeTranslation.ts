import { Ingredient } from "./recipe";

export interface RecipeTranslation {
  sourceHash?: string;

  title: string;

  description: string;

  longDescription?: string;

  imageAlt?: string;

  ingredients: Ingredient[];

  instructions: string[];

  healthBenefits?: string[];

  keywords?: string[];

  tags?: string[];
}
