import { Recipe } from "@/types/recipe";

export const classicToum: Recipe = {
  id: 92,

  title: "Classic Toum (Lebanese Garlic Sauce)",

  slug: "classic-toum",

  description:
    "A creamy, fluffy Lebanese garlic sauce made with fresh garlic, lemon juice, avocado oil, and aquafaba for a lighter, healthier twist.",

  longDescription:
    "Toum is Lebanon's famous garlic sauce, traditionally served with chicken shawarma, grilled meats, kebabs, roasted vegetables, and fries. This healthier version uses aquafaba (the liquid from cooked chickpeas) to create the signature airy texture while reducing the amount of oil needed. The result is a creamy, intensely garlicky sauce that's naturally vegan and packed with authentic flavor.",

  image: "/images/recipes/classic-toum.webp",

  imageAlt:
    "A bowl of fluffy Lebanese toum garnished with garlic cloves, parsley, lemon wedges, and served with pita bread.",

  cuisine: "Lebanese",

  category: "Dips & Sauces",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 12,

  difficulty: "Medium",

  ingredients: [
{
    amount: 10,
    unit: "garlic",
    name: "cloves, peeled"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "aquafaba (liquid from canned chickpeas)"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 0.75,
    unit: "cup",
    name: "avocado oil"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "ice water (if needed)"
  }
],

instructions: [
    "Place the garlic cloves and sea salt into a food processor.",
    "Process until finely minced.",
    "Add the aquafaba and blend until smooth.",
    "With the processor running, slowly drizzle in the avocado oil in a thin, steady stream.",
    "Alternate between small amounts of oil and lemon juice until all have been incorporated.",
    "Continue blending until the sauce becomes thick, fluffy, and creamy.",
    "If the mixture becomes too thick, blend in the ice water.",
    "Transfer to a container and refrigerate for at least 1 hour before serving."
  ],

  nutrition: {
    calories: 55,
    protein: "0 g",
    carbs: "1 g",
    fat: "6 g",
    fiber: "0 g",
    sugar: "0 g",
    sodium: "85 mg"
  },

  healthBenefits: [
    "Garlic is rich in antioxidants",
    "Contains heart-healthy unsaturated fats",
    "Naturally dairy-free",
    "Vegan-friendly",
    "Lower in oil than many traditional versions",
    "Pairs well with lean proteins and vegetables",
    "Made without preservatives"
  ],

  keywords: [
    "Toum",
    "Lebanese Garlic Sauce",
    "Garlic Dip",
    "Middle Eastern Sauce",
    "Healthy Toum"
  ],

  tags: [
    "dip",
    "sauce",
    "Lebanese",
    "garlic",
    "vegan",
    "healthy",
    "mezze",
    "condiment"
  ],

  featured: true
};