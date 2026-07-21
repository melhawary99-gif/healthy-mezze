import { Recipe } from "@/types/recipe";

export const authenticTamarHindi: Recipe = {
  id: 84,

  title: "Authentic Tamar Hindi (Egyptian Tamarind Drink)",

  slug: "authentic-tamar-hindi",

  description:
    "A refreshing traditional Egyptian drink made from tamarind, lightly sweetened with honey, and served chilled over ice.",

  longDescription:
    "Tamar Hindi is one of Egypt's most beloved traditional beverages, particularly during Ramadan. Its distinctive sweet-and-tangy flavor comes from tamarind pulp, which is steeped to create a refreshing drink. This healthier version replaces refined sugar with a modest amount of honey while preserving the authentic taste that has been enjoyed for generations.",

  image: "/images/recipes/authentic-tamar-hindi.jpg",

  imageAlt:
    "A chilled glass of Egyptian Tamar Hindi garnished with tamarind pods, lemon slices, fresh mint, and ice cubes.",

  cuisine: "Egyptian",

  category: "Drinks",

  prepTime: "15 mins",

  cookTime: "10 mins",

  totalTime: "25 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "cup",
    name: "tamarind pulp (seedless)"
  },
{
    amount: 6,
    unit: "cups",
    name: "water"
  },
{
    amount: 3,
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
    unit: "tsp",
    name: "orange blossom water (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Ice cubes"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh mint leaves for garnish"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon slices for garnish"
  }
],

instructions: [
    "Place the tamarind pulp in a saucepan with the water.",
    "Bring to a gentle boil, then reduce the heat and simmer for 10 minutes.",
    "Remove from the heat and allow the mixture to steep for another 10 minutes.",
    "Strain through a fine-mesh sieve, pressing on the pulp to extract as much liquid as possible.",
    "Discard the solids.",
    "Stir in the honey until dissolved.",
    "Add the lemon juice and orange blossom water, if using.",
    "Refrigerate until thoroughly chilled.",
    "Serve over plenty of ice and garnish with fresh mint and lemon slices."
  ],

  nutrition: {
    calories: 60,
    protein: "0 g",
    carbs: "16 g",
    fat: "0 g",
    fiber: "1 g",
    sugar: "13 g",
    sodium: "8 mg"
  },

  healthBenefits: [
    "Naturally rich in antioxidants",
    "Provides small amounts of potassium and magnesium",
    "Naturally caffeine-free",
    "Lower in added sugar than traditional recipes",
    "Refreshing and hydrating",
    "Contains vitamin C from fresh lemon juice",
    "Traditionally enjoyed during Ramadan for breaking the fast"
  ],

  keywords: [
    "Tamar Hindi",
    "Egyptian Tamarind Drink",
    "Traditional Egyptian Beverage",
    "Ramadan Drink",
    "Healthy Tamarind Juice"
  ],

  tags: [
    "drink",
    "Egyptian",
    "tamarind",
    "Ramadan",
    "healthy",
    "traditional",
    "vegetarian",
    "summer"
  ],

  featured: true
};