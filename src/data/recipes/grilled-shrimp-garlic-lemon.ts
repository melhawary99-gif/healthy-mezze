import { Recipe } from "@/types/recipe";

export const grilledShrimpGarlicLemon: Recipe = {
  id: 69,

  title: "Grilled Shrimp with Garlic & Lemon",

  slug: "grilled-shrimp-garlic-lemon",

  description:
    "Juicy grilled shrimp marinated in garlic, lemon juice, olive oil, parsley, and Mediterranean spices. A light, protein-rich Lebanese-inspired mezze.",

  longDescription:
    "Grilled Shrimp with Garlic & Lemon is a popular seafood appetizer served throughout Lebanon's coastal regions. Fresh shrimp are marinated with extra virgin olive oil, garlic, lemon juice, parsley, cumin, and paprika before being quickly grilled to perfection. This healthy recipe is naturally low in carbohydrates, rich in lean protein, and full of fresh Mediterranean flavors.",

  image: "/images/recipes/grilled-shrimp-garlic-lemon.jpg",

  imageAlt:
    "Grilled shrimp garnished with fresh parsley, lemon wedges, and a light drizzle of olive oil.",

  cuisine: "Lebanese",

  category: "Mezze",

  prepTime: "15 mins",

  cookTime: "8 mins",

  totalTime: "23 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 500,
    unit: "g",
    name: "large shrimp, peeled and deveined"
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
    amount: 2,
    unit: "tbsp",
    name: "fresh parsley, chopped"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 1,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "crushed red pepper flakes (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon wedges for serving"
  }
],

instructions: [
    "Pat the shrimp dry with paper towels.",
    "In a bowl, whisk together olive oil, garlic, lemon juice, parsley, cumin, paprika, salt, black pepper, and red pepper flakes.",
    "Add the shrimp and toss until evenly coated.",
    "Marinate for 15–20 minutes in the refrigerator.",
    "Preheat a grill or grill pan over medium-high heat.",
    "Grill the shrimp for 2–3 minutes per side until pink and opaque.",
    "Transfer to a serving platter.",
    "Garnish with fresh parsley and lemon wedges.",
    "Serve immediately."
  ],

  nutrition: {
    calories: 210,
    protein: "29 g",
    carbs: "3 g",
    fat: "9 g",
    fiber: "1 g",
    sugar: "1 g",
    sodium: "360 mg"
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Rich in selenium and iodine",
    "Provides heart-healthy omega-3 fatty acids",
    "Low in carbohydrates",
    "Garlic contains beneficial antioxidants",
    "Olive oil provides healthy monounsaturated fats",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Grilled Shrimp",
    "Garlic Shrimp",
    "Lebanese Seafood",
    "Healthy Shrimp Recipe",
    "Mediterranean Mezze"
  ],

  tags: [
    "mezze",
    "Lebanese",
    "shrimp",
    "seafood",
    "high-protein",
    "healthy",
    "Mediterranean",
    "gluten-free"
  ],

  featured: true
};