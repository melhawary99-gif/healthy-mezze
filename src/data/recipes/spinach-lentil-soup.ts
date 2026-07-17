import { Recipe } from "@/types/recipe";

export const spinachLentilSoup: Recipe = {
  id: 18,

  title: "Spinach Lentil Soup",

  slug: "spinach-lentil-soup",

  description:
    "A hearty Mediterranean soup made with red lentils, fresh spinach, vegetables, garlic, cumin, and lemon.",

  longDescription:
    "This Spinach Lentil Soup is a wholesome Mediterranean dish combining protein-rich red lentils with fresh spinach, carrots, onions, celery, and aromatic spices. The lentils cook until tender, creating a naturally creamy texture, while fresh spinach adds vibrant color and essential nutrients. Finished with fresh lemon juice and parsley, this soup is satisfying, healthy, and perfect for meal prep.",

  image: "/images/recipes/spinach-lentil-soup.jpg",

  imageAlt:
    "Mediterranean spinach lentil soup garnished with parsley, lemon wedges, and olive oil.",

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
    "3 garlic cloves, minced",
    "1 cup red lentils, rinsed",
    "5 cups vegetable broth",
    "2 cups fresh spinach, chopped",
    "1 tsp ground cumin",
    "1/2 tsp ground coriander",
    "1/2 tsp turmeric",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "1 tbsp fresh lemon juice",
    "2 tbsp chopped fresh parsley"
  ],

  instructions: [
    "Heat the olive oil in a large soup pot over medium heat.",
    "Cook the onion, carrots, and celery for 6–8 minutes until softened.",
    "Add the garlic and cook for 1 minute.",
    "Stir in the cumin, coriander, and turmeric until fragrant.",
    "Add the rinsed lentils and vegetable broth.",
    "Bring to a boil, then reduce the heat and simmer for 25 minutes until the lentils are tender.",
    "Stir in the chopped spinach and cook for another 3–4 minutes until wilted.",
    "Blend part of the soup if a creamier texture is desired.",
    "Season with salt and black pepper.",
    "Stir in the lemon juice and parsley before serving."
  ],

  nutrition: {
    calories: 235,
    protein: "12 g",
    carbs: "30 g",
    fat: "8 g",
    fiber: "11 g",
    sugar: "5 g",
    sodium: "430 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "Rich in iron and folate",
    "High in dietary fiber",
    "Supports digestive health",
    "Packed with vitamins A, C, and K",
    "Heart-healthy Mediterranean ingredients"
  ],

  keywords: [
    "Spinach Lentil Soup",
    "Mediterranean Lentil Soup",
    "Healthy Lentil Soup",
    "Vegetarian Soup",
    "Spinach Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "vegan",
    "lentils",
    "spinach",
    "high fiber",
    "healthy"
  ],

  featured: true
};