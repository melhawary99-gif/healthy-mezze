import { Recipe } from "@/types/recipe";

export const stuffedMediterraneanEggplant: Recipe = {
  id: 11,
  title: "Stuffed Mediterranean Eggplant",
  slug: "stuffed-mediterranean-eggplant",
  description:
    "A flavorful Mediterranean dish featuring roasted eggplant filled with vegetables, herbs, and wholesome grains.",
  image: "/images/recipes/stuffed-mediterranean-eggplant.webp",

  cuisine: "Mediterranean",

  category: "Vegetarian",

  prepTime: "20",
  cookTime: "45",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Eggplant"
  },
{
    amount: 1,
    unit: "",
    name: "Tomatoes"
  },
{
    amount: 1,
    unit: "",
    name: "Onion"
  },
{
    amount: 1,
    unit: "",
    name: "Garlic"
  },
{
    amount: 1,
    unit: "",
    name: "Bell pepper"
  },
{
    amount: 1,
    unit: "",
    name: "Cooked quinoa"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Olive oil"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Mediterranean spices"
  }
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
