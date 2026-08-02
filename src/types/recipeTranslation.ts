import { Ingredient } from "./recipe";

export interface RecipeTranslation {
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
