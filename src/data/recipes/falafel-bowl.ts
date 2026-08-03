import { Recipe } from "@/types/recipe";

export const falafelBowl: Recipe = {
  id: 3,
  title: "Falafel Bowl",
  slug: "falafel-bowl",
  description:
    "A wholesome Mediterranean bowl made with crispy falafel, fresh vegetables, creamy hummus, and rich tahini sauce.",
  longDescription:
    "This healthy Falafel Bowl combines crispy homemade falafel with fresh mixed greens, juicy tomatoes, creamy hummus, and tahini sauce. Packed with plant-based protein, fiber, and Mediterranean flavors, it makes a satisfying lunch or dinner that's both nutritious and naturally vegan.",
  image: "/images/recipes/falafel-bowl.webp",

  imageAlt:
    "Healthy falafel bowl with hummus, fresh vegetables, mixed greens, and creamy tahini sauce.",

  cuisine: "Lebanese",

  category: "vegetarian",
  vegan: true,

  prepTime: "20 mins",
  cookTime: "15 mins",
  totalTime: "35 mins",
  servings: 2,
  difficulty: "Medium",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Falafel",
    },
    {
      amount: 1,
      unit: "",
      name: "Mixed greens",
    },
    {
      amount: 1,
      unit: "",
      name: "Tomatoes",
    },
    {
      amount: 1,
      unit: "",
      name: "Hummus",
    },
    {
      amount: 1,
      unit: "",
      name: "Tahini sauce",
    },
  ],

  instructions: [
    "Prepare the falafel according to the recipe or package instructions.",
    "Cook the quinoa or rice until tender if using as the bowl base.",
    "Wash and dry the mixed greens thoroughly.",
    "Slice the tomatoes into bite-sized pieces.",
    "Arrange the greens in two serving bowls.",
    "Add the cooked falafel on top of the vegetables.",
    "Spoon the hummus into the bowl.",
    "Drizzle generously with tahini sauce.",
    "Garnish with fresh parsley if desired.",
    "Serve immediately while the falafel is warm.",
  ],

  nutrition: {
    calories: 450,
    protein: "16 g",
    carbs: "52 g",
    fat: "20 g",
    fiber: "12 g",
    sugar: "7 g",
    sodium: "620 mg",
  
  
  },

  healthBenefits: [
    "Rich in plant-based protein",
    "High in dietary fiber",
    "Supports digestive health",
    "Contains heart-healthy fats",
    "Excellent source of vitamins and minerals",
    "Helps promote long-lasting energy",
  ],

  keywords: [
    "Falafel Bowl",
    "Healthy Falafel Bowl",
    "Mediterranean Bowl",
    "Vegetarian Lunch",
    "High Protein Vegetarian Meal",
    "Healthy Mediterranean Recipe",
  ],

  tags: ["Vegetarian", "Vegan", "Mediterranean", "Healthy", "Lunch", "Falafel"],

  featured: false,
};
