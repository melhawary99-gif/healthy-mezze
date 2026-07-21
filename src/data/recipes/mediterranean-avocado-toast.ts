import { Recipe } from "@/types/recipe";

export const mediterraneanAvocadoToast: Recipe = {
  id: 44,

  title: "Mediterranean Avocado Toast",

  slug: "mediterranean-avocado-toast",

  description:
    "Creamy avocado spread over toasted whole grain bread and topped with feta cheese, cherry tomatoes, cucumbers, herbs, and a drizzle of extra virgin olive oil.",

  longDescription:
    "Mediterranean Avocado Toast combines heart-healthy avocado with fresh vegetables, creamy feta cheese, fragrant herbs, and premium olive oil on crispy whole grain bread. This colorful breakfast is packed with healthy fats, fiber, vitamins, and protein, making it a balanced way to start the day while embracing Mediterranean flavors.",

  image: "/images/recipes/mediterranean-avocado-toast.webp",

  imageAlt:
    "Whole grain avocado toast topped with feta cheese, tomatoes, cucumber, parsley, and olive oil.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "10 mins",

  cookTime: "5 mins",

  totalTime: "15 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "slices",
    name: "whole grain bread"
  },
{
    amount: 1,
    unit: "ripe",
    name: "avocado"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "cherry tomatoes, halved"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "cucumber, diced"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "crumbled feta cheese"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped parsley"
  },
{
    amount: 1,
    unit: "tsp",
    name: "za'atar seasoning"
  },
{
    amount: 1,
    unit: "",
    name: "Microgreens (optional)"
  }
],

instructions: [
    "Toast the whole grain bread until golden and crisp.",
    "Mash the avocado in a bowl with lemon juice, salt, pepper, and paprika.",
    "Spread the mashed avocado evenly over each slice of toast.",
    "Top with cherry tomatoes and diced cucumber.",
    "Sprinkle with crumbled feta cheese.",
    "Drizzle with extra virgin olive oil.",
    "Finish with parsley, za'atar, and optional microgreens.",
    "Serve immediately."
  ],

  nutrition: {
    calories: 345,
    protein: "11 g",
    carbs: "29 g",
    fat: "22 g",
    fiber: "10 g",
    sugar: "4 g",
    sodium: "360 mg"
  },

  healthBenefits: [
    "Rich in heart-healthy monounsaturated fats",
    "Excellent source of dietary fiber",
    "High in potassium",
    "Provides antioxidants from fresh vegetables",
    "Contains calcium from feta cheese",
    "Mediterranean diet friendly",
    "Supports sustained energy throughout the morning"
  ],

  keywords: [
    "Mediterranean Avocado Toast",
    "Healthy Breakfast",
    "Avocado Recipe",
    "Easy Breakfast",
    "Mediterranean Diet"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "healthy",
    "avocado",
    "toast",
    "vegetarian",
    "high fiber",
    "quick meal"
  ],

  featured: true
};