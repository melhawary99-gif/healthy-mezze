import { Recipe } from "@/types/recipe";

export const chickenPitaWrap: Recipe = {
  id: 106,
  title: "Chicken Pita Wrap",
  slug: "chicken-pita-wrap",
  description:
    "A flavorful Mediterranean pita wrap packed with juicy grilled chicken, crisp vegetables, fresh herbs, and creamy yogurt sauce for a satisfying and healthy meal.",

  image: "/images/recipes/chicken-pita-wrap.webp",

  imageAlt:
    "Mediterranean chicken pita wrap filled with grilled chicken, lettuce, tomatoes, cucumber, red onion, fresh parsley, and creamy yogurt sauce.",

  cuisine: "Middle Eastern",

  category: "sandwiches-wraps",
  vegan: false,
  vegetarian: false,

  prepTime: "15 mins",
  cookTime: "20 mins",
  totalTime: "35 mins",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Chicken breast",
    },
    {
      amount: 1,
      unit: "",
      name: "Pita bread",
    },
    {
      amount: 1,
      unit: "",
      name: "Lettuce",
    },
    {
      amount: 1,
      unit: "",
      name: "Tomato",
    },
    {
      amount: 1,
      unit: "",
      name: "Cucumber",
    },
    {
      amount: 1,
      unit: "",
      name: "Red onion",
    },
    {
      amount: 1,
      unit: "",
      name: "Yogurt sauce",
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
      name: "Fresh parsley",
    },
  ],

  instructions: [
    "Pat the chicken breast dry and season with Mediterranean spices.",
    "Mix garlic, lemon juice, olive oil, salt, and pepper into a simple marinade.",
    "Marinate the chicken for at least 15 minutes.",
    "Grill the chicken until fully cooked and lightly charred.",
    "Allow the chicken to rest for 5 minutes before slicing into thin strips.",
    "Warm the pita bread until soft and pliable.",
    "Layer the pita with lettuce, tomato, cucumber, and red onion.",
    "Add the sliced grilled chicken.",
    "Drizzle generously with yogurt sauce and sprinkle with chopped parsley.",
    "Wrap tightly and serve immediately.",
  ],

  nutrition: {
    calories: 520,
    protein: "38 g",
    carbs: "48 g",
    fat: "20 g",
    fiber: "5 g",
    sugar: "6 g",
    sodium: "640 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Supports muscle growth and recovery",
    "Contains heart-healthy olive oil",
    "Rich in vitamins and minerals",
    "Provides balanced energy",
    "Supports a healthy Mediterranean diet",
  ],

  keywords: [
    "Chicken Pita Wrap",
    "Mediterranean Chicken Wrap",
    "Healthy Chicken Wrap",
    "Easy Lunch Recipe",
    "Middle Eastern Wrap",
    "Healthy Mediterranean Food",
  ],

  tags: ["Chicken", "Wrap", "Mediterranean", "Healthy", "Lunch", "High Protein"],

  featured: false,
};
