import { Recipe } from "@/types/recipe";

export const labnehZaatarOliveOil: Recipe = {
  id: 42,

  title: "Labneh with Za'atar & Olive Oil",

  slug: "labneh-zaatar-olive-oil",

  description:
    "Creamy homemade labneh topped with extra virgin olive oil, fragrant za'atar, and fresh herbs. A classic Mediterranean breakfast served with warm pita and vegetables.",

  longDescription:
    "Labneh is a thick, creamy strained yogurt that has been enjoyed across the Mediterranean for centuries. Topped with extra virgin olive oil, aromatic za'atar, and fresh mint, this protein-rich breakfast is refreshing, nutritious, and incredibly easy to prepare. Serve it with warm pita bread, cucumbers, tomatoes, olives, and fresh herbs for an authentic Mediterranean breakfast.",

  image: "/images/recipes/labneh-zaatar-olive-oil.webp",

  imageAlt:
    "Creamy labneh topped with za'atar, olive oil, fresh mint, olives, cucumber, tomatoes, and warm pita bread.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "cups",
    name: "labneh"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "za'atar seasoning"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped fresh mint"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "chopped parsley"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sumac (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh cucumber slices"
  },
{
    amount: 1,
    unit: "",
    name: "Cherry tomatoes"
  },
{
    amount: 1,
    unit: "",
    name: "Mixed olives"
  },
{
    amount: 1,
    unit: "",
    name: "Warm whole wheat pita bread"
  }
],

instructions: [
    "Spread the labneh evenly onto a large serving plate or shallow bowl.",
    "Using the back of a spoon, create gentle swirls across the surface.",
    "Drizzle generously with extra virgin olive oil.",
    "Sprinkle the za'atar evenly over the labneh.",
    "Add fresh mint, parsley, and optional sumac.",
    "Arrange cucumber slices, cherry tomatoes, and olives around the labneh.",
    "Serve immediately with warm pita bread."
  ],

  nutrition: {
    calories: 250,
    protein: "13 g",
    carbs: "15 g",
    fat: "16 g",
    fiber: "3 g",
    sugar: "5 g",
    sodium: "370 mg"
  },

  healthBenefits: [
    "Excellent source of protein",
    "Contains probiotics for gut health",
    "Rich in calcium",
    "Heart-healthy olive oil",
    "Fresh herbs provide antioxidants",
    "Mediterranean diet friendly",
    "Quick and nutritious breakfast"
  ],

  keywords: [
    "Labneh",
    "Mediterranean Breakfast",
    "Za'atar",
    "Healthy Breakfast",
    "Lebanese Breakfast"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "Lebanese",
    "labneh",
    "zaatar",
    "high protein",
    "healthy",
    "vegetarian"
  ],

  featured: true
};