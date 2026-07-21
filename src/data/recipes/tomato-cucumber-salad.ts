import { Recipe } from "@/types/recipe";

export const tomatoCucumberSalad: Recipe = {
  id: 10,

  title: "Mediterranean Tomato & Cucumber Salad",

  slug: "mediterranean-tomato-cucumber-salad",

  description:
    "A fresh and colorful Mediterranean salad made with ripe tomatoes, crisp cucumbers, herbs, and a simple lemon olive oil dressing.",

  longDescription:
    "This classic Mediterranean Tomato & Cucumber Salad is one of the simplest and healthiest dishes found throughout Lebanon and Egypt. Fresh vegetables are tossed with parsley, mint, extra virgin olive oil, and lemon juice for a refreshing salad that's naturally vegan, hydrating, and rich in vitamins. It's the perfect side dish for grilled meats, seafood, wraps, or any mezze platter.",

  image: "/images/recipes/tomato-cucumber-salad.webp",

  imageAlt:
    "Mediterranean tomato and cucumber salad with parsley, mint, olive oil, and lemon dressing.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 3,
    unit: "ripe",
    name: "tomatoes, diced"
  },
{
    amount: 1,
    unit: "",
    name: "2 cucumbers, diced"
  },
{
    amount: 0.25,
    unit: "red",
    name: "onion, finely sliced"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "chopped fresh parsley"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh mint"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sumac (optional)"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "freshly ground black pepper"
  }
],

instructions: [
    "Wash and dice the tomatoes and cucumbers.",
    "Thinly slice the red onion.",
    "Chop the parsley and mint.",
    "Place all vegetables and herbs into a large mixing bowl.",
    "Whisk together the olive oil, lemon juice, salt, pepper, and sumac.",
    "Pour the dressing over the vegetables.",
    "Toss gently until everything is evenly coated.",
    "Allow the salad to rest for 10 minutes before serving.",
    "Serve chilled or at room temperature."
  ],

  nutrition: {
    calories: 145,
    protein: "2 g",
    carbs: "10 g",
    fat: "11 g",
    fiber: "3 g",
    sugar: "5 g",
    sodium: "220 mg"
  },

  healthBenefits: [
    "Rich in vitamin C",
    "Excellent source of hydration",
    "Supports heart health",
    "Low in calories",
    "High in antioxidants",
    "Naturally vegan and gluten-free"
  ],

  keywords: [
    "Tomato Cucumber Salad",
    "Mediterranean Salad",
    "Lebanese Salad",
    "Healthy Tomato Salad",
    "Fresh Cucumber Salad"
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegan",
    "gluten-free",
    "summer",
    "quick recipe"
  ],

  featured: true
};