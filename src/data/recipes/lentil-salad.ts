import { Recipe } from "@/types/recipe";

export const lentilSalad: Recipe = {
  datePublished: "2026-07-17",
  id: 8,

  title: "Mediterranean Lentil Salad",

  slug: "mediterranean-lentil-salad",

  description:
    "A wholesome Mediterranean lentil salad with tender lentils, fresh vegetables, herbs, feta cheese, and a bright lemon vinaigrette.",

  longDescription:
    "This Mediterranean Lentil Salad combines tender green lentils with crisp cucumber and tomatoes, red onion, fresh parsley, mint, and creamy feta cheese. A bright dressing made with extra virgin olive oil, fresh lemon juice, Dijon mustard, and cumin brings the ingredients together. It is satisfying, fiber-rich, and naturally high in plant-based protein, making it a practical lunch, side dish, or meal-prep option.",

  image: "/images/recipes/lentil-salad.webp",

  imageAlt:
    "Mediterranean lentil salad with green lentils, tomatoes, cucumber, parsley, mint, feta cheese, and lemon dressing.",

  cuisine: "Lebanese",

  category: "salads",

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "25 mins",

  totalTime: "40 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "cup",
      name: "dried green lentils",
      note: "Rinse thoroughly before cooking.",
    },
    {
      amount: 1,
      unit: "medium",
      name: "cucumber",
      note: "Diced into small bite-sized pieces.",
    },
    {
      amount: 1,
      unit: "medium",
      name: "tomato",
      note: "Diced and drained if especially juicy.",
    },
    {
      amount: 0.25,
      unit: "small",
      name: "red onion",
      note: "Finely chopped.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh mint",
      note: "Finely chopped.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "crumbled feta cheese",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "Dijon mustard",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "salt",
      note: "Adjust to taste.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
      note: "Adjust to taste.",
    },
  ],

  instructions: [
    "Rinse the lentils thoroughly and remove any debris.",
    "Place the lentils in a saucepan, cover generously with water, and bring to a gentle boil.",
    "Reduce the heat and simmer for 20–25 minutes until the lentils are tender but still hold their shape.",
    "Drain the lentils thoroughly and spread them on a wide plate or tray to cool completely.",
    "Dice the cucumber and tomato, and finely chop the red onion, parsley, and mint.",
    "Combine the cooled lentils, cucumber, tomato, red onion, parsley, and mint in a large bowl.",
    "Whisk together the olive oil, lemon juice, Dijon mustard, cumin, salt, and black pepper until well combined.",
    "Pour the dressing over the lentil and vegetable mixture.",
    "Toss gently until the dressing is evenly distributed without crushing the lentils.",
    "Fold in the crumbled feta cheese.",
    "Refrigerate for about 20 minutes before serving to allow the flavors to develop.",
  ],

  nutrition: {
    calories: 295,
    protein: "13 g",
    carbs: "29 g",
    fat: "14 g",
    fiber: "11 g",
    sugar: "5 g",
    sodium: "360 mg",
  },

  healthBenefits: [
    "Provides plant-based protein from lentils.",
    "High in dietary fiber, which supports digestive health and helps with satiety.",
    "Lentils provide iron and folate along with other essential nutrients.",
    "Fresh vegetables and herbs contribute vitamins, minerals, and antioxidants.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "The combination of protein, fiber, vegetables, and healthy fats makes the salad satisfying and nutrient-dense.",
  ],

  keywords: [
    "Mediterranean Lentil Salad",
    "Healthy Lentil Salad",
    "Lebanese Lentil Salad",
    "Lentil Vegetable Salad",
    "High Fiber Salad",
    "Plant Protein Salad",
    "Mediterranean Meal Prep",
  ],

  tags: [
    "salad",
    "healthy",
    "Mediterranean",
    "Lebanese",
    "lentils",
    "vegetarian",
    "high-fiber",
    "plant-protein",
    "meal-prep",
  ],

  featured: true,
};
