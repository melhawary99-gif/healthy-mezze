import { Recipe } from "@/types/recipe";

export const chickenShawarma: Recipe = {
  id: 3,
  title: "Chicken Shawarma",
  slug: "chicken-shawarma",
  description:
    "Tender Mediterranean chicken with spices, fresh vegetables, and warm bread.",
  image: "/images/recipes/chicken-shawarma.jpg",

  category: "Main Dishes",

  prepTime: "25",
  cookTime: "20",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    "Chicken",
    "Garlic",
    "Mediterranean spices",
    "Yogurt sauce",
    "Flatbread",
  ],

  instructions: [
    "Marinate chicken with spices.",
    "Cook until tender.",
    "Prepare fresh toppings.",
    "Serve with bread and sauce.",
  ],

  nutrition: {
    calories: 520,
    protein: "35g",
    carbs: "40g",
    fat: "22g",
  },
};