import { Recipe } from "@/types/recipe";

export const authenticLebaneseMintTea: Recipe = {
  id: 88,

  title: "Authentic Lebanese Mint Tea (Shai bil Nana)",

  slug: "authentic-lebanese-mint-tea",

  description:
    "A traditional Lebanese black tea infused with fresh mint leaves and lightly sweetened with honey.",

  longDescription:
    "Shai bil Nana, or Lebanese Mint Tea, is one of the most popular hot beverages throughout Lebanon and the Levant. Fresh mint leaves are steeped alongside black tea to create a fragrant, refreshing drink that is commonly enjoyed after meals or served to guests. This healthier version uses a small amount of honey as an optional sweetener while preserving the authentic flavor and aroma.",

  image: "/images/recipes/authentic-lebanese-mint-tea.webp",

  imageAlt:
    "A glass of authentic Lebanese mint tea garnished with fresh mint leaves and served alongside a traditional teapot.",

  cuisine: "Lebanese",

  category: "Drinks",

  prepTime: "5 mins",

  cookTime: "5 mins",

  totalTime: "10 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 4,
    unit: "cups",
    name: "water"
  },
{
    amount: 4,
    unit: "black",
    name: "tea bags (or 4 tsp loose black tea)"
  },
{
    amount: 1,
    unit: "large",
    name: "handful fresh mint leaves"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "honey (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh mint sprigs for garnish"
  }
],

instructions: [
    "Bring the water to a boil in a saucepan or kettle.",
    "Remove from the heat and add the black tea.",
    "Steep for 3–4 minutes.",
    "Add the fresh mint leaves and steep for another 2–3 minutes.",
    "Remove the tea bags or strain the loose tea and mint leaves.",
    "Stir in the honey if desired.",
    "Pour into heatproof glasses or teacups.",
    "Garnish with fresh mint sprigs and serve hot."
  ],

  nutrition: {
    calories: 18,
    protein: "0 g",
    carbs: "5 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "5 g",
    sodium: "5 mg"
  },

  healthBenefits: [
    "Naturally rich in antioxidants from black tea",
    "Fresh mint may help support healthy digestion",
    "Naturally low in calories",
    "Contains no dairy",
    "Hydrating and comforting",
    "Uses only a small amount of natural sweetener",
    "Traditionally served after meals"
  ],

  keywords: [
    "Lebanese Mint Tea",
    "Shai bil Nana",
    "Middle Eastern Tea",
    "Mint Tea",
    "Traditional Lebanese Drink"
  ],

  tags: [
    "drink",
    "tea",
    "Lebanese",
    "mint",
    "traditional",
    "healthy",
    "hot drink",
    "vegan"
  ],

  featured: true
};