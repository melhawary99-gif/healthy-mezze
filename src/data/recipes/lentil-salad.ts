import { Recipe } from "@/types/recipe";

export const lentilSalad: Recipe = {
  id: 5,

  title: "Mediterranean Lentil Salad",

  slug: "mediterranean-lentil-salad",

  description:
    "A wholesome Mediterranean lentil salad with fresh vegetables, herbs, feta cheese, and a bright lemon vinaigrette.",

  longDescription:
    "This Mediterranean Lentil Salad combines tender green lentils with crisp vegetables, fresh parsley, mint, and creamy feta cheese. Dressed with extra virgin olive oil and fresh lemon juice, it's packed with plant-based protein, fiber, vitamins, and minerals. Perfect as a healthy lunch, side dish, or meal-prep recipe.",

  image: "/images/recipes/lentil-salad.jpg",

  imageAlt:
    "Mediterranean lentil salad with tomatoes, cucumbers, parsley, feta cheese and lemon dressing.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "25 mins",

  totalTime: "40 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "cup",
    name: "dried green lentils"
  },
{
    amount: 1,
    unit: "",
    name: "1 cucumber, diced"
  },
{
    amount: 1,
    unit: "",
    name: "2 tomatoes, diced"
  },
{
    amount: 1,
    unit: "",
    name: "¼ red onion, finely chopped"
  },
{
    amount: 1,
    unit: "",
    name: "½ cup chopped parsley"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh mint"
  },
{
    amount: 1,
    unit: "",
    name: "½ cup crumbled feta cheese"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "tsp",
    name: "Dijon mustard"
  },
{
    amount: 1,
    unit: "",
    name: "½ tsp ground cumin"
  },
{
    amount: 1,
    unit: "",
    name: "Salt to taste"
  },
{
    amount: 1,
    unit: "",
    name: "Black pepper to taste"
  }
],

instructions: [
    "Rinse the lentils thoroughly.",
    "Cook the lentils in lightly salted water until tender but not mushy, about 20–25 minutes.",
    "Drain the lentils and allow them to cool completely.",
    "Dice the cucumber and tomatoes.",
    "Finely chop the red onion, parsley, and mint.",
    "Combine the cooled lentils and vegetables in a large bowl.",
    "Whisk together olive oil, lemon juice, Dijon mustard, cumin, salt, and pepper.",
    "Pour the dressing over the salad and toss gently.",
    "Fold in the feta cheese.",
    "Refrigerate for 20 minutes before serving for the best flavor."
  ],

  nutrition: {
    calories: 295,
    protein: "13 g",
    carbs: "29 g",
    fat: "14 g",
    fiber: "11 g",
    sugar: "5 g",
    sodium: "360 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "High in dietary fiber",
    "Supports heart health",
    "Rich in iron and folate",
    "Helps maintain stable blood sugar",
    "Keeps you feeling full longer"
  ],

  keywords: [
    "Mediterranean Lentil Salad",
    "Healthy lentil salad",
    "Lebanese lentil salad",
    "Plant protein salad",
    "Healthy Mediterranean recipe"
  ],

  tags: [
    "salad",
    "healthy",
    "Mediterranean",
    "lentils",
    "vegetarian",
    "meal prep",
    "high fiber"
  ],

  featured: true
};