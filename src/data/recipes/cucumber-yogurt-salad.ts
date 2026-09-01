import { Recipe } from "@/types/recipe";

export const cucumberYogurtSalad: Recipe = {
  datePublished: "2026-07-17",
  id: 9,

  title: "Cucumber Yogurt Salad",

  slug: "cucumber-yogurt-salad",

  description:
    "A refreshing Mediterranean cucumber yogurt salad with creamy Greek yogurt, fresh dill, mint, garlic, and lemon.",

  longDescription:
    "This cool cucumber yogurt salad brings together crisp cucumber, creamy Greek yogurt, fresh dill and mint, garlic, lemon juice, and extra virgin olive oil. Inspired by Lebanese and Eastern Mediterranean flavors, it makes a refreshing side dish for grilled meats, wraps, and mezze or a simple light dish on its own.",

  image: "/images/recipes/cucumber-yogurt-salad.webp",

  imageAlt:
    "Creamy cucumber yogurt salad with diced cucumber, Greek yogurt, fresh dill, mint, and olive oil.",

  cuisine: "Lebanese",

  category: "salads",

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "35 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "medium",
      name: "cucumbers",
      note: "Diced into small bite-sized pieces.",
    },
    {
      amount: 1.5,
      unit: "cups",
      name: "plain Greek yogurt",
      note: "Use thick, unsweetened yogurt.",
    },
    {
      amount: 2,
      unit: "cloves",
      name: "garlic",
      note: "Finely minced.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh dill",
      note: "Finely chopped.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh mint",
      note: "Finely chopped.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "salt",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
    },
  ],

  instructions: [
    "Wash and dice the cucumbers into small, bite-sized pieces.",
    "Pat the diced cucumber dry with paper towels to remove excess moisture.",
    "Combine the Greek yogurt, minced garlic, lemon juice, olive oil, salt, and black pepper in a large bowl.",
    "Whisk until the yogurt mixture is smooth and evenly seasoned.",
    "Fold the diced cucumber into the yogurt mixture.",
    "Add the chopped dill and mint.",
    "Mix gently until the herbs are evenly distributed without crushing the cucumber.",
    "Cover and refrigerate for at least 20 minutes to allow the flavors to develop.",
    "Taste before serving and adjust the salt, lemon, or herbs if needed.",
    "Garnish with fresh dill and a light drizzle of extra virgin olive oil before serving.",
  ],

  nutrition: {
    calories: 155,
    protein: "10 g",
    carbs: "8 g",
    fat: "9 g",
    fiber: "1 g",
    sugar: "6 g",
    sodium: "270 mg",
  },

  healthBenefits: [
    "Provides protein and calcium from Greek yogurt.",
    "Cucumber contributes hydration and a refreshing vegetable component.",
    "Fresh herbs provide flavor while adding minimal calories.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "Naturally low in carbohydrates compared with many creamy side dishes.",
    "A vegetable-forward side that fits well into a Mediterranean-style eating pattern.",
  ],

  keywords: [
    "Cucumber Yogurt Salad",
    "Lebanese Yogurt Salad",
    "Healthy Cucumber Salad",
    "Mediterranean Yogurt Recipe",
    "Greek Yogurt Salad",
    "Cucumber Mint Yogurt Salad",
  ],

  tags: [
    "salad",
    "healthy",
    "Lebanese",
    "vegetarian",
    "low-carb",
    "high-protein",
    "Mediterranean",
    "cucumber",
    "yogurt",
  ],

  featured: true,
};
