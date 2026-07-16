import { Recipe } from "@/types/recipe";

export const lentilSoup: Recipe = {
  id: 4,
  title: "Lentil Soup",
  slug: "lentil-soup",
  description:
    "A comforting Mediterranean soup made with lentils, vegetables, and warming spices.",
  image: "/images/recipes/lentil-soup.jpg",

  category: "Soups",

  prepTime: "15",
  cookTime: "35",
  servings: 6,
  difficulty: "Easy",

  ingredients: [
    "Red lentils",
    "Carrots",
    "Onion",
    "Garlic",
    "Mediterranean spices",
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