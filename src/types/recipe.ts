export interface Ingredient {
  /**
   * Amount for the default number of servings.
   * Example:
   * 2
   * 0.5
   * 250
   */
  amount: number;

  /**
   * Unit of measurement.
   * Examples:
   * pcs
   * g
   * kg
   * ml
   * l
   * tsp
   * tbsp
   * cup
   * pinch
   */
  unit: string;

  /**
   * Ingredient name.
   * Example:
   * Tomatoes
   * Olive Oil
   * Garlic
   */
  name: string;

  /**
   * Optional note.
   * Example:
   * chopped
   * finely diced
   * room temperature
   */
  note?: string;
}

export interface Nutrition {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber?: string;
  sugar?: string;
  sodium?: string;
}

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
  cuisine:
  | "Egyptian"
  | "Lebanese"
  | "Greek"
  | "Turkish"
  | "Syrian"
  | "Jordanian"
  | "Palestinian"
  | "Mediterranean";



  category:
    | "Breakfast"
    | "Salads"
    | "Soups"
    | "Main Dishes"
    | "Vegetarian"
    | "Vegan"
    | "Sandwiches & Wraps"
    | "Snack"
    | "Mezze"
    | "Drinks"
    | "Desserts"
    | "Dips & Sauces";

  // Timing
  prepTime: string;
  cookTime: string;
  totalTime?: string;

  // Serving Information
  servings: number;

  difficulty: "Easy" | "Medium" | "Hard";

  // Dietary Information
vegetarian?: boolean;
vegan?: boolean;

// Recipe Status
featured?: boolean;

// Search & SEO
keywords?: string[];
tags?: string[];

  /**
   * Structured ingredients.
   * Enables:
   * - Recipe scaling
   * - Shopping lists
   * - Nutrition calculations
   * - Unit conversions
   */
  ingredients: Ingredient[];

  // Cooking Instructions
  instructions: string[];

  // Nutrition Facts (per serving)
  nutrition: Nutrition;

  // Health Information
  healthBenefits?: string[];

}