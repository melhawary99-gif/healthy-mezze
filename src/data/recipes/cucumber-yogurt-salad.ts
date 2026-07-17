import { Recipe } from "@/types/recipe";

export const cucumberYogurtSalad: Recipe = {
  id: 6,

  title: "Cucumber Yogurt Salad",

  slug: "cucumber-yogurt-salad",

  description:
    "A refreshing Mediterranean cucumber yogurt salad with fresh dill, mint, garlic, and creamy Greek yogurt.",

  longDescription:
    "This cooling cucumber yogurt salad is inspired by traditional Lebanese and Eastern Mediterranean flavors. Crisp cucumbers are mixed with creamy Greek yogurt, fresh herbs, garlic, and lemon juice to create a light and healthy side dish that's perfect with grilled meats, wraps, or enjoyed on its own.",

  image: "/images/recipes/cucumber-yogurt-salad.jpg",

  imageAlt:
    "Creamy cucumber yogurt salad garnished with fresh dill and mint.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 medium cucumbers, diced",
    "1½ cups plain Greek yogurt",
    "2 cloves garlic, minced",
    "2 tbsp chopped fresh dill",
    "2 tbsp chopped fresh mint",
    "1 tbsp fresh lemon juice",
    "1 tbsp extra virgin olive oil",
    "½ tsp salt",
    "¼ tsp black pepper"
  ],

  instructions: [
    "Dice the cucumbers into small bite-sized pieces.",
    "Pat the cucumbers dry with paper towels to remove excess moisture.",
    "In a large bowl, combine the Greek yogurt, garlic, lemon juice, olive oil, salt, and pepper.",
    "Mix until smooth.",
    "Fold in the cucumbers.",
    "Add the chopped dill and mint.",
    "Mix gently until well combined.",
    "Refrigerate for at least 20 minutes before serving.",
    "Garnish with extra dill and a drizzle of olive oil if desired."
  ],

  nutrition: {
    calories: 155,
    protein: "10 g",
    carbs: "8 g",
    fat: "9 g",
    fiber: "1 g",
    sugar: "6 g",
    sodium: "270 mg"
  },

  healthBenefits: [
    "Excellent source of probiotics",
    "High in protein",
    "Supports digestive health",
    "Hydrating and refreshing",
    "Rich in calcium",
    "Low in carbohydrates"
  ],

  keywords: [
    "Cucumber Yogurt Salad",
    "Lebanese yogurt salad",
    "Healthy cucumber salad",
    "Mediterranean yogurt recipe",
    "Greek yogurt salad"
  ],

  tags: [
    "salad",
    "healthy",
    "Lebanese",
    "vegetarian",
    "low carb",
    "high protein",
    "Mediterranean"
  ],

  featured: true
};