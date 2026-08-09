import { Recipe } from "@/types/recipe";

export const mediterraneanChickpeaSalad: Recipe = {
  id: 7,

  title: "Mediterranean Chickpea Salad",

  slug: "mediterranean-chickpea-salad",

  description:
    "A colorful Mediterranean chickpea salad with crisp vegetables, fresh herbs, feta cheese, and a bright lemon-olive oil dressing.",

  longDescription:
    "This Mediterranean Chickpea Salad combines creamy chickpeas with crisp cucumber, juicy tomatoes, red onion, fresh parsley, mint, and crumbled feta cheese. A simple dressing of extra virgin olive oil, fresh lemon juice, oregano, salt, and black pepper brings everything together. It is naturally rich in plant-based protein and fiber and makes a practical lunch, light dinner, mezze side, or meal-prep dish.",

  image: "/images/recipes/mediterranean-chickpea-salad.webp",

  imageAlt:
    "Mediterranean chickpea salad with chickpeas, cucumber, tomatoes, red onion, parsley, mint, feta cheese, and lemon dressing.",

  cuisine: "Lebanese",

  category: "salads",

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "cooked chickpeas",
      note: "Drain and rinse thoroughly.",
    },
    {
      amount: 1,
      unit: "medium",
      name: "cucumber",
      note: "Diced into bite-sized pieces.",
    },
    {
      amount: 1,
      unit: "medium",
      name: "tomato",
      note: "Diced; drain excess liquid if very juicy.",
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
      amount: 0.25,
      unit: "cup",
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
      name: "dried oregano",
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
    "Drain the chickpeas thoroughly and rinse them under cool running water.",
    "Dice the cucumber and tomato into small, bite-sized pieces.",
    "Finely chop the red onion, parsley, and mint.",
    "Combine the chickpeas, cucumber, tomato, red onion, parsley, mint, and feta in a large bowl.",
    "Whisk together the olive oil, lemon juice, oregano, salt, and black pepper until the dressing is well combined.",
    "Pour the dressing evenly over the chickpea and vegetable mixture.",
    "Toss gently until the dressing coats the ingredients without crushing the chickpeas.",
    "Taste and adjust the lemon juice, salt, or pepper if needed.",
    "Serve immediately or refrigerate for about 20 minutes to allow the flavors to develop.",
  ],

  nutrition: {
    calories: 285,
    protein: "11 g",
    carbs: "25 g",
    fat: "16 g",
    fiber: "8 g",
    sugar: "5 g",
    sodium: "390 mg",
  },

  healthBenefits: [
    "Provides plant-based protein from chickpeas.",
    "High in dietary fiber, supporting digestive health and satiety.",
    "Fresh vegetables and herbs provide a variety of vitamins, minerals, and antioxidants.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "Chickpeas provide naturally occurring iron, folate, and other important nutrients.",
    "The combination of legumes, vegetables, healthy fats, and herbs makes the salad satisfying and nutrient-dense.",
  ],

  keywords: [
    "Mediterranean Chickpea Salad",
    "Healthy Chickpea Salad",
    "Lebanese Chickpea Salad",
    "Mediterranean Salad Recipe",
    "High Protein Salad",
    "Chickpea Vegetable Salad",
    "Healthy Lunch Recipe",
  ],

  tags: [
    "salad",
    "Mediterranean",
    "Lebanese",
    "healthy",
    "chickpeas",
    "vegetarian",
    "high-protein",
    "high-fiber",
    "meal-prep",
  ],

  featured: true,
};
