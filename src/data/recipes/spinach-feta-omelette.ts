import { Recipe } from "@/types/recipe";

export const spinachFetaOmelette: Recipe = {
  id: 45,

  title: "Spinach & Feta Omelette",

  slug: "spinach-feta-omelette",

  description:
    "A fluffy omelette filled with fresh spinach, creamy feta cheese, herbs, and cooked in extra virgin olive oil for a healthy Mediterranean breakfast.",

  longDescription:
    "This Mediterranean Spinach & Feta Omelette is a protein-rich breakfast that combines fluffy eggs with sautéed spinach, tangy feta cheese, onions, and fresh herbs. Ready in under 20 minutes, it's packed with vitamins, minerals, and healthy fats, making it an excellent choice for a nutritious start to the day.",

  image: "/images/recipes/spinach-feta-omelette.jpg",

  imageAlt:
    "Golden spinach and feta omelette garnished with parsley and served with tomatoes and whole grain toast.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "10 mins",

  cookTime: "10 mins",

  totalTime: "20 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
    "4 large eggs",
    "2 tbsp milk",
    "1 tbsp extra virgin olive oil",
    "1 cup fresh spinach, chopped",
    "1/4 small onion, finely diced",
    "1 garlic clove, minced",
    "1/3 cup crumbled feta cheese",
    "1 tbsp chopped parsley",
    "1 tbsp chopped dill (optional)",
    "1/2 tsp sea salt",
    "1/4 tsp black pepper",
    "1/4 tsp dried oregano",
    "Cherry tomatoes for serving",
    "Whole grain toast for serving"
  ],

  instructions: [
    "Whisk together the eggs, milk, salt, pepper, and oregano until smooth.",
    "Heat the olive oil in a non-stick skillet over medium heat.",
    "Cook the onion for 2–3 minutes until softened.",
    "Add the garlic and spinach, cooking until the spinach has wilted.",
    "Pour the egg mixture evenly into the skillet.",
    "Cook undisturbed for about 2 minutes until the edges begin to set.",
    "Sprinkle the feta cheese, parsley, and optional dill over one half of the omelette.",
    "Carefully fold the omelette in half.",
    "Cook for another 2–3 minutes until the eggs are fully set.",
    "Serve immediately with cherry tomatoes and whole grain toast."
  ],

  nutrition: {
    calories: 320,
    protein: "22 g",
    carbs: "8 g",
    fat: "22 g",
    fiber: "2 g",
    sugar: "3 g",
    sodium: "480 mg"
  },

  healthBenefits: [
    "Excellent source of complete protein",
    "Rich in calcium from feta cheese",
    "High in iron and vitamin K from spinach",
    "Contains healthy fats from olive oil",
    "Supports muscle maintenance",
    "Mediterranean diet friendly",
    "Low in carbohydrates"
  ],

  keywords: [
    "Spinach Omelette",
    "Feta Omelette",
    "Healthy Breakfast",
    "Mediterranean Eggs",
    "Protein Breakfast"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "eggs",
    "spinach",
    "feta",
    "high protein",
    "healthy",
    "vegetarian"
  ],

  featured: true
};