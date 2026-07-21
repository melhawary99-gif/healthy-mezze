import { Recipe } from "@/types/recipe";

export const lebaneseMujadara: Recipe = {
  id: 25,

  title: "Lebanese Mujadara",

  slug: "lebanese-mujadara",

  description:
    "A wholesome Lebanese dish made with lentils, rice, caramelized onions, and warm spices for a comforting plant-based meal.",

  longDescription:
    "Lebanese Mujadara is a timeless Middle Eastern comfort food prepared with brown lentils, long-grain rice, and deeply caramelized onions. Simple yet incredibly flavorful, this naturally vegan recipe is packed with fiber, plant-based protein, and minerals. Traditionally served warm or at room temperature with fresh vegetables, yogurt, or a simple cucumber salad, Mujadara is an excellent choice for healthy everyday meals.",

  image: "/images/recipes/lebanese-mujadara.webp",

  imageAlt:
    "Lebanese Mujadara served with caramelized onions, parsley, cucumber salad, and lemon wedges.",

  cuisine: "Lebanese",

  category: "Main Dishes",

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "cup",
    name: "brown lentils"
  },
{
    amount: 1,
    unit: "cup",
    name: "long-grain rice"
  },
{
    amount: 3,
    unit: "large",
    name: "onions, thinly sliced"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "ground coriander"
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
    amount: 3,
    unit: "cups",
    name: "vegetable broth"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley for garnish"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon wedges for serving"
  }
],

instructions: [
    "Cook the lentils in water for about 20 minutes until nearly tender. Drain.",
    "Heat the olive oil in a large skillet over medium heat.",
    "Cook the sliced onions slowly for 20–25 minutes until deeply caramelized.",
    "Remove half of the onions and reserve for garnish.",
    "Add the cumin, coriander, salt, and pepper to the remaining onions.",
    "Stir in the rice and cooked lentils.",
    "Pour in the vegetable broth and bring to a boil.",
    "Reduce the heat to low, cover, and simmer for about 20 minutes until the rice is tender and the liquid is absorbed.",
    "Allow the Mujadara to rest for 10 minutes before fluffing with a fork.",
    "Top with the reserved caramelized onions, garnish with parsley, and serve with lemon wedges."
  ],

  nutrition: {
    calories: 380,
    protein: "15 g",
    carbs: "61 g",
    fat: "10 g",
    fiber: "11 g",
    sugar: "5 g",
    sodium: "430 mg"
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "Rich in dietary fiber",
    "Supports heart health",
    "Provides slow-release carbohydrates",
    "Naturally vegan and cholesterol-free",
    "High in iron and folate"
  ],

  keywords: [
    "Lebanese Mujadara",
    "Mujadara Recipe",
    "Rice and Lentils",
    "Healthy Lebanese Food",
    "Vegan Mediterranean Recipe"
  ],

  tags: [
    "main dish",
    "Lebanese",
    "vegan",
    "vegetarian",
    "lentils",
    "rice",
    "healthy",
    "Mediterranean"
  ],

  featured: true
};