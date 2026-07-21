import { Recipe } from "@/types/recipe";

export const fulMedames: Recipe = {
  id: 43,

  title: "Ful Medames (Egyptian Fava Beans)",

  slug: "ful-medames",

  description:
    "A traditional Egyptian breakfast made with slow-cooked fava beans, garlic, lemon juice, cumin, and extra virgin olive oil. Nutritious, filling, and naturally vegan.",

  longDescription:
    "Ful Medames is one of Egypt's most beloved breakfast dishes and a staple throughout the Middle East. Tender fava beans are gently warmed with garlic, cumin, lemon juice, and olive oil before being topped with fresh parsley, tomatoes, onions, and optional boiled eggs. Rich in plant-based protein and fiber, it's a satisfying meal traditionally served with warm pita bread.",

  image: "/images/recipes/ful-medames.jpg",

  imageAlt:
    "Traditional Egyptian Ful Medames topped with parsley, tomatoes, olive oil, and served with warm pita bread.",

  cuisine: "Egyptian",

  category: "Breakfast",

  prepTime: "10 mins",

  cookTime: "15 mins",

  totalTime: "25 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cans",
    name: "(400 g each) fava beans, drained and rinsed"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 3,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "paprika"
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
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh parsley"
  },
{
    amount: 1,
    unit: "small",
    name: "tomato, diced"
  },
{
    amount: 0.25,
    unit: "small",
    name: "red onion, finely diced"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped fresh cilantro (optional)"
  },
{
    amount: 4,
    unit: "boiled",
    name: "eggs (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Warm whole wheat pita bread for serving"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon wedges for serving"
  }
],

instructions: [
    "Heat the olive oil in a saucepan over medium heat.",
    "Add the minced garlic and cook for 30 seconds until fragrant.",
    "Stir in the fava beans, cumin, paprika, salt, and black pepper.",
    "Cook for 5–7 minutes, gently mashing some of the beans while leaving others whole.",
    "Add the lemon juice and stir well.",
    "Transfer the beans to a serving bowl.",
    "Top with diced tomatoes, red onion, parsley, and optional cilantro.",
    "Drizzle with additional olive oil if desired.",
    "Serve with boiled eggs, warm pita bread, and fresh lemon wedges."
  ],

  nutrition: {
    calories: 330,
    protein: "16 g",
    carbs: "38 g",
    fat: "13 g",
    fiber: "12 g",
    sugar: "4 g",
    sodium: "390 mg"
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Supports heart health",
    "Rich in iron and folate",
    "Provides long-lasting energy",
    "Mediterranean diet friendly",
    "Naturally vegan without eggs"
  ],

  keywords: [
    "Ful Medames",
    "Egyptian Breakfast",
    "Fava Beans",
    "Mediterranean Breakfast",
    "Healthy Vegan Breakfast"
  ],

  tags: [
    "breakfast",
    "Egyptian",
    "Mediterranean",
    "fava beans",
    "vegan",
    "healthy",
    "high protein",
    "high fiber"
  ],

  featured: true
};