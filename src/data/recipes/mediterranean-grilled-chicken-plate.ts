import { Recipe } from "@/types/recipe";

export const mediterraneanGrilledChickenPlate: Recipe = {
  id: 104,
  title: "Mediterranean Grilled Chicken Plate",
  slug: "mediterranean-grilled-chicken-plate",
  description:
    "A balanced Mediterranean meal featuring juicy grilled chicken, wholesome brown rice, crisp vegetables, fresh herbs, and creamy yogurt sauce.",
  image: "/images/recipes/mediterranean-grilled-chicken-plate.webp",

  imageAlt:
    "Mediterranean grilled chicken served with brown rice, fresh cucumber, tomatoes, parsley, and creamy yogurt sauce.",

  cuisine: "Mediterranean",

  category: "main-dishes",
  vegan: false,
  vegetarian: false,

  prepTime: "20 mins",
  cookTime: "25 mins",
  totalTime: "45 mins",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Chicken breast",
    },
    {
      amount: 1,
      unit: "",
      name: "Olive oil",
    },
    {
      amount: 1,
      unit: "",
      name: "Garlic",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon juice",
    },
    {
      amount: 1,
      unit: "",
      name: "Oregano",
    },
    {
      amount: 1,
      unit: "",
      name: "Brown rice",
    },
    {
      amount: 1,
      unit: "",
      name: "Cucumber",
    },
    {
      amount: 1,
      unit: "",
      name: "Tomatoes",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh parsley",
    },
    {
      amount: 1,
      unit: "",
      name: "Yogurt sauce",
    },
  ],

  instructions: [
    "Pat the chicken breasts dry with paper towels.",
    "Mix olive oil, garlic, lemon juice, oregano, salt, and pepper in a bowl.",
    "Coat the chicken evenly with the marinade and refrigerate for at least 20 minutes.",
    "Preheat the grill or grill pan over medium-high heat.",
    "Grill the chicken for 6–7 minutes per side until fully cooked.",
    "Cook the brown rice according to the package instructions.",
    "Slice the cucumber and tomatoes and chop the fresh parsley.",
    "Arrange the rice, vegetables, and grilled chicken on serving plates.",
    "Drizzle with yogurt sauce.",
    "Garnish with fresh parsley and serve immediately.",
  ],

  nutrition: {
    calories: 560,
    protein: "45 g",
    carbs: "48 g",
    fat: "22 g",
    fiber: "6 g",
    sugar: "5 g",
    sodium: "520 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Supports muscle growth and recovery",
    "Rich in vitamins and minerals",
    "Contains heart-healthy olive oil",
    "Supports heart health",
    "Provides long-lasting energy",
  ],

  keywords: [
    "Mediterranean Grilled Chicken Plate",
    "Healthy Chicken Dinner",
    "Mediterranean Chicken Recipe",
    "High Protein Meal",
    "Healthy Mediterranean Food",
    "Easy Grilled Chicken",
  ],

  tags: ["Chicken", "Mediterranean", "Healthy", "High Protein", "Dinner", "Grilled"],

  featured: false,
};
