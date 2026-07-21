import { Recipe } from "@/types/recipe";

export const chickenShawarma: Recipe = {
  id: 3,
  title: "Chicken Shawarma",
  slug: "chicken-shawarma",
  description:
    "Tender Mediterranean chicken with spices, fresh vegetables, and warm bread.",
  image: "/images/recipes/chicken-shawarma.webp",

  cuisine: "Lebanese",

  category: "Main Dishes",

  prepTime: "25",
  cookTime: "20",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Chicken"
  },
{
    amount: 1,
    unit: "",
    name: "Garlic"
  },
{
    amount: 1,
    unit: "",
    name: "Mediterranean spices"
  },
{
    amount: 1,
    unit: "",
    name: "Yogurt sauce"
  },
{
    amount: 1,
    unit: "",
    name: "Flatbread"
  }
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