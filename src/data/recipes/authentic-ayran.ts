import { Recipe } from "@/types/recipe";

export const authenticAyran: Recipe = {
  id: 86,

  title: "Authentic Ayran (Laban Ayran)",

  slug: "authentic-ayran",

  description:
    "A refreshing traditional yogurt drink made with plain yogurt, cold water, sea salt, and fresh mint.",

  longDescription:
    "Ayran, known as Laban Ayran in Lebanon, is a traditional yogurt-based drink enjoyed throughout the Middle East. Served ice cold, it is commonly paired with grilled meats, shawarma, kebabs, falafel, and mezze. This authentic recipe combines creamy yogurt, chilled water, sea salt, and optional fresh mint to create a refreshing beverage that's naturally high in protein and probiotics.",

  image: "/images/recipes/authentic-ayran.webp",

  imageAlt:
    "A chilled glass of traditional Lebanese Ayran garnished with fresh mint and served with ice.",

  cuisine: "Lebanese",

  category: "Drinks",

  prepTime: "5 mins",

  cookTime: "0 mins",

  totalTime: "5 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cups",
    name: "plain Greek yogurt"
  },
{
    amount: 2,
    unit: "cups",
    name: "ice-cold water"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "cup",
    name: "ice cubes"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "finely chopped fresh mint (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh mint sprigs for garnish"
  }
],

instructions: [
    "Add the yogurt, cold water, and sea salt to a blender.",
    "Blend for 30–60 seconds until completely smooth and frothy.",
    "Stir in the chopped mint if using.",
    "Taste and adjust the salt if desired.",
    "Pour into chilled serving glasses over ice.",
    "Garnish with fresh mint sprigs.",
    "Serve immediately."
  ],

  nutrition: {
    calories: 95,
    protein: "9 g",
    carbs: "7 g",
    fat: "3 g",
    fiber: "0 g",
    sugar: "6 g",
    sodium: "340 mg"
  },

  healthBenefits: [
    "Excellent source of protein",
    "Rich in calcium for healthy bones",
    "Contains beneficial probiotics from yogurt",
    "Naturally hydrating",
    "Supports digestion",
    "Low in added sugar",
    "A refreshing accompaniment to savory meals"
  ],

  keywords: [
    "Ayran",
    "Laban Ayran",
    "Lebanese Yogurt Drink",
    "Middle Eastern Drink",
    "Healthy Yogurt Beverage"
  ],

  tags: [
    "drink",
    "Lebanese",
    "ayran",
    "yogurt",
    "healthy",
    "traditional",
    "high-protein",
    "vegetarian"
  ],

  featured: true
};