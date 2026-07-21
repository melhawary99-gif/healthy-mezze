import { Recipe } from "@/types/recipe";

export const whiteBeanSoup: Recipe = {
  id: 16,

  title: "Mediterranean White Bean Soup",

  slug: "mediterranean-white-bean-soup",

  description:
    "A hearty Mediterranean white bean soup with vegetables, herbs, garlic, and extra virgin olive oil.",

  longDescription:
    "This Mediterranean White Bean Soup is a wholesome and satisfying meal featuring creamy cannellini beans, fresh vegetables, aromatic herbs, and extra virgin olive oil. Blending a portion of the beans creates a naturally creamy texture while keeping the soup dairy-free. Rich in plant-based protein and fiber, it's perfect for meal prep and pairs beautifully with whole-grain bread.",

  image: "/images/recipes/white-bean-soup.webp",

  imageAlt:
    "Mediterranean white bean soup garnished with parsley, rosemary, olive oil, and crusty bread.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "40 mins",

  totalTime: "55 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "medium",
    name: "onion, diced"
  },
{
    amount: 1,
    unit: "",
    name: "2 carrots, diced"
  },
{
    amount: 2,
    unit: "celery",
    name: "stalks, diced"
  },
{
    amount: 4,
    unit: "cloves",
    name: "garlic, minced"
  },
{
    amount: 2,
    unit: "cans",
    name: "(400 g each) cannellini beans, drained and rinsed"
  },
{
    amount: 4,
    unit: "cups",
    name: "vegetable broth"
  },
{
    amount: 1,
    unit: "cup",
    name: "water"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried rosemary"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried thyme"
  },
{
    amount: 1,
    unit: "bay",
    name: "leaf"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Extra virgin olive oil for serving"
  }
],

instructions: [
    "Heat the olive oil in a large soup pot over medium heat.",
    "Cook the onion, carrots, and celery for 6–8 minutes until softened.",
    "Add the garlic and cook for 1 minute.",
    "Stir in the rosemary, thyme, and bay leaf.",
    "Add the white beans, vegetable broth, and water.",
    "Bring to a boil, then reduce the heat and simmer for 25 minutes.",
    "Remove the bay leaf.",
    "Blend about one-third of the soup until smooth, then stir it back into the pot.",
    "Season with salt and black pepper.",
    "Stir in the lemon juice and chopped parsley.",
    "Serve warm with a drizzle of olive oil."
  ],

  nutrition: {
    calories: 255,
    protein: "13 g",
    carbs: "35 g",
    fat: "8 g",
    fiber: "11 g",
    sugar: "5 g",
    sodium: "460 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "Very high in dietary fiber",
    "Supports heart health",
    "Rich in folate and iron",
    "Naturally cholesterol-free",
    "Promotes digestive health"
  ],

  keywords: [
    "White Bean Soup",
    "Cannellini Bean Soup",
    "Mediterranean Bean Soup",
    "Healthy Bean Soup",
    "Vegetarian Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "vegan",
    "high fiber",
    "high protein",
    "meal prep",
    "healthy"
  ],

  featured: true
};