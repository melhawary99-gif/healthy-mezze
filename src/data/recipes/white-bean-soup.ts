import { Recipe } from "@/types/recipe";

export const whiteBeanSoup: Recipe = {
  id: 16,

  title: "Mediterranean White Bean Soup",

  slug: "mediterranean-white-bean-soup",

  description:
    "A hearty Mediterranean white bean soup with vegetables, herbs, garlic, and extra virgin olive oil.",

  longDescription:
    "This Mediterranean White Bean Soup is a wholesome and satisfying meal featuring creamy cannellini beans, fresh vegetables, aromatic herbs, and extra virgin olive oil. Blending a portion of the beans creates a naturally creamy texture while keeping the soup dairy-free. Rich in plant-based protein and fiber, it's perfect for meal prep and pairs beautifully with whole-grain bread.",

  image: "/images/recipes/white-bean-soup.jpg",

  imageAlt:
    "Mediterranean white bean soup garnished with parsley, rosemary, olive oil, and crusty bread.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "40 mins",

  totalTime: "55 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    "2 tbsp extra virgin olive oil",
    "1 medium onion, diced",
    "2 carrots, diced",
    "2 celery stalks, diced",
    "4 cloves garlic, minced",
    "2 cans (400 g each) cannellini beans, drained and rinsed",
    "4 cups vegetable broth",
    "1 cup water",
    "1 tsp dried rosemary",
    "1 tsp dried thyme",
    "1 bay leaf",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "1 tbsp fresh lemon juice",
    "2 tbsp chopped fresh parsley",
    "Extra virgin olive oil for serving"
  ],

  instructions: [
    "Heat the olive oil in a large soup pot over medium heat.",
    "Cook the onion, carrots, and celery for 6–8 minutes until softened.",
    "Add the garlic and cook for 1 minute.",
    "Stir in the rosemary, thyme, and bay leaf.",
    "Add the white beans, vegetable broth, and water.",
    "Bring to a boil, then reduce the heat and simmer for 25 minutes.",
    "Remove the bay leaf.",
    "Blend about one-third of the soup until smooth, then stir it back into the pot.",
    "Season with salt and black pepper.",
    "Stir in the lemon juice and chopped parsley.",
    "Serve warm with a drizzle of olive oil."
  ],

  nutrition: {
    calories: 255,
    protein: "13 g",
    carbs: "35 g",
    fat: "8 g",
    fiber: "11 g",
    sugar: "5 g",
    sodium: "460 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "Very high in dietary fiber",
    "Supports heart health",
    "Rich in folate and iron",
    "Naturally cholesterol-free",
    "Promotes digestive health"
  ],

  keywords: [
    "White Bean Soup",
    "Cannellini Bean Soup",
    "Mediterranean Bean Soup",
    "Healthy Bean Soup",
    "Vegetarian Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "vegan",
    "high fiber",
    "high protein",
    "meal prep",
    "healthy"
  ],

  featured: true
};