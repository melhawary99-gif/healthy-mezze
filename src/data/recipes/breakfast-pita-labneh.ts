import { Recipe } from "@/types/recipe";

export const breakfastPitaLabneh: Recipe = {
  id: 49,

  title: "Breakfast Pita with Labneh & Fresh Vegetables",

  slug: "breakfast-pita-labneh",

  description:
    "Soft whole wheat pita filled with creamy labneh, crisp cucumbers, juicy tomatoes, olives, fresh herbs, and za'atar for a refreshing Mediterranean breakfast.",

  longDescription:
    "This Breakfast Pita with Labneh & Fresh Vegetables is a classic Mediterranean breakfast that's light, refreshing, and incredibly satisfying. Creamy labneh is spread inside warm whole wheat pita bread and topped with crunchy cucumbers, ripe tomatoes, Kalamata olives, fresh mint, parsley, and a sprinkle of aromatic za'atar. Finished with extra virgin olive oil, it's a balanced meal packed with protein, healthy fats, and fresh vegetables.",

  image: "/images/recipes/breakfast-pita-labneh.jpg",

  imageAlt:
    "Whole wheat pita filled with labneh, cucumbers, tomatoes, olives, parsley, mint, and za'atar.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "15 mins",

  cookTime: "3 mins",

  totalTime: "18 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "whole",
    name: "wheat pita breads"
  },
{
    amount: 1,
    unit: "cup",
    name: "labneh"
  },
{
    amount: 1,
    unit: "small",
    name: "cucumber, thinly sliced"
  },
{
    amount: 1,
    unit: "medium",
    name: "tomato, sliced"
  },
{
    amount: 8,
    unit: "Kalamata",
    name: "olives, sliced"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped parsley"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped fresh mint"
  },
{
    amount: 2,
    unit: "tsp",
    name: "za'atar seasoning"
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
    amount: 1,
    unit: "",
    name: "Mixed greens (optional)"
  }
],

instructions: [
    "Warm the pita breads for 2–3 minutes until soft.",
    "Slice each pita open to create a pocket.",
    "Spread the labneh evenly inside each pita.",
    "Layer the cucumber and tomato slices.",
    "Add the sliced Kalamata olives.",
    "Sprinkle with parsley, mint, za'atar, salt, and black pepper.",
    "Drizzle with extra virgin olive oil.",
    "Add mixed greens if desired.",
    "Serve immediately."
  ],

  nutrition: {
    calories: 375,
    protein: "18 g",
    carbs: "35 g",
    fat: "18 g",
    fiber: "6 g",
    sugar: "5 g",
    sodium: "520 mg"
  },

  healthBenefits: [
    "Excellent source of protein",
    "Rich in probiotics from labneh",
    "Contains heart-healthy olive oil",
    "Provides vitamins A and C from fresh vegetables",
    "High in calcium",
    "Good source of dietary fiber",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Breakfast Pita",
    "Labneh Recipe",
    "Mediterranean Breakfast",
    "Healthy Pita",
    "Easy Breakfast"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "labneh",
    "pita",
    "vegetarian",
    "healthy",
    "quick meal",
    "high protein"
  ],

  featured: true
};