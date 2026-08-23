import { Recipe } from "@/types/recipe";

export const creamyTzatzikiSauce: Recipe = {
  id: 93,

  title: "Creamy Tzatziki Sauce",

  slug: "creamy-tzatziki-sauce",

  description:
    "A cool and creamy Lebanese-style yogurt sauce made with cucumber, garlic, fresh herbs, lemon, and extra virgin olive oil. Perfect with grilled meats, shawarma, falafel, vegetables, and warm pita.",

  longDescription:
    "This Lebanese-style tzatziki is a refreshing yogurt-based sauce that brings together thick Greek yogurt, crisp cucumber, garlic, fresh dill, optional mint, lemon juice, and extra virgin olive oil. The cucumber is squeezed well to keep the sauce thick and creamy, while a short rest in the refrigerator allows the garlic, herbs, and lemon to blend into the yogurt. Serve it chilled as part of a mezze spread or alongside grilled meats, shawarma, falafel, vegetables, wraps, and warm pita bread.",

  image: "/images/recipes/creamy-tzatziki-sauce.webp",

  imageAlt:
    "A bowl of creamy Lebanese-style tzatziki topped with olive oil and fresh dill, served with cucumber slices and warm pita bread.",

  cuisine: "Lebanese",

  category: "dips-sauces",

  vegetarian: true,

  vegan: false,

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "low-fat Greek yogurt",
    },
    {
      amount: 1,
      unit: "medium",
      name: "cucumber",
      note: "grated and squeezed very dry",
    },
    {
      amount: 2,
      unit: "cloves",
      name: "garlic",
      note: "minced",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh dill",
      note: "finely chopped",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh mint",
      note: "finely chopped; optional",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
    },
  ],

  instructions: [
    "Grate the cucumber using the large holes of a box grater.",
    "Transfer the grated cucumber to a clean kitchen towel and squeeze firmly until as much excess liquid as possible has been removed.",
    "Place the Greek yogurt in a mixing bowl and add the squeezed cucumber, minced garlic, chopped dill, optional mint, olive oil, lemon juice, salt, and black pepper.",
    "Stir thoroughly until the ingredients are evenly distributed and the sauce is smooth and creamy.",
    "Cover the bowl and refrigerate for at least 30 minutes so the garlic, herbs, lemon, and yogurt can develop a balanced flavor.",
    "Taste before serving and adjust the salt, lemon juice, or herbs if needed.",
    "Drizzle with a little extra virgin olive oil and serve chilled with warm pita, fresh vegetables, grilled meats, shawarma, falafel, or wraps.",
  ],

  nutrition: {
    calories: 70,
    protein: "7 g",
    carbs: "4 g",
    fat: "3 g",
    fiber: "0 g",
    sugar: "3 g",
    sodium: "180 mg",
  },

  healthBenefits: [
    "Provides protein from Greek yogurt",
    "Provides calcium from yogurt",
    "Contains live cultures when made with yogurt that contains active cultures",
    "Provides fresh cucumber for additional water and nutrients",
    "Uses extra virgin olive oil instead of mayonnaise as the primary added fat",
    "Garlic and fresh herbs add flavor without requiring a large amount of added salt or fat",
    "A lighter alternative to many creamy mayonnaise-based sauces",
  ],

  keywords: [
    "Lebanese Tzatziki",
    "Creamy Tzatziki Sauce",
    "Lebanese Yogurt Sauce",
    "Cucumber Yogurt Dip",
    "Garlic Yogurt Sauce",
    "Mediterranean Yogurt Dip",
    "Healthy Tzatziki",
  ],

  tags: [
    "dip",
    "sauce",
    "Lebanese",
    "Mediterranean",
    "Greek yogurt",
    "vegetarian",
    "healthy",
    "low-calorie",
    "mezze",
  ],

  featured: true,
};
