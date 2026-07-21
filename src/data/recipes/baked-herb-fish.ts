import { Recipe } from "@/types/recipe";

export const bakedHerbFish: Recipe = {
  id: 28,

  title: "Baked Herb Fish",

  slug: "baked-herb-fish",

  description:
    "Tender white fish baked with fresh herbs, garlic, lemon, olive oil, and Mediterranean seasonings for a light and healthy meal.",

  longDescription:
    "Baked Herb Fish is a simple yet elegant Mediterranean-inspired dish featuring flaky white fish seasoned with garlic, lemon juice, fresh parsley, dill, oregano, and extra virgin olive oil. Baking preserves the fish's natural moisture while creating a flavorful, heart-healthy meal that pairs beautifully with roasted vegetables, quinoa, or a fresh salad.",

  image: "/images/recipes/baked-herb-fish.jpg",

  imageAlt:
    "Baked white fish with lemon slices, parsley, dill, garlic, and roasted Mediterranean vegetables.",

  cuisine: "Lebanese",

  category: "Main Dishes",

  prepTime: "15 mins",

  cookTime: "20 mins",

  totalTime: "35 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 4,
    unit: "white",
    name: "fish fillets (cod, haddock, sea bass, or halibut)"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 3,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 1,
    unit: "",
    name: "1 lemon, juiced"
  },
{
    amount: 1,
    unit: "tsp",
    name: "lemon zest"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh parsley, chopped"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh dill, chopped"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried oregano"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 1,
    unit: "",
    name: "1 lemon, sliced"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley for garnish"
  }
],

instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Lightly grease a baking dish with olive oil.",
    "Pat the fish fillets dry with paper towels and place them in the dish.",
    "In a small bowl, combine olive oil, garlic, lemon juice, lemon zest, parsley, dill, oregano, paprika, salt, and pepper.",
    "Brush the herb mixture evenly over each fish fillet.",
    "Arrange lemon slices on top of the fish.",
    "Bake for 18–20 minutes or until the fish flakes easily with a fork.",
    "Garnish with fresh parsley before serving.",
    "Serve with roasted vegetables, quinoa, brown rice, or a fresh Mediterranean salad."
  ],

  nutrition: {
    calories: 290,
    protein: "34 g",
    carbs: "3 g",
    fat: "15 g",
    fiber: "1 g",
    sugar: "1 g",
    sodium: "390 mg"
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Rich in heart-healthy omega-3 fatty acids",
    "Low in saturated fat",
    "High in vitamin D and selenium",
    "Supports brain and cardiovascular health",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Baked Fish",
    "Mediterranean Fish",
    "Healthy Fish Recipe",
    "Herb Baked Cod",
    "Healthy Seafood"
  ],

  tags: [
    "main dish",
    "fish",
    "seafood",
    "Mediterranean",
    "healthy",
    "high protein",
    "low carb",
    "oven baked"
  ],

  featured: true
};