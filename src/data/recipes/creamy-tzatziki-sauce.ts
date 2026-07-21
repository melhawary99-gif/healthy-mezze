import { Recipe } from "@/types/recipe";

export const creamyTzatzikiSauce: Recipe = {
  id: 91,

  title: "Creamy Tzatziki Sauce",

  slug: "creamy-tzatziki-sauce",

  description:
    "A refreshing Greek yogurt dip with cucumber, garlic, dill, lemon, and olive oil that pairs perfectly with grilled meats, vegetables, and pita.",

  longDescription:
    "Tzatziki is one of the Mediterranean's most beloved sauces. Made with thick Greek yogurt, fresh cucumber, garlic, dill, lemon juice, and extra virgin olive oil, it offers a cool, creamy flavor that complements grilled chicken, kebabs, shawarma, falafel, fresh vegetables, and warm pita bread. This healthier version uses low-fat Greek yogurt while preserving the authentic taste and texture.",

  image: "/images/recipes/creamy-tzatziki-sauce.webp",

  imageAlt:
    "A bowl of creamy tzatziki topped with olive oil, fresh dill, cucumber slices, and served with warm pita bread.",

  cuisine: "Lebanese",

  category: "Dips & Sauces",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cups",
    name: "low-fat Greek yogurt"
  },
{
    amount: 1,
    unit: "medium",
    name: "cucumber, grated and squeezed dry"
  },
{
    amount: 2,
    unit: "cloves",
    name: "garlic, minced"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh dill, finely chopped"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh mint, finely chopped (optional)"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "black pepper"
  }
],

instructions: [
    "Grate the cucumber and squeeze out as much moisture as possible using a clean kitchen towel.",
    "Place the yogurt in a mixing bowl.",
    "Add the cucumber, garlic, dill, mint, olive oil, lemon juice, salt, and black pepper.",
    "Mix until well combined.",
    "Cover and refrigerate for at least 30 minutes to allow the flavors to develop.",
    "Drizzle with a little extra virgin olive oil before serving.",
    "Serve chilled with vegetables, grilled meats, wraps, or pita bread."
  ],

  nutrition: {
    calories: 70,
    protein: "7 g",
    carbs: "4 g",
    fat: "3 g",
    fiber: "0 g",
    sugar: "3 g",
    sodium: "180 mg"
  },

  healthBenefits: [
    "Rich in protein",
    "Excellent source of calcium",
    "Contains probiotics that support gut health",
    "Low in calories",
    "Fresh cucumber helps with hydration",
    "Garlic provides beneficial antioxidants",
    "A healthy alternative to mayonnaise-based dips"
  ],

  keywords: [
    "Tzatziki",
    "Greek Yogurt Sauce",
    "Mediterranean Dip",
    "Healthy Yogurt Dip",
    "Garlic Cucumber Sauce"
  ],

  tags: [
    "dip",
    "sauce",
    "Mediterranean",
    "Greek yogurt",
    "healthy",
    "vegetarian",
    "low-calorie",
    "mezze"
  ],

  featured: true
};