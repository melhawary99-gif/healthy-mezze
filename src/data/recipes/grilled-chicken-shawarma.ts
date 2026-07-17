import { Recipe } from "@/types/recipe";

export const grilledChickenShawarma: Recipe = {
  id: 21,

  title: "Grilled Chicken Shawarma",

  slug: "grilled-chicken-shawarma",

  description:
    "Juicy Mediterranean grilled chicken marinated in garlic, lemon, yogurt, and warm shawarma spices.",

  longDescription:
    "Grilled Chicken Shawarma is one of the Middle East's most beloved dishes. Boneless chicken is marinated in creamy yogurt, fresh lemon juice, garlic, olive oil, and an aromatic blend of spices before being grilled until tender and lightly charred. Serve it with rice, salad, hummus, or wrapped in warm pita bread with garlic sauce for an authentic Lebanese meal.",

  image: "/images/recipes/grilled-chicken-shawarma.jpg",

  imageAlt:
    "Grilled chicken shawarma served with pita bread, garlic sauce, pickles, and fresh salad.",

  cuisine: "Lebanese",

  category: "Main Dishes",

  prepTime: "20 mins",

  cookTime: "20 mins",

  totalTime: "40 mins (+ 8 hrs marinating)",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    "1.5 kg boneless skinless chicken thighs",
    "3 tbsp plain Greek yogurt",
    "3 tbsp extra virgin olive oil",
    "Juice of 2 lemons",
    "6 garlic cloves, minced",
    "2 tsp ground cumin",
    "2 tsp paprika",
    "1 tsp ground coriander",
    "1 tsp turmeric",
    "1 tsp ground cinnamon",
    "1 tsp ground allspice",
    "1/2 tsp cayenne pepper (optional)",
    "2 tsp sea salt",
    "1 tsp black pepper",
    "Fresh parsley for garnish"
  ],

  instructions: [
    "In a large bowl, combine the yogurt, olive oil, lemon juice, garlic, and all the spices.",
    "Add the chicken and coat thoroughly with the marinade.",
    "Cover and refrigerate for at least 8 hours, preferably overnight.",
    "Preheat a grill or grill pan over medium-high heat.",
    "Grill the chicken for 6–8 minutes per side until fully cooked and lightly charred.",
    "Transfer to a cutting board and let rest for 5 minutes.",
    "Slice the chicken into thin strips.",
    "Garnish with fresh parsley.",
    "Serve with pita bread, garlic sauce, hummus, rice, pickled vegetables, or fresh salad."
  ],

  nutrition: {
    calories: 360,
    protein: "39 g",
    carbs: "5 g",
    fat: "20 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "590 mg"
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Rich in B vitamins",
    "Contains immune-supporting garlic",
    "Healthy fats from olive oil",
    "Naturally low in carbohydrates",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Chicken Shawarma",
    "Grilled Chicken Shawarma",
    "Lebanese Chicken",
    "Healthy Shawarma",
    "Mediterranean Chicken"
  ],

  tags: [
    "main dish",
    "Lebanese",
    "chicken",
    "grilled",
    "high protein",
    "Mediterranean",
    "healthy",
    "shawarma"
  ],

  featured: true
};