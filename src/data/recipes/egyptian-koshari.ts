import { Recipe } from "@/types/recipe";

export const egyptianKoshari: Recipe = {
  id: 24,

  title: "Egyptian Koshari",

  slug: "egyptian-koshari",

  description:
    "Egypt's famous comfort food made with rice, lentils, pasta, chickpeas, crispy onions, and a rich spiced tomato sauce.",

  longDescription:
    "Egyptian Koshari is the national dish of Egypt and a beloved vegetarian meal packed with flavor and texture. Layers of fluffy rice, brown lentils, pasta, tender chickpeas, crispy fried onions, and a bold garlic tomato sauce come together to create a hearty, protein-rich meal. Affordable, filling, and naturally meat-free, Koshari is enjoyed throughout Egypt as both street food and home cooking.",

  image: "/images/recipes/egyptian-koshari.jpg",

  imageAlt:
    "Traditional Egyptian Koshari topped with crispy onions, tomato sauce, chickpeas, and fresh parsley.",

  cuisine: "Egyptian",

  category: "Main Dishes",

  prepTime: "20 mins",

  cookTime: "45 mins",

  totalTime: "1 hr 5 mins",

  servings: 6,

  difficulty: "Medium",

  ingredients: [
    "1 cup long-grain rice",
    "1 cup brown lentils",
    "1 cup cooked chickpeas",
    "200 g small pasta (elbow or ditalini)",
    "2 large onions, thinly sliced",
    "3 tbsp extra virgin olive oil",
    "4 garlic cloves, minced",
    "2 cups tomato puree",
    "2 tbsp tomato paste",
    "1 tsp ground cumin",
    "1 tsp ground coriander",
    "1/2 tsp paprika",
    "1/4 tsp crushed red pepper flakes (optional)",
    "2 tbsp white vinegar",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "Fresh parsley for garnish"
  ],

  instructions: [
    "Cook the lentils until just tender, then drain.",
    "Cook the rice according to package instructions.",
    "Boil the pasta until al dente and drain.",
    "Heat the olive oil in a skillet and fry the sliced onions until deep golden and crispy. Remove and drain on paper towels.",
    "In the same pan, sauté the garlic for 30 seconds.",
    "Add the tomato puree, tomato paste, cumin, coriander, paprika, chili flakes, vinegar, salt, and pepper.",
    "Simmer the tomato sauce for about 15 minutes until slightly thickened.",
    "To assemble, layer the rice, lentils, pasta, and chickpeas in serving bowls.",
    "Top generously with the tomato sauce and crispy onions.",
    "Garnish with chopped parsley and serve immediately."
  ],

  nutrition: {
    calories: 465,
    protein: "17 g",
    carbs: "76 g",
    fat: "10 g",
    fiber: "13 g",
    sugar: "8 g",
    sodium: "520 mg"
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Rich in iron and folate",
    "Provides long-lasting energy from whole grains and legumes",
    "Naturally vegetarian",
    "Supports digestive and heart health"
  ],

  keywords: [
    "Egyptian Koshari",
    "Koshari Recipe",
    "Egyptian Rice and Lentils",
    "Vegetarian Egyptian Food",
    "Healthy Koshari"
  ],

  tags: [
    "main dish",
    "Egyptian",
    "vegetarian",
    "vegan",
    "rice",
    "lentils",
    "chickpeas",
    "healthy"
  ],

  featured: true
};