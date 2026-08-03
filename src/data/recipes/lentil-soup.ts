import { Recipe } from "@/types/recipe";

export const lentilSoup: Recipe = {
  id: 5,
  title: "Lentil Soup",
  slug: "lentil-soup",
  description:
    "A hearty Mediterranean red lentil soup made with vegetables, aromatic spices, and wholesome ingredients for a comforting and nutritious meal.",
  longDescription:
    "This Mediterranean Lentil Soup is a comforting, protein-rich dish prepared with red lentils, carrots, onions, garlic, and aromatic spices. Naturally high in fiber and plant-based protein, it is a wholesome meal that supports heart health, digestion, and long-lasting energy. Perfect for lunch or dinner, it pairs beautifully with warm pita bread and a squeeze of fresh lemon.",
  image: "/images/recipes/lentil-soup.webp",

  imageAlt:
    "Creamy Mediterranean red lentil soup garnished with parsley and served with fresh lemon wedges.",

  cuisine: "Mediterranean",

  category: "soups",
  vegan: true,
  vegetarian: true,

  prepTime: "15 mins",
  cookTime: "35 mins",
  totalTime: "50 mins",
  servings: 6,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Red lentils",
    },
    {
      amount: 1,
      unit: "",
      name: "Carrots",
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
      name: "Mediterranean spices",
    },
  ],

  instructions: [
    "Rinse the red lentils thoroughly under cold running water.",
    "Peel and dice the onion, carrots, and garlic.",
    "Heat olive oil in a large pot over medium heat.",
    "Sauté the onion until soft and translucent.",
    "Add the garlic and carrots, cooking for another 2–3 minutes.",
    "Stir in the Mediterranean spices and cook until fragrant.",
    "Add the lentils and vegetable broth, then bring to a boil.",
    "Reduce the heat and simmer for about 30 minutes until the lentils are tender.",
    "Blend the soup until smooth or leave it slightly chunky, according to your preference.",
    "Serve hot with fresh lemon wedges and chopped parsley.",
  ],

  nutrition: {
    calories: 280,
    protein: "18 g",
    carbs: "45 g",
    fat: "6 g",
    fiber: "12 g",
    sugar: "6 g",
    sodium: "480 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Supports digestive health",
    "Rich in iron and essential minerals",
    "Helps maintain steady energy levels",
    "Supports heart health",
  ],

  keywords: [
    "Lentil Soup",
    "Mediterranean Lentil Soup",
    "Healthy Lentil Soup",
    "Easy Soup Recipe",
    "Plant Based Soup",
    "Healthy Mediterranean Recipe",
  ],

  tags: ["Soup", "Mediterranean", "Healthy", "Lentils", "High Fiber", "Vegetarian"],

  featured: false,
};
