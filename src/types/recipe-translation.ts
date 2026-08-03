export interface RecipeTranslation {
  title: string;

  description: string;

  longDescription?: string;

  ingredients: string[];

  instructions: string[];

  healthBenefits: string[];

  keywords: string[];

  tags: string[];
}
