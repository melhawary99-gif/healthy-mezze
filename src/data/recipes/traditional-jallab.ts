import { Recipe } from "@/types/recipe";

export const traditionalJallab: Recipe = {
  id: 81,

  title: "Traditional Jallab (Healthy Version)",

  slug: "traditional-jallab",

  description:
    "A refreshing Lebanese drink made with date molasses, grape molasses, rose water, chilled water, and topped with pine nuts and raisins.",

  longDescription:
    "Jallab is one of Lebanon's most famous traditional drinks and is enjoyed throughout the Middle East, especially during Ramadan and the hot summer months. Made from date molasses, grape molasses, fragrant rose water, and served over ice with pine nuts and raisins, Jallab offers a naturally rich sweetness and unique floral aroma without artificial ingredients. This healthier version contains no refined sugar while preserving its authentic flavor.",

  image: "/images/recipes/traditional-jallab.webp",

  imageAlt:
    "A tall glass of traditional Lebanese Jallab served with ice, pine nuts, raisins, and fresh mint.",

  cuisine: "Lebanese",

  category: "Drinks",

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 4,
    unit: "cups",
    name: "cold water"
  },
{
    amount: 4,
    unit: "tbsp",
    name: "date molasses"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "grape molasses"
  },
{
    amount: 2,
    unit: "tsp",
    name: "rose water"
  },
{
    amount: 2,
    unit: "cups",
    name: "ice cubes"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "pine nuts"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "golden raisins"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh mint leaves for garnish (optional)"
  }
],

instructions: [
    "Combine the cold water, date molasses, grape molasses, and rose water in a large pitcher.",
    "Stir until the molasses is completely dissolved.",
    "Taste and adjust with additional date molasses if a sweeter drink is desired.",
    "Fill serving glasses with ice cubes.",
    "Pour the Jallab over the ice.",
    "Top each glass with pine nuts and golden raisins.",
    "Garnish with fresh mint leaves if desired.",
    "Serve immediately while chilled."
  ],

  nutrition: {
    calories: 95,
    protein: "1 g",
    carbs: "23 g",
    fat: "1 g",
    fiber: "1 g",
    sugar: "19 g",
    sodium: "20 mg"
  },

  healthBenefits: [
    "Naturally sweetened with date and grape molasses",
    "Contains antioxidants from grapes and dates",
    "Pine nuts provide healthy fats and vitamin E",
    "Free from refined sugar",
    "Naturally caffeine-free",
    "Hydrating and refreshing",
    "A traditional Lebanese beverage enjoyed year-round"
  ],

  keywords: [
    "Jallab",
    "Traditional Lebanese Drink",
    "Date Molasses Drink",
    "Healthy Middle Eastern Beverage",
    "Ramadan Drink"
  ],

  tags: [
    "drink",
    "Lebanese",
    "jallab",
    "date molasses",
    "healthy",
    "Middle Eastern",
    "Ramadan",
    "vegetarian"
  ],

  featured: true
};