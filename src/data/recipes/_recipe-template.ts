import { Recipe } from "@/types/recipe";

export const recipeTemplate: Recipe = {
  id: 0,

  title: "",
  slug: "",

  description: "",
  longDescription: "",

  image: "",
  imageAlt: "",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 min",
  cookTime: "10 min",
  totalTime: "25 min",

  servings: 4,

  difficulty: "Easy",

  vegetarian: false,
  vegan: false,

  featured: false,

  ingredients: [

],

instructions: [
    "",
  ],

  nutrition: {
    calories: 0,
    protein: "",
    carbs: "",
    fat: "",
    fiber: "",
    sugar: "",
    sodium: "",
  },

  healthBenefits: [
    "",
  ],

  keywords: [
    "",
  ],

  tags: [
    "",
  ],
};