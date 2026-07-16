import { Recipe } from "@/types/recipe";

export const stuffedMediterraneanEggplant: Recipe = {
  id: 11,
  title: "Stuffed Mediterranean Eggplant",
  slug: "stuffed-mediterranean-eggplant",
  description:
    "A flavorful Mediterranean dish featuring roasted eggplant filled with vegetables, herbs, and wholesome grains.",
  image: "/images/recipes/stuffed-mediterranean-eggplant.jpg",

  category: "Vegetarian",

  prepTime: "20",
  cookTime: "45",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    "Eggplant",
    "Tomatoes",
    "Onion",
    "Garlic",
    "Bell pepper",
    "Cooked quinoa",
    "Fresh parsley",
    "Olive oil",
    "Lemon juice",
    "Mediterranean spices",
  ],

  instructions: [
    "Cut eggplants and prepare them for roasting.",
    "Roast eggplant until soft and tender.",
    "Sauté onion, garlic, and vegetables with olive oil.",
    "Mix vegetables with quinoa and herbs.",
    "Fill roasted eggplant with the mixture.",
    "Garnish with parsley and serve warm.",
  ],

  nutrition: {
    calories: 390,
    protein: "12g",
    carbs: "52g",
    fat: "16g",
  },
};
