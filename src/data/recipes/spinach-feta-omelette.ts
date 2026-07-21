import { Recipe } from "@/types/recipe";

export const spinachFetaOmelette: Recipe = {
  id: 45,

  title: "Spinach & Feta Omelette",

  slug: "spinach-feta-omelette",

  description:
    "A fluffy omelette filled with fresh spinach, creamy feta cheese, herbs, and cooked in extra virgin olive oil for a healthy Mediterranean breakfast.",

  longDescription:
    "This Mediterranean Spinach & Feta Omelette is a protein-rich breakfast that combines fluffy eggs with sautéed spinach, tangy feta cheese, onions, and fresh herbs. Ready in under 20 minutes, it's packed with vitamins, minerals, and healthy fats, making it an excellent choice for a nutritious start to the day.",

  image: "/images/recipes/spinach-feta-omelette.webp",

  imageAlt:
    "Golden spinach and feta omelette garnished with parsley and served with tomatoes and whole grain toast.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "10 mins",

  cookTime: "10 mins",

  totalTime: "20 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
{
    amount: 4,
    unit: "large",
    name: "eggs"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "milk"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "cup",
    name: "fresh spinach, chopped"
  },
{
    amount: 0.25,
    unit: "small",
    name: "onion, finely diced"
  },
{
    amount: 1,
    unit: "garlic",
    name: "clove, minced"
  },
{
    amount: 0.3333333333333333,
    unit: "cup",
    name: "crumbled feta cheese"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped parsley"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped dill (optional)"
  },
{
    amount: 0.5,
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
    name: "dried oregano"
  },
{
    amount: 1,
    unit: "",
    name: "Cherry tomatoes for serving"
  },
{
    amount: 1,
    unit: "",
    name: "Whole grain toast for serving"
  }
],

instructions: [
    "Whisk together the eggs, milk, salt, pepper, and oregano until smooth.",
    "Heat the olive oil in a non-stick skillet over medium heat.",
    "Cook the onion for 2–3 minutes until softened.",
    "Add the garlic and spinach, cooking until the spinach has wilted.",
    "Pour the egg mixture evenly into the skillet.",
    "Cook undisturbed for about 2 minutes until the edges begin to set.",
    "Sprinkle the feta cheese, parsley, and optional dill over one half of the omelette.",
    "Carefully fold the omelette in half.",
    "Cook for another 2–3 minutes until the eggs are fully set.",
    "Serve immediately with cherry tomatoes and whole grain toast."
  ],

  nutrition: {
    calories: 320,
    protein: "22 g",
    carbs: "8 g",
    fat: "22 g",
    fiber: "2 g",
    sugar: "3 g",
    sodium: "480 mg"
  },

  healthBenefits: [
    "Excellent source of complete protein",
    "Rich in calcium from feta cheese",
    "High in iron and vitamin K from spinach",
    "Contains healthy fats from olive oil",
    "Supports muscle maintenance",
    "Mediterranean diet friendly",
    "Low in carbohydrates"
  ],

  keywords: [
    "Spinach Omelette",
    "Feta Omelette",
    "Healthy Breakfast",
    "Mediterranean Eggs",
    "Protein Breakfast"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "eggs",
    "spinach",
    "feta",
    "high protein",
    "healthy",
    "vegetarian"
  ],

  featured: true
};