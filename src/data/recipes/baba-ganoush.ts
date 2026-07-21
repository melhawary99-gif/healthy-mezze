import { Recipe } from "@/types/recipe";

export const babaGanoush: Recipe = {
  id: 53,

  title: "Classic Baba Ganoush",

  slug: "classic-baba-ganoush",

  description:
    "A creamy roasted eggplant dip blended with tahini, garlic, lemon juice, and extra virgin olive oil. A classic Mediterranean mezze that's smoky, flavorful, and nutritious.",

  longDescription:
    "Classic Baba Ganoush is one of the signature dishes of Mediterranean and Middle Eastern cuisine. Roasted eggplants develop a naturally smoky flavor before being blended with creamy tahini, fresh lemon juice, garlic, and extra virgin olive oil. This healthy dip is rich in antioxidants, fiber, and heart-healthy fats, making it an excellent appetizer, snack, or side dish for any Mediterranean meal.",

  image: "/images/recipes/classic-baba-ganoush.jpg",

  imageAlt:
    "Creamy baba ganoush topped with olive oil, parsley, smoked paprika, and served with warm pita bread and fresh vegetables.",

  cuisine: "Lebanese",

  category: "Snack",

  prepTime: "15 mins",

  cookTime: "40 mins",

  totalTime: "55 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "large",
    name: "eggplants"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "tahini"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 2,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil, plus more for serving"
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
    amount: 0.25,
    unit: "tsp",
    name: "black pepper"
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
    name: "Pomegranate seeds for garnish (optional)"
  }
],

instructions: [
    "Preheat the oven to 425°F (220°C).",
    "Pierce the eggplants several times with a fork.",
    "Roast for 35–40 minutes until the skin is charred and the flesh is very soft.",
    "Allow the eggplants to cool for about 10 minutes.",
    "Cut them open and scoop the flesh into a colander to drain excess liquid for 10 minutes.",
    "Transfer the flesh to a food processor.",
    "Add the tahini, lemon juice, garlic, olive oil, cumin, salt, and black pepper.",
    "Blend until smooth while leaving a little texture.",
    "Taste and adjust seasoning if needed.",
    "Transfer to a serving bowl and create a shallow swirl.",
    "Drizzle with extra virgin olive oil.",
    "Garnish with parsley, smoked paprika, and optional pomegranate seeds.",
    "Serve with whole wheat pita, crackers, or fresh vegetables."
  ],

  nutrition: {
    calories: 145,
    protein: "3 g",
    carbs: "11 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "5 g",
    sodium: "220 mg"
  },

  healthBenefits: [
    "Rich in dietary fiber",
    "Excellent source of antioxidants",
    "Supports heart health",
    "Contains healthy fats from tahini and olive oil",
    "Low in saturated fat",
    "Naturally vegetarian and gluten-free",
    "Mediterranean diet approved"
  ],

  keywords: [
    "Baba Ganoush",
    "Roasted Eggplant Dip",
    "Mediterranean Dip",
    "Healthy Snack",
    "Eggplant Recipe"
  ],

  tags: [
    "snack",
    "Mediterranean",
    "eggplant",
    "baba ganoush",
    "mezze",
    "vegetarian",
    "healthy",
    "gluten-free"
  ],

  featured: true
};