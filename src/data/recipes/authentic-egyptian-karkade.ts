import { Recipe } from "@/types/recipe";

export const authenticEgyptianKarkade: Recipe = {
  id: 82,

  title: "Authentic Egyptian Karkade (Hibiscus Tea)",

  slug: "authentic-egyptian-karkade",

  description:
    "A refreshing traditional Egyptian hibiscus tea served hot or cold with honey and fresh lemon.",

  longDescription:
    "Karkade is one of Egypt's most famous traditional drinks and is enjoyed throughout the year, especially during Ramadan and the hot summer months. Made by steeping dried hibiscus flowers, it produces a vibrant ruby-red beverage with a naturally tart flavor. This healthier version uses a small amount of honey instead of refined sugar while preserving its authentic taste.",

  image: "/images/recipes/authentic-egyptian-karkade.webp",

  imageAlt:
    "A glass of authentic Egyptian Karkade served over ice with lemon slices and dried hibiscus flowers.",

  cuisine: "Egyptian",

  category: "Drinks",

  prepTime: "5 mins",

  cookTime: "10 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 0.5,
    unit: "cup",
    name: "dried hibiscus flowers"
  },
{
    amount: 4,
    unit: "cups",
    name: "water"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "honey"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Ice cubes (for serving cold)"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon slices for garnish"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh mint leaves (optional)"
  }
],

instructions: [
    "Bring the water to a boil in a saucepan.",
    "Remove from the heat and add the dried hibiscus flowers.",
    "Cover and steep for 10 minutes.",
    "Strain the tea into a pitcher.",
    "Stir in the honey while the tea is still warm.",
    "Add the lemon juice and mix well.",
    "Serve warm, or chill in the refrigerator.",
    "For iced Karkade, pour over ice and garnish with lemon slices and mint."
  ],

  nutrition: {
    calories: 38,
    protein: "0 g",
    carbs: "10 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "9 g",
    sodium: "5 mg"
  },

  healthBenefits: [
    "Rich in natural antioxidants",
    "Naturally caffeine-free",
    "Provides vitamin C from fresh lemon",
    "Hydrating and refreshing",
    "Lower in sugar than many commercial beverages",
    "Contains plant compounds traditionally associated with heart health",
    "Suitable served hot or cold"
  ],

  keywords: [
    "Karkade",
    "Egyptian Hibiscus Tea",
    "Healthy Hibiscus Drink",
    "Traditional Egyptian Beverage",
    "Ramadan Drink"
  ],

  tags: [
    "drink",
    "Egyptian",
    "hibiscus",
    "karkade",
    "healthy",
    "tea",
    "Ramadan",
    "vegetarian"
  ],

  featured: true
};