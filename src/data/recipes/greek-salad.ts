import { Recipe } from "@/types/recipe";

export const greekSalad: Recipe = {
  id: 1,

  title: "Greek Salad",

  slug: "greek-salad",

  description:
    "A fresh Mediterranean salad made with crisp vegetables, creamy feta cheese, Kalamata olives, and extra virgin olive oil.",

  longDescription:
    "Greek Salad is one of the most popular Mediterranean dishes, loved for its fresh vegetables, healthy fats, and vibrant flavors. Made with tomatoes, cucumbers, onions, olives, and feta cheese, it is naturally rich in vitamins, minerals, antioxidants, and heart-healthy olive oil. It makes an excellent light lunch, side dish, or healthy dinner.",

  image: "/images/recipes/salads/greek-salad.webp",

  imageAlt:
    "Traditional Greek salad served with tomatoes, cucumber, feta cheese, olives, red onion and oregano.",

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
    unit: "large",
    name: "tomatoes, chopped"
  },
{
    amount: 1,
    unit: "",
    name: "1 cucumber, sliced"
  },
{
    amount: 1,
    unit: "small",
    name: "red onion, thinly sliced"
  },
{
    amount: 150,
    unit: "g",
    name: "feta cheese, cubed"
  },
{
    amount: 1,
    unit: "",
    name: "½ cup Kalamata olives"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
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
    name: "Salt to taste"
  },
{
    amount: 1,
    unit: "",
    name: "Freshly ground black pepper"
  }
],

instructions: [
    "Wash all vegetables thoroughly.",
    "Cut the tomatoes into bite-sized pieces.",
    "Slice the cucumber and red onion.",
    "Place all vegetables into a large salad bowl.",
    "Add the Kalamata olives.",
    "Top with cubed feta cheese.",
    "Whisk together olive oil, lemon juice, oregano, salt and pepper.",
    "Pour the dressing over the salad.",
    "Gently toss everything together.",
    "Serve immediately for the freshest flavor."
  ],

  nutrition: {
    calories: 240,
    protein: "7 g",
    carbs: "10 g",
    fat: "19 g",
    fiber: "3 g",
    sugar: "5 g",
    sodium: "480 mg"
  },

  healthBenefits: [
    "Rich in antioxidants",
    "Supports heart health",
    "High in Vitamin C",
    "Excellent source of healthy fats",
    "Contains calcium for strong bones",
    "Supports digestive health"
  ],

  keywords: [
    "Greek Salad",
    "Mediterranean Salad",
    "Healthy Salad",
    "Easy Greek Salad Recipe",
    "Fresh Salad",
    "Healthy Mediterranean Food"
  ],

  tags: [
    "Salad",
    "Mediterranean",
    "Vegetarian",
    "Healthy",
    "Quick",
    "Fresh"
  ],

  featured: true
};