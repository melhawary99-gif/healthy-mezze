import { Recipe } from "@/types/recipe";

export const herbRoastedCauliflower: Recipe = {
  id: 37,

  title: "Herb-Roasted Cauliflower",

  slug: "herb-roasted-cauliflower",

  description:
    "Tender roasted cauliflower florets seasoned with Mediterranean herbs, garlic, paprika, olive oil, and finished with fresh lemon and parsley.",

  longDescription:
    "Herb-Roasted Cauliflower is a simple yet flavorful Mediterranean dish that transforms fresh cauliflower into a crispy, caramelized delight. Roasted with extra virgin olive oil, garlic, paprika, oregano, thyme, and finished with fresh lemon juice and parsley, it's an excellent healthy side dish or light vegetarian meal packed with fiber, vitamins, and antioxidants.",

  image: "/images/recipes/herb-roasted-cauliflower.webp",

  imageAlt:
    "Golden roasted cauliflower florets garnished with parsley and lemon wedges.",

  cuisine: "Lebanese",

  category: "Vegetarian",

  prepTime: "15 mins",

  cookTime: "30 mins",

  totalTime: "45 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "large",
    name: "cauliflower, cut into florets"
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
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried oregano"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried thyme"
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
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh parsley"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon wedges for serving"
  }
],

instructions: [
    "Preheat the oven to 220°C (425°F).",
    "Line a large baking tray with parchment paper.",
    "Place the cauliflower florets into a large bowl.",
    "Add olive oil, garlic, paprika, oregano, thyme, cumin, salt, and pepper.",
    "Toss until all florets are evenly coated.",
    "Spread the cauliflower in a single layer on the baking tray.",
    "Roast for 25–30 minutes, turning halfway through, until golden brown and tender.",
    "Transfer to a serving dish.",
    "Drizzle with fresh lemon juice.",
    "Sprinkle with chopped parsley.",
    "Serve immediately with lemon wedges."
  ],

  nutrition: {
    calories: 190,
    protein: "5 g",
    carbs: "15 g",
    fat: "13 g",
    fiber: "6 g",
    sugar: "4 g",
    sodium: "300 mg"
  },

  healthBenefits: [
    "Excellent source of vitamin C",
    "High in dietary fiber",
    "Rich in antioxidants",
    "Supports digestive health",
    "Low in calories",
    "Heart-healthy olive oil",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Roasted Cauliflower",
    "Mediterranean Cauliflower",
    "Healthy Side Dish",
    "Vegetarian Recipe",
    "Roasted Vegetables"
  ],

  tags: [
    "vegetarian",
    "vegan",
    "Mediterranean",
    "Lebanese",
    "cauliflower",
    "healthy",
    "roasted",
    "side dish"
  ],

  featured: true
};