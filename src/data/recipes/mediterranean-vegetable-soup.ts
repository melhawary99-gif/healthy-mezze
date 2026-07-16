import { Recipe } from "@/types/recipe";

export const mediterraneanVegetableSoup: Recipe = {
  id: 12,
  title: "Mediterranean Vegetable Soup",
  slug: "mediterranean-vegetable-soup",
  description:
    "A hearty Mediterranean soup packed with fresh vegetables, herbs, and wholesome ingredients for a comforting healthy meal.",
  image: "/images/recipes/mediterranean-vegetable-soup.jpg",

  category: "Soups",

  prepTime: "15",
  cookTime: "35",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    "Zucchini",
    "Carrots",
    "Tomatoes",
    "Onion",
    "Garlic",
    "Chickpeas",
    "Vegetable broth",
    "Fresh parsley",
    "Olive oil",
    "Mediterranean herbs",
  ],

  instructions: [
    "Prepare and chop all vegetables.",
    "Sauté onion and garlic with olive oil.",
    "Add vegetables, chickpeas, and broth.",
    "Simmer until vegetables are tender.",
    "Add herbs and adjust seasoning.",
    "Serve warm with fresh parsley.",
  ],

  nutrition: {
    calories: 300,
    protein: "14g",
    carbs: "42g",
    fat: "10g",
  },
};
