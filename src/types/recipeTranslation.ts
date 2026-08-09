export interface Ingredient {
  /**
   * Amount for the default number of servings.
   * Examples: 2, 0.5, 250
   */
  amount: number | string;

  /**
   * Unit of measurement.
   * Examples: pcs, g, kg, ml, l, tsp, tbsp, cup, pinch
   */
  unit: string;

  /**
   * Ingredient name.
   */
  name: string;

  /**
   * Optional preparation note.
   */
  note?: string;
}

export interface RecipeStory {
  introduction: string;
  culturalContext: string;
  mediterraneanConnection: string;
  whatMakesItMediterranean: string[];
}

export interface CookingGuide {
  beforeYouCook: string[];
  tips: string[];
  visualCues: string[];
  howDoIKnowItsDone: string[];
}

export interface RecipeAdaptation {
  id: string;
  title: string;
  description: string;
}

export interface RecipeRescueSolution {
  id: string;
  title: string;
  description: string;
  steps?: string[];
}

export interface RecipeRescueOption {
  id: string;
  title: string;
  description?: string;
  solutions: RecipeRescueSolution[];
}

export interface WhatIfScenario {
  id: string;
  title: string;
  description: string;
  steps: string[];
  result?: string;
}

export interface RecipeVisualStep {
  step: number;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tip?: string;
}

export interface RecipeStorage {
  instructions: string[];
  duration?: string;
  container?: string;
}

export interface RecipeServing {
  description: string;
  pairings: string[];
}

export interface RecipeFAQ {
  question: string;
  answer: string;
}

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

  story?: RecipeStory;

  cookingGuide?: CookingGuide;

  adaptations?: {
    substitutions?: RecipeAdaptation[];
    dietary?: RecipeAdaptation[];
    budget?: RecipeAdaptation[];
    timeSaving?: RecipeAdaptation[];
    servings?: RecipeAdaptation[];
    mealPrep?: RecipeAdaptation[];
  };

  visualSteps?: RecipeVisualStep[];

  recipeRescue?: RecipeRescueOption[];

  whatIf?: WhatIfScenario[];

  storage?: RecipeStorage;

  serving?: RecipeServing;

  faq?: RecipeFAQ[];
}
