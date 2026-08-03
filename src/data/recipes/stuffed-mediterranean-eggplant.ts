import { Recipe } from "@/types/recipe";

export const stuffedMediterraneanEggplant: Recipe = {
  id: 107,
  title: "Stuffed Mediterranean Eggplant",
  slug: "stuffed-mediterranean-eggplant",
  description:
    "A wholesome Mediterranean dish featuring roasted eggplant stuffed with quinoa, colorful vegetables, aromatic herbs, and heart-healthy olive oil.",
  image: "/images/recipes/stuffed-mediterranean-eggplant.webp",

  imageAlt:
    "Roasted Mediterranean stuffed eggplant filled with quinoa, vegetables, herbs, and fresh parsley.",

  cuisine: "Mediterranean",

  category: "vegetarian",
  vegan: true,
  vegetarian: true,

  prepTime: "20 mins",
  cookTime: "45 mins",
  totalTime: "65 mins",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Eggplant",
    },
    {
      amount: 1,
      unit: "",
      name: "Tomatoes",
    },
    {
      amount: 1,
      unit: "",
      name: "Onion",
    },
    {
      amount: 1,
      unit: "",
      name: "Garlic",
    },
    {
      amount: 1,
      unit: "",
      name: "Bell pepper",
    },
    {
      amount: 1,
      unit: "",
      name: "Cooked quinoa",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh parsley",
    },
    {
      amount: 1,
      unit: "",
      name: "Olive oil",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon juice",
    },
    {
      amount: 1,
      unit: "",
      name: "Mediterranean spices",
    },
  ],

  instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Slice the eggplants in half lengthwise and score the flesh.",
    "Brush the eggplants with olive oil and roast until tender.",
    "Meanwhile, sauté the onion, garlic, and bell pepper until softened.",
    "Add the tomatoes, cooked quinoa, Mediterranean spices, and lemon juice.",
    "Cook for a few minutes until the filling is well combined.",
    "Scoop a small amount of flesh from the roasted eggplants and mix it into the filling.",
    "Fill each eggplant half generously with the vegetable mixture.",
    "Return to the oven for another 10 minutes.",
    "Garnish with fresh parsley and serve warm.",
  ],

  nutrition: {
    calories: 390,
    protein: "12 g",
    carbs: "52 g",
    fat: "16 g",
    fiber: "11 g",
    sugar: "10 g",
    sodium: "420 mg",
  
  
  },

  healthBenefits: [
    "Rich in dietary fiber",
    "Supports digestive health",
    "Contains heart-healthy olive oil",
    "Excellent source of vitamins and antioxidants",
    "Provides plant-based nutrients",
    "Supports a balanced Mediterranean diet",
  ],

  keywords: [
    "Stuffed Mediterranean Eggplant",
    "Healthy Stuffed Eggplant",
    "Vegetarian Mediterranean Recipe",
    "Roasted Eggplant",
    "Quinoa Stuffed Eggplant",
    "Healthy Mediterranean Dinner",
  ],

  tags: ["Vegetarian", "Mediterranean", "Eggplant", "Healthy", "Quinoa", "Dinner"],

  featured: false,
};
