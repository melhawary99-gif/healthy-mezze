import { Recipe } from "@/types/recipe";

export const lentilSoup: Recipe = {
  id: 4,
  title: "Lentil Soup",
  slug: "lentil-soup",
  description:
    "A comforting Mediterranean soup made with lentils, vegetables, and warming spices.",
  image: "/images/recipes/lentil-soup.webp",

  cuisine: "Mediterranean",

  category: "Soups",

  prepTime: "15",
  cookTime: "35",
  servings: 6,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Red lentils"
  },
{
    amount: 1,
    unit: "",
    name: "Carrots"
  },
{
    amount: 1,
    unit: "",
    name: "Onion"
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
  }
],

instructions: [
    "Prepare vegetables.",
    "Cook lentils with spices.",
    "Blend or serve chunky.",
    "Enjoy warm.",
  ],

  nutrition: {
    calories: 280,
    protein: "18g",
    carbs: "45g",
    fat: "6g",
  },
};