import { Recipe } from "@/types/recipe";

export const mediterraneanBreakfastWrap: Recipe = {
  id: 47,

  title: "Mediterranean Breakfast Wrap",

  slug: "mediterranean-breakfast-wrap",

  description:
    "A wholesome whole wheat wrap filled with fluffy eggs, spinach, feta cheese, tomatoes, cucumbers, and creamy hummus for a portable Mediterranean breakfast.",

  longDescription:
    "This Mediterranean Breakfast Wrap is a delicious grab-and-go breakfast packed with protein, vegetables, and healthy fats. Fluffy scrambled eggs are layered with hummus, fresh spinach, juicy tomatoes, crisp cucumbers, and crumbled feta inside a warm whole wheat tortilla. It's a satisfying breakfast that's perfect for busy mornings while staying true to Mediterranean flavors.",

  image: "/images/recipes/mediterranean-breakfast-wrap.jpg",

  imageAlt:
    "Whole wheat breakfast wrap filled with scrambled eggs, spinach, feta cheese, tomatoes, cucumbers, and hummus.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "10 mins",

  cookTime: "10 mins",

  totalTime: "20 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "whole",
    name: "wheat tortillas"
  },
{
    amount: 4,
    unit: "large",
    name: "eggs"
  },
{
    amount: 1,
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
    name: "baby spinach"
  },
{
    amount: 0.5,
    unit: "cup",
    name: "cherry tomatoes, halved"
  },
{
    amount: 0.5,
    unit: "small",
    name: "cucumber, diced"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "crumbled feta cheese"
  },
{
    amount: 4,
    unit: "tbsp",
    name: "hummus"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped parsley"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "dried oregano"
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
  }
],

instructions: [
    "Whisk together the eggs, milk, salt, pepper, and oregano.",
    "Heat the olive oil in a skillet over medium heat.",
    "Cook the eggs gently, stirring until softly scrambled.",
    "Warm the tortillas for about 30 seconds per side.",
    "Spread 2 tablespoons of hummus over each tortilla.",
    "Layer the spinach, scrambled eggs, tomatoes, cucumber, and feta cheese.",
    "Sprinkle with fresh parsley.",
    "Fold in the sides and roll tightly into a wrap.",
    "Slice in half and serve immediately."
  ],

  nutrition: {
    calories: 435,
    protein: "24 g",
    carbs: "31 g",
    fat: "24 g",
    fiber: "8 g",
    sugar: "5 g",
    sodium: "560 mg"
  },

  healthBenefits: [
    "High in complete protein",
    "Rich in fiber from whole wheat and vegetables",
    "Provides healthy fats from olive oil and hummus",
    "Excellent source of calcium",
    "Packed with vitamins A and C",
    "Portable and meal-prep friendly",
    "Mediterranean diet approved"
  ],

  keywords: [
    "Mediterranean Breakfast Wrap",
    "Healthy Breakfast Wrap",
    "Egg Wrap",
    "High Protein Breakfast",
    "Mediterranean Breakfast"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "wrap",
    "eggs",
    "hummus",
    "high protein",
    "healthy",
    "quick meal"
  ],

  featured: true
};