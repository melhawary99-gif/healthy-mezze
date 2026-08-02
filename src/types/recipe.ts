import { RecipeTranslation } from "./recipeTranslation";

export interface Ingredient {
  /**
   * Amount for the default number of servings.
   * Example:
   * 2
   * 0.5
   * 250
   */
  amount: number | string;

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
  slug: string;

  // Default English fields (temporary during migration)
  title: string;
  description: string;
  longDescription?: string;

  // Multilingual content
  translations?: {
    en: RecipeTranslation;
    ar: RecipeTranslation;
  };

  // Publication Information
  datePublished?: string;
  dateModified?: string;

  // Recipe Image
  image: string;

  // Temporary during migration
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
    | "Mediterranean"
    | "Middle Eastern";

  category:
    | "breakfast"
    | "salads"
    | "soups"
    | "main-dishes"
    | "vegetarian"
    | "vegan"
    | "sandwiches-wraps"
    | "snack"
    | "mezze"
    | "drinks"
    | "desserts"
    | "dips-sauces";

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
  // Temporary during migration
  ingredients: Ingredient[];

  // Cooking Instructions
  // Temporary during migration
  instructions: string[];

  // Nutrition Facts (per serving)
  nutrition: Nutrition;

  // Health Information
  // Temporary during migration
  healthBenefits?: string[];
}
