export interface Recipe {
  id: number;

  // Basic Information
  title: string;
  slug: string;
  description: string;
  longDescription?: string;

  // Recipe Image
  image: string;
  imageAlt?: string;

  // Classification
  cuisine?: "Egyptian" | "Lebanese";

  category:
    | "Salads"
    | "Soups"
    | "Mezze"
    | "Main Dishes"
    | "Sandwiches & Wraps"
    | "Vegetarian"
    | "Vegan"
    | "Desserts"
    | "Drinks";

  // Timing
  prepTime: string;
  cookTime: string;
  totalTime?: string;

  // Serving Information
  servings: number;

  difficulty: "Easy" | "Medium" | "Hard";

  // Ingredients
  ingredients: string[];

  // Cooking Instructions
  instructions: string[];

  // Nutrition Facts (per serving)
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber?: string;
    sugar?: string;
    sodium?: string;
  };

  // Health Information
  healthBenefits?: string[];

  // SEO
  keywords?: string[];
  tags?: string[];

  // Homepage
  featured?: boolean;
}