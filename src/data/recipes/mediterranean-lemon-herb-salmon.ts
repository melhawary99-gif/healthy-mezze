import { Recipe } from "@/types/recipe";

export const mediterraneanLemonHerbSalmon: Recipe = {
  id: 111,
  title: "Mediterranean Lemon Herb Salmon",
  slug: "mediterranean-lemon-herb-salmon",
  description:
    "A healthy Mediterranean salmon recipe featuring tender oven-baked salmon with fresh lemon, aromatic herbs, olive oil, and roasted vegetables.",
  longDescription:
    "Mediterranean Lemon Herb Salmon is a nutritious and flavorful seafood dish inspired by the Mediterranean diet. Fresh salmon fillets are marinated with lemon juice, garlic, parsley, dill, and extra virgin olive oil before being baked or grilled to perfection. Served with roasted vegetables, this recipe is naturally high in protein and heart-healthy omega-3 fatty acids, making it an excellent choice for a balanced lunch or dinner.",

  image: "/images/recipes/mediterranean-lemon-herb-salmon.webp",

  imageAlt:
    "Mediterranean lemon herb salmon served with roasted zucchini, cherry tomatoes, fresh parsley, and lemon slices.",

  cuisine: "Mediterranean",

  category: "main-dishes",

  prepTime: "10 mins",
  cookTime: "20 mins",
  totalTime: "30 mins",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Salmon fillet",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon juice",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon zest",
    },
    {
      amount: 1,
      unit: "",
      name: "Garlic",
    },
    {
      amount: 1,
      unit: "",
      name: "Olive oil",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh dill",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh parsley",
    },
    {
      amount: 1,
      unit: "",
      name: "Cherry tomatoes",
    },
    {
      amount: 1,
      unit: "",
      name: "Zucchini",
    },
    {
      amount: 1,
      unit: "",
      name: "Black pepper",
    },
  ],

  instructions: [
    "Pat the salmon fillets dry with paper towels.",
    "In a small bowl, whisk together olive oil, lemon juice, lemon zest, garlic, parsley, dill, salt, and black pepper.",
    "Brush the salmon generously with the marinade.",
    "Let the salmon marinate for 10–15 minutes.",
    "Preheat the oven to 200°C (400°F) or prepare a grill over medium heat.",
    "Arrange the salmon and zucchini on a baking tray with the cherry tomatoes.",
    "Drizzle the vegetables with a little olive oil and season lightly.",
    "Bake or grill the salmon for 15–20 minutes until it flakes easily with a fork.",
    "Remove from the oven and allow the salmon to rest for 2 minutes.",
    "Serve immediately with the roasted vegetables and an extra squeeze of fresh lemon.",
  ],

  nutrition: {
    calories: 520,
    protein: "42 g",
    carbs: "12 g",
    fat: "34 g",
    fiber: "3 g",
    sugar: "5 g",
    sodium: "320 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of omega-3 fatty acids",
    "High in lean protein",
    "Supports heart health",
    "Rich in vitamin D and B vitamins",
    "Contains powerful antioxidants",
    "Supports brain function and overall wellness",
  ],

  keywords: [
    "Mediterranean Salmon",
    "Lemon Herb Salmon",
    "Healthy Salmon Recipe",
    "Mediterranean Fish",
    "High Protein Dinner",
    "Healthy Mediterranean Recipe",
  ],

  tags: ["Salmon", "Seafood", "Mediterranean", "Healthy", "High Protein", "Dinner"],

  featured: false,
};
