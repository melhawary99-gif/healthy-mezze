import { Recipe } from "@/types/recipe";

export const mediterraneanChickpeaSalad: Recipe = {
  id: 4,

  title: "Mediterranean Chickpea Salad",

  slug: "mediterranean-chickpea-salad",

  description:
    "A colorful Mediterranean salad with chickpeas, fresh vegetables, herbs, feta cheese, and a light lemon dressing.",

  longDescription:
    "This Mediterranean Chickpea Salad is packed with plant-based protein, fiber, and fresh vegetables. Chickpeas are combined with crisp cucumbers, juicy tomatoes, parsley, red onion, and creamy feta cheese before being tossed in a simple lemon and olive oil dressing. Perfect as a healthy lunch, light dinner, or meal-prep recipe.",

  image: "/images/recipes/mediterranean-chickpea-salad.webp",

  imageAlt:
    "Mediterranean chickpea salad with cucumbers, tomatoes, parsley, feta cheese, and lemon dressing.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cups",
    name: "cooked chickpeas, drained"
  },
{
    amount: 1,
    unit: "",
    name: "1 cucumber, diced"
  },
{
    amount: 1,
    unit: "",
    name: "2 tomatoes, diced"
  },
{
    amount: 1,
    unit: "",
    name: "¼ red onion, finely chopped"
  },
{
    amount: 1,
    unit: "",
    name: "½ cup chopped parsley"
  },
{
    amount: 1,
    unit: "",
    name: "¼ cup chopped fresh mint"
  },
{
    amount: 1,
    unit: "",
    name: "½ cup crumbled feta cheese"
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
    name: "dried oregano"
  },
{
    amount: 1,
    unit: "",
    name: "½ tsp salt"
  },
{
    amount: 1,
    unit: "",
    name: "¼ tsp black pepper"
  }
],

instructions: [
    "Drain and rinse the chickpeas.",
    "Dice the cucumber and tomatoes into bite-sized pieces.",
    "Finely chop the red onion, parsley, and mint.",
    "Combine the chickpeas, vegetables, herbs, and feta in a large bowl.",
    "Whisk together the olive oil, lemon juice, oregano, salt, and pepper.",
    "Pour the dressing over the salad.",
    "Toss gently until evenly coated.",
    "Serve immediately or chill for 20 minutes before serving."
  ],

  nutrition: {
    calories: 285,
    protein: "11 g",
    carbs: "25 g",
    fat: "16 g",
    fiber: "8 g",
    sugar: "5 g",
    sodium: "390 mg"
  },

  healthBenefits: [
    "High in plant-based protein",
    "Excellent source of dietary fiber",
    "Supports heart health",
    "Rich in vitamins and minerals",
    "Helps maintain healthy digestion",
    "Naturally satisfying and filling"
  ],

  keywords: [
    "Mediterranean Chickpea Salad",
    "Healthy chickpea salad",
    "Mediterranean salad recipe",
    "High protein salad",
    "Healthy lunch recipe"
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegetarian",
    "high-protein",
    "meal prep"
  ],

  featured: true
};