import { Recipe } from "@/types/recipe";

export const mediterraneanVegetableSoup: Recipe = {
  id: 12,
  title: "Mediterranean Vegetable Soup",
  slug: "mediterranean-vegetable-soup",
  description:
    "A hearty Mediterranean soup packed with fresh vegetables, herbs, and wholesome ingredients for a comforting healthy meal.",
  image: "/images/recipes/mediterranean-vegetable-soup.webp",

  cuisine: "Mediterranean",

  category: "Soups",

  prepTime: "15",
  cookTime: "35",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Zucchini"
  },
{
    amount: 1,
    unit: "",
    name: "Carrots"
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
    name: "Chickpeas"
  },
{
    amount: 1,
    unit: "",
    name: "Vegetable broth"
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
    name: "Mediterranean herbs"
  }
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
