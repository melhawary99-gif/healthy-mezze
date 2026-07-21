import { Recipe } from "@/types/recipe";

export const classicHummus: Recipe = {
  id: 52,

  title: "Classic Creamy Hummus",

  slug: "classic-creamy-hummus",

  description:
    "A silky smooth Mediterranean hummus made with chickpeas, tahini, fresh lemon juice, garlic, and extra virgin olive oil. Perfect as a healthy snack, appetizer, or spread.",

  longDescription:
    "Classic Creamy Hummus is one of the most beloved dishes in Mediterranean cuisine. Made from tender chickpeas blended with rich tahini, fresh lemon juice, garlic, and premium extra virgin olive oil, this protein-rich dip is creamy, flavorful, and incredibly versatile. Serve it with fresh vegetables, whole wheat pita, crackers, or as part of a mezze platter.",

  image: "/images/recipes/classic-hummus.jpg",

  imageAlt:
    "Creamy hummus topped with olive oil, paprika, parsley, whole chickpeas, and served with warm pita bread and fresh vegetables.",

  cuisine: "Lebanese",

  category: "Snack",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cans",
    name: "(15 oz each) chickpeas, drained and rinsed"
  },
{
    amount: 0.3333333333333333,
    unit: "cup",
    name: "tahini"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 2,
    unit: "garlic",
    name: "cloves"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil, plus extra for serving"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 1,
    unit: "",
    name: "3–5 tbsp cold water"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped fresh parsley"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "smoked paprika"
  },
{
    amount: 1,
    unit: "",
    name: "Whole chickpeas for garnish (optional)"
  }
],

instructions: [
    "Drain and rinse the chickpeas thoroughly.",
    "Add the chickpeas, tahini, lemon juice, garlic, olive oil, cumin, and salt to a food processor.",
    "Blend until smooth.",
    "Gradually add cold water, one tablespoon at a time, until the hummus becomes light and creamy.",
    "Taste and adjust the seasoning with additional lemon juice or salt if needed.",
    "Transfer to a serving bowl.",
    "Create a shallow swirl on top using the back of a spoon.",
    "Drizzle with extra virgin olive oil.",
    "Sprinkle with smoked paprika and chopped parsley.",
    "Garnish with a few whole chickpeas if desired.",
    "Serve with whole wheat pita bread or fresh vegetables."
  ],

  nutrition: {
    calories: 175,
    protein: "7 g",
    carbs: "16 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "2 g",
    sodium: "250 mg"
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "Rich in dietary fiber",
    "Contains heart-healthy monounsaturated fats",
    "High in folate and iron",
    "Supports digestive health",
    "Naturally vegetarian",
    "Mediterranean diet approved"
  ],

  keywords: [
    "Classic Hummus",
    "Creamy Hummus",
    "Mediterranean Dip",
    "Healthy Snack",
    "Homemade Hummus"
  ],

  tags: [
    "snack",
    "Mediterranean",
    "hummus",
    "chickpeas",
    "vegetarian",
    "vegan",
    "healthy",
    "mezze"
  ],

  featured: true
};