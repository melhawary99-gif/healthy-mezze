import { Recipe } from "@/types/recipe";

export const shishTawook: Recipe = {
  id: 22,

  title: "Shish Tawook (Lebanese Chicken Kabobs)",

  slug: "shish-tawook",

  description:
    "Tender Lebanese chicken skewers marinated in yogurt, garlic, lemon, and Mediterranean spices, then grilled to perfection.",

  longDescription:
    "Shish Tawook is one of Lebanon's most popular grilled dishes. Chicken breast is marinated in Greek yogurt, garlic, lemon juice, olive oil, and aromatic spices before being threaded onto skewers and grilled until juicy with lightly charred edges. Traditionally served with garlic sauce (toum), grilled vegetables, rice, or warm pita bread, this high-protein meal is ideal for family dinners and summer barbecues.",

  image: "/images/recipes/shish-tawook.webp",

  imageAlt:
    "Lebanese Shish Tawook chicken skewers served with garlic sauce, grilled vegetables, and pita bread.",

  cuisine: "Lebanese",

  category: "Main Dishes",

  prepTime: "20 mins",

  cookTime: "15 mins",

  totalTime: "35 mins (+ 6 hrs marinating)",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1.5,
    unit: "kg",
    name: "boneless skinless chicken breast, cut into cubes"
  },
{
    amount: 0.5,
    unit: "cup",
    name: "plain Greek yogurt"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "",
    name: "Juice of 2 lemons"
  },
{
    amount: 5,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 2,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 1,
    unit: "tsp",
    name: "oregano"
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
    amount: 0.5,
    unit: "tsp",
    name: "turmeric"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "tomato paste"
  },
{
    amount: 1,
    unit: "",
    name: "Wooden or metal skewers"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley for garnish"
  }
],

instructions: [
    "In a large bowl, whisk together the yogurt, olive oil, lemon juice, garlic, tomato paste, and spices.",
    "Add the chicken cubes and coat well with the marinade.",
    "Cover and refrigerate for at least 6 hours or overnight.",
    "If using wooden skewers, soak them in water for 30 minutes.",
    "Thread the marinated chicken evenly onto the skewers.",
    "Preheat a grill or grill pan to medium-high heat.",
    "Grill the skewers for 12–15 minutes, turning every few minutes until the chicken is fully cooked and lightly charred.",
    "Rest the skewers for 5 minutes before serving.",
    "Garnish with fresh parsley.",
    "Serve with garlic sauce (toum), rice, grilled vegetables, or pita bread."
  ],

  nutrition: {
    calories: 330,
    protein: "42 g",
    carbs: "4 g",
    fat: "16 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "570 mg"
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Rich in vitamin B6 and niacin",
    "Contains probiotics from yogurt marinade",
    "Heart-healthy olive oil",
    "Naturally low in carbohydrates",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Shish Tawook",
    "Lebanese Chicken Kabobs",
    "Chicken Skewers",
    "Mediterranean Chicken",
    "Healthy Grilled Chicken"
  ],

  tags: [
    "main dish",
    "Lebanese",
    "chicken",
    "kabobs",
    "grilled",
    "high protein",
    "Mediterranean",
    "healthy"
  ],

  featured: true
};