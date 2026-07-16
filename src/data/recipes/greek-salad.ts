import { Recipe } from "@/types/recipe";

export const greekSalad: Recipe = {
  id: 1,
  title: "Greek Salad",
  slug: "greek-salad",
  description:
    "A refreshing Mediterranean salad with vegetables, herbs, feta cheese, and olives.",
  image: "/images/recipes/greek-salad.jpg",

  category: "Salads",

  prepTime: "15",
  cookTime: "0",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    "Tomatoes",
    "Cucumber",
    "Red onion",
    "Feta cheese",
    "Kalamata olives",
    "Extra virgin olive oil",
  ],

  instructions: [
    "Wash and chop all vegetables.",
    "Combine vegetables in a large bowl.",
    "Add feta cheese and olives.",
    "Drizzle with olive oil and serve.",
  ],

  nutrition: {
    calories: 320,
    protein: "8g",
    carbs: "18g",
    fat: "24g",
  },
};