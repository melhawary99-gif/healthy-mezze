export interface Recipe {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;

  category: string;

  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;

  ingredients: string[];

  instructions: string[];

  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}