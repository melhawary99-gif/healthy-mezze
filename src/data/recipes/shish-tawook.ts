import { Recipe } from "@/types/recipe";

export const shishTawook: Recipe = {
  id: 22,

  title: "Shish Tawook (Lebanese Chicken Kabobs)",

  slug: "shish-tawook",

  description:
    "Tender Lebanese chicken skewers marinated in yogurt, garlic, lemon, and Mediterranean spices, then grilled to perfection.",

  longDescription:
    "Shish Tawook is one of Lebanon's most popular grilled dishes. Chicken breast is marinated in Greek yogurt, garlic, lemon juice, olive oil, and aromatic spices before being threaded onto skewers and grilled until juicy with lightly charred edges. Traditionally served with garlic sauce (toum), grilled vegetables, rice, or warm pita bread, this high-protein meal is ideal for family dinners and summer barbecues.",

  image: "/images/recipes/shish-tawook.jpg",

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
    "1.5 kg boneless skinless chicken breast, cut into cubes",
    "1/2 cup plain Greek yogurt",
    "3 tbsp extra virgin olive oil",
    "Juice of 2 lemons",
    "5 garlic cloves, minced",
    "2 tsp paprika",
    "1 tsp ground cumin",
    "1 tsp oregano",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "1/2 tsp turmeric",
    "1 tbsp tomato paste",
    "Wooden or metal skewers",
    "Fresh parsley for garnish"
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