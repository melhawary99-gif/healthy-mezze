import { Recipe } from "@/types/recipe";

export const falafelBowl: Recipe = {
  id: 2,
  title: "Falafel Bowl",
  slug: "falafel-bowl",
  description:
    "A nourishing bowl with crispy falafel, fresh vegetables, and Mediterranean flavors.",
  image: "/images/recipes/falafel-bowl.jpg",

  category: "Vegetarian",

  prepTime: "20",
  cookTime: "15",
  servings: 2,
  difficulty: "Medium",

  ingredients: [
    "Falafel",
    "Mixed greens",
    "Tomatoes",
    "Hummus",
    "Tahini sauce",
  ],

  instructions: [
    "Prepare fresh vegetables.",
    "Cook or warm falafel.",
    "Arrange ingredients in a bowl.",
    "Add tahini sauce and serve.",
  ],

  nutrition: {
    calories: 450,
    protein: "16g",
    carbs: "52g",
    fat: "20g",
  },
};