import { Recipe } from "@/types/recipe";

export const mediterraneanVegetableSoup: Recipe = {
  id: 108,
  title: "Mediterranean Vegetable Soup",
  slug: "mediterranean-vegetable-soup",
  description:
    "A nourishing Mediterranean vegetable soup made with fresh seasonal vegetables, chickpeas, aromatic herbs, and heart-healthy olive oil for a wholesome and comforting meal.",
  image: "/images/recipes/mediterranean-vegetable-soup.webp",

  imageAlt:
    "Hearty Mediterranean vegetable soup made with zucchini, carrots, tomatoes, chickpeas, fresh herbs, and parsley.",

  cuisine: "Mediterranean",

  category: "soups",
  vegan: true,
  vegetarian: true,

  prepTime: "15 mins",
  cookTime: "35 mins",
  totalTime: "50 mins",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Zucchini",
    },
    {
      amount: 1,
      unit: "",
      name: "Carrots",
    },
    {
      amount: 1,
      unit: "",
      name: "Tomatoes",
    },
    {
      amount: 1,
      unit: "",
      name: "Onion",
    },
    {
      amount: 1,
      unit: "",
      name: "Garlic",
    },
    {
      amount: 1,
      unit: "",
      name: "Chickpeas",
    },
    {
      amount: 1,
      unit: "",
      name: "Vegetable broth",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh parsley",
    },
    {
      amount: 1,
      unit: "",
      name: "Olive oil",
    },
    {
      amount: 1,
      unit: "",
      name: "Mediterranean herbs",
    },
  ],

  instructions: [
    "Wash and chop all the vegetables into bite-sized pieces.",
    "Heat olive oil in a large soup pot over medium heat.",
    "Sauté the onion and garlic until fragrant and translucent.",
    "Add the carrots and zucchini, cooking for a few minutes.",
    "Stir in the tomatoes and Mediterranean herbs.",
    "Add the chickpeas and vegetable broth.",
    "Bring the soup to a gentle boil.",
    "Reduce the heat and simmer for about 30 minutes until the vegetables are tender.",
    "Taste and adjust the seasoning with salt and black pepper.",
    "Garnish with fresh parsley and serve warm.",
  ],

  nutrition: {
    calories: 300,
    protein: "14 g",
    carbs: "42 g",
    fat: "10 g",
    fiber: "10 g",
    sugar: "8 g",
    sodium: "460 mg",
  
  
  },

  healthBenefits: [
    "Rich in dietary fiber",
    "Supports digestive health",
    "Packed with vitamins and antioxidants",
    "Contains heart-healthy olive oil",
    "Provides plant-based protein",
    "Supports a healthy immune system",
  ],

  keywords: [
    "Mediterranean Vegetable Soup",
    "Healthy Vegetable Soup",
    "Mediterranean Soup Recipe",
    "Plant Based Soup",
    "Easy Vegetable Soup",
    "Healthy Mediterranean Recipe",
  ],

  tags: ["Soup", "Mediterranean", "Vegetarian", "Vegan", "Healthy", "Vegetables"],

  featured: false,
};
