import { Recipe } from "@/types/recipe";

export const oliveTapenade: Recipe = {
  id: 60,

  title: "Olive Tapenade with Whole Grain Crackers",

  slug: "olive-tapenade",

  description:
    "A savory Mediterranean olive spread made with Kalamata olives, green olives, capers, garlic, herbs, and extra virgin olive oil. Perfect with whole grain crackers or fresh vegetables.",

  longDescription:
    "Olive Tapenade is a classic Mediterranean spread bursting with bold, briny flavors. Made with a blend of Kalamata and green olives, capers, garlic, fresh parsley, lemon juice, and premium extra virgin olive oil, this quick and healthy appetizer is rich in heart-healthy fats and antioxidants. Serve it with whole grain crackers, toasted bread, cucumber slices, or as part of a traditional Mediterranean mezze platter.",

  image: "/images/recipes/olive-tapenade.jpg",

  imageAlt:
    "Mediterranean olive tapenade served in a bowl with whole grain crackers, cucumber slices, cherry tomatoes, and parsley.",

  cuisine: "Lebanese",

  category: "Snack",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 8,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "cup",
    name: "Kalamata olives, pitted"
  },
{
    amount: 0.5,
    unit: "cup",
    name: "green olives, pitted"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "capers, drained"
  },
{
    amount: 2,
    unit: "garlic",
    name: "cloves"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh parsley, chopped"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "dried oregano"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 1,
    unit: "",
    name: "Whole grain crackers for serving"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh cucumber slices (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Cherry tomatoes (optional)"
  }
],

instructions: [
    "Add the Kalamata olives, green olives, capers, garlic, parsley, lemon juice, oregano, and black pepper to a food processor.",
    "Pulse several times until the mixture is finely chopped but still slightly chunky.",
    "With the processor running, slowly drizzle in the olive oil until combined.",
    "Taste and adjust the seasoning if needed.",
    "Transfer the tapenade to a serving bowl.",
    "Drizzle with a little extra virgin olive oil.",
    "Garnish with chopped parsley.",
    "Serve with whole grain crackers, cucumber slices, or cherry tomatoes."
  ],

  nutrition: {
    calories: 105,
    protein: "1 g",
    carbs: "3 g",
    fat: "10 g",
    fiber: "1 g",
    sugar: "0 g",
    sodium: "380 mg"
  },

  healthBenefits: [
    "Rich in heart-healthy monounsaturated fats",
    "Contains powerful antioxidants from olives",
    "Supports cardiovascular health",
    "Low in carbohydrates",
    "Provides vitamin E",
    "Quick and nutritious appetizer",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Olive Tapenade",
    "Mediterranean Spread",
    "Healthy Appetizer",
    "Olive Dip",
    "Mezze Recipe"
  ],

  tags: [
    "snack",
    "Mediterranean",
    "olive tapenade",
    "mezze",
    "healthy",
    "vegetarian",
    "low-carb",
    "quick recipe"
  ],

  featured: true
};