import { Recipe } from "@/types/recipe";

export const chickenShawarma: Recipe = {
  id: 4,
  title: "Chicken Shawarma",
  slug: "chicken-shawarma",
  description: "Tender Mediterranean chicken with spices, fresh vegetables, and warm bread.",
  image: "/images/recipes/chicken-shawarma.webp",

  imageAlt: "Chicken Shawarma served on a plate.",

  cuisine: "Lebanese",

  category: "main-dishes",
  vegan: false,
  vegetarian: false,

  prepTime: "25",
  cookTime: "20",

  totalTime: "25",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Chicken",
    },
    {
      amount: 1,
      unit: "",
      name: "Garlic",
    },
    {
      amount: 1,
      unit: "",
      name: "Mediterranean spices",
    },
    {
      amount: 1,
      unit: "",
      name: "Yogurt sauce",
    },
    {
      amount: 1,
      unit: "",
      name: "Flatbread",
    },
  ],

  instructions: [
    "Pat the chicken dry using paper towels.",
    "Combine olive oil, garlic, lemon juice, and all spices in a bowl.",
    "Coat the chicken thoroughly with the marinade.",
    "Cover and refrigerate for at least 30 minutes, preferably overnight.",
    "Preheat a grill or skillet over medium-high heat.",
    "Cook the chicken for 6–8 minutes per side until fully cooked.",
    "Transfer the chicken to a cutting board and let it rest for 5 minutes.",
    "Slice the chicken into thin shawarma-style strips.",
    "Serve with rice, salad, pita bread, or garlic sauce.",
    "Garnish with fresh parsley and enjoy immediately.",
  ],

  nutrition: {
    calories: 520,
    protein: "35 g",
    carbs: "40 g",
    fat: "22 g",

    fiber: "0 g",
    sugar: "0 g",
    sodium: "0 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Supports muscle growth and recovery",
    "Rich in essential vitamins and minerals",
    "Contains heart-healthy olive oil",
    "Provides long-lasting energy",
    "Supports a balanced Mediterranean diet",
  ],

  keywords: [
    "Chicken Shawarma",
    "Healthy Chicken Shawarma",
    "Mediterranean Chicken Recipe",
    "Easy Lebanese Chicken",
    "High Protein Dinner",
    "Healthy Mediterranean Food",
  ],

  tags: ["Chicken", "Mediterranean", "Lebanese", "High Protein", "Dinner", "Healthy"],

  featured: false,
};
