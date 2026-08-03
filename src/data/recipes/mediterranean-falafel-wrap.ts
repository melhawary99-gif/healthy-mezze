import { Recipe } from "@/types/recipe";

export const mediterraneanFalafelWrap: Recipe = {
  id: 110,
  title: "Mediterranean Falafel Wrap",
  slug: "mediterranean-falafel-wrap",
  description:
    "A satisfying Mediterranean wrap packed with crispy falafel, fresh vegetables, herbs, pickled vegetables, and creamy tahini sauce for a wholesome plant-based meal.",
  image: "/images/recipes/mediterranean-falafel-wrap.webp",

  imageAlt:
    "Mediterranean falafel wrap filled with crispy falafel, lettuce, tomatoes, cucumber, red onion, pickled vegetables, fresh parsley, and creamy tahini sauce.",

  cuisine: "Mediterranean",

  category: "sandwiches-wraps",
  vegan: true,
  vegetarian: true,

  prepTime: "15 mins",
  cookTime: "10 mins",
  totalTime: "25 mins",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Falafel",
    },
    {
      amount: 1,
      unit: "",
      name: "Flatbread",
    },
    {
      amount: 1,
      unit: "",
      name: "Lettuce",
    },
    {
      amount: 1,
      unit: "",
      name: "Tomatoes",
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
      name: "Fresh parsley",
    },
    {
      amount: 1,
      unit: "",
      name: "Tahini sauce",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon juice",
    },
    {
      amount: 1,
      unit: "",
      name: "Pickled vegetables",
    },
  ],

  instructions: [
    "Prepare the falafel according to the recipe or package instructions.",
    "Wash and slice the lettuce, tomatoes, cucumber, and red onion.",
    "Warm the flatbread until soft and flexible.",
    "Spread a thin layer of tahini sauce over the flatbread.",
    "Arrange the lettuce and fresh vegetables evenly.",
    "Place the warm falafel on top of the vegetables.",
    "Add the pickled vegetables and chopped parsley.",
    "Drizzle with fresh lemon juice and additional tahini sauce if desired.",
    "Fold the sides of the flatbread and roll it tightly into a wrap.",
    "Serve immediately while the falafel is warm.",
  ],

  nutrition: {
    calories: 470,
    protein: "16 g",
    carbs: "58 g",
    fat: "20 g",
    fiber: "11 g",
    sugar: "6 g",
    sodium: "590 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Supports digestive health",
    "Rich in vitamins and minerals",
    "Contains heart-healthy fats from tahini",
    "Provides long-lasting energy",
  ],

  keywords: [
    "Mediterranean Falafel Wrap",
    "Healthy Falafel Wrap",
    "Vegan Mediterranean Wrap",
    "Plant Based Lunch",
    "Easy Falafel Recipe",
    "Healthy Mediterranean Food",
  ],

  tags: ["Falafel", "Wrap", "Mediterranean", "Vegan", "Healthy", "Lunch"],

  featured: false,
};
