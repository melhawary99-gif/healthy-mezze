import { Recipe } from "@/types/recipe";

export const whiteBeanSalad: Recipe = {
  id: 7,

  title: "Mediterranean White Bean Salad",

  slug: "mediterranean-white-bean-salad",

  description:
    "A hearty Mediterranean salad with white beans, fresh vegetables, herbs, feta cheese, and a zesty lemon dressing.",

  longDescription:
    "This Mediterranean White Bean Salad is a nutritious combination of creamy cannellini beans, crisp vegetables, fresh herbs, and feta cheese. Tossed in a light olive oil and lemon dressing, it's rich in plant-based protein, fiber, and heart-healthy fats. It's perfect as a light lunch, side dish, or meal-prep option.",

  image: "/images/recipes/white-bean-salad.webp",

  imageAlt:
    "Mediterranean white bean salad with cannellini beans, cucumbers, tomatoes, parsley, and feta cheese.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cups",
    name: "canned cannellini beans, drained and rinsed"
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
    name: "dried oregano"
  },
{
    amount: 1,
    unit: "",
    name: "½ tsp salt"
  },
{
    amount: 1,
    unit: "",
    name: "¼ tsp black pepper"
  }
],

instructions: [
    "Drain and rinse the cannellini beans.",
    "Dice the cucumber and tomatoes.",
    "Finely chop the onion, parsley, and mint.",
    "Combine the beans, vegetables, herbs, and feta in a large bowl.",
    "Whisk together the olive oil, lemon juice, oregano, salt, and pepper.",
    "Pour the dressing over the salad.",
    "Toss gently until evenly coated.",
    "Refrigerate for 15 minutes before serving."
  ],

  nutrition: {
    calories: 270,
    protein: "12 g",
    carbs: "24 g",
    fat: "15 g",
    fiber: "9 g",
    sugar: "4 g",
    sodium: "380 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "High in dietary fiber",
    "Supports heart health",
    "Rich in iron and folate",
    "Helps maintain healthy digestion",
    "Naturally filling and satisfying"
  ],

  keywords: [
    "White Bean Salad",
    "Mediterranean Bean Salad",
    "Healthy Bean Salad",
    "Cannellini Bean Salad",
    "High Protein Salad"
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegetarian",
    "beans",
    "high protein",
    "meal prep"
  ],

  featured: true
};