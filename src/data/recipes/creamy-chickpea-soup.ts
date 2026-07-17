import { Recipe } from "@/types/recipe";

export const creamyChickpeaSoup: Recipe = {
  id: 14,

  title: "Creamy Chickpea Soup",

  slug: "creamy-chickpea-soup",

  description:
    "A creamy Mediterranean chickpea soup with vegetables, garlic, cumin, and fresh lemon.",

  longDescription:
    "This Creamy Chickpea Soup is a nourishing Mediterranean favorite made with protein-rich chickpeas, onions, carrots, celery, garlic, and warming spices. Blending part of the soup creates a naturally creamy texture without using dairy. Finished with fresh lemon juice and parsley, it's a wholesome meal that's ideal for lunch or dinner.",

  image: "/images/recipes/creamy-chickpea-soup.jpg",

  imageAlt:
    "Creamy Mediterranean chickpea soup garnished with parsley, olive oil, and lemon wedges.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "35 mins",

  totalTime: "50 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    "2 tbsp extra virgin olive oil",
    "1 medium onion, diced",
    "2 carrots, diced",
    "2 celery stalks, diced",
    "3 cloves garlic, minced",
    "2 cans (400 g each) chickpeas, drained and rinsed",
    "4 cups vegetable broth",
    "1 cup water",
    "1 tsp ground cumin",
    "1/2 tsp ground coriander",
    "1/2 tsp paprika",
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
    "Stir in the cumin, coriander, and paprika until fragrant.",
    "Add the chickpeas, vegetable broth, and water.",
    "Bring to a boil, then reduce to a gentle simmer for 20 minutes.",
    "Blend about half of the soup using an immersion blender, leaving some chickpeas whole for texture.",
    "Season with salt and black pepper.",
    "Stir in the lemon juice and chopped parsley.",
    "Serve warm with a drizzle of olive oil."
  ],

  nutrition: {
    calories: 265,
    protein: "11 g",
    carbs: "33 g",
    fat: "10 g",
    fiber: "10 g",
    sugar: "6 g",
    sodium: "470 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "High in dietary fiber",
    "Supports digestive health",
    "Rich in folate and iron",
    "Naturally dairy-free",
    "Heart-healthy Mediterranean ingredients"
  ],

  keywords: [
    "Creamy Chickpea Soup",
    "Mediterranean Chickpea Soup",
    "Healthy Chickpea Soup",
    "Vegetarian Chickpea Soup",
    "Easy Chickpea Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "high protein",
    "high fiber",
    "meal prep",
    "healthy"
  ],

  featured: true
};