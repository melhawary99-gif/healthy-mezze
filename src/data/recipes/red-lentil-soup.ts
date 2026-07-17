import { Recipe } from "@/types/recipe";

export const redLentilSoup: Recipe = {
  id: 11,

  title: "Red Lentil Soup (Shorbat Adas)",

  slug: "red-lentil-soup",

  description:
    "A comforting Middle Eastern red lentil soup made with vegetables, warming spices, and fresh lemon juice.",

  longDescription:
    "Shorbat Adas is one of the most beloved soups throughout Lebanon, Egypt, and the Middle East. Made with red lentils, onions, carrots, celery, garlic, and fragrant spices, this creamy soup is naturally vegetarian, high in plant-based protein, and incredibly satisfying. Serve it with warm pita bread and fresh lemon wedges for a traditional meal.",

  image: "/images/recipes/red-lentil-soup.jpg",

  imageAlt:
    "Creamy red lentil soup garnished with parsley, olive oil, and lemon wedges.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "35 mins",

  totalTime: "50 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    "2 cups red lentils, rinsed",
    "1 large onion, chopped",
    "2 carrots, diced",
    "2 celery stalks, diced",
    "3 cloves garlic, minced",
    "2 tbsp extra virgin olive oil",
    "1 tsp ground cumin",
    "1 tsp ground turmeric",
    "1/2 tsp ground coriander",
    "1/4 tsp paprika",
    "6 cups vegetable broth",
    "1 tbsp fresh lemon juice",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "Fresh parsley for garnish",
    "Lemon wedges for serving"
  ],

  instructions: [
    "Heat the olive oil in a large soup pot over medium heat.",
    "Add the onion, carrots, and celery. Cook for 6–8 minutes until softened.",
    "Stir in the garlic and cook for 1 minute.",
    "Add the cumin, turmeric, coriander, and paprika. Cook for 30 seconds until fragrant.",
    "Add the rinsed lentils and vegetable broth.",
    "Bring to a boil, then reduce to a gentle simmer.",
    "Cook for about 25 minutes until the lentils are very soft.",
    "Blend the soup until smooth using an immersion blender or countertop blender.",
    "Stir in the lemon juice, salt, and black pepper.",
    "Serve hot with chopped parsley and fresh lemon wedges."
  ],

  nutrition: {
    calories: 245,
    protein: "14 g",
    carbs: "34 g",
    fat: "6 g",
    fiber: "12 g",
    sugar: "5 g",
    sodium: "520 mg"
  },

  healthBenefits: [
    "Excellent source of plant protein",
    "Very high in dietary fiber",
    "Rich in iron and folate",
    "Supports digestive health",
    "Heart-healthy and naturally cholesterol-free",
    "Naturally vegetarian and gluten-free"
  ],

  keywords: [
    "Red Lentil Soup",
    "Shorbat Adas",
    "Middle Eastern Lentil Soup",
    "Lebanese Lentil Soup",
    "Healthy Lentil Soup"
  ],

  tags: [
    "soup",
    "Middle Eastern",
    "Lebanese",
    "healthy",
    "vegetarian",
    "gluten-free",
    "high protein",
    "meal prep"
  ],

  featured: true
};