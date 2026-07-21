import { Recipe } from "@/types/recipe";

export const falafelBowl: Recipe = {
  id: 2,
  title: "Falafel Bowl",
  slug: "falafel-bowl",
  description:
    "A nourishing bowl with crispy falafel, fresh vegetables, and Mediterranean flavors.",
  image: "/images/recipes/falafel-bowl.webp",

  cuisine: "Lebanese",

  category: "Vegetarian",

  prepTime: "20",
  cookTime: "15",
  servings: 2,
  difficulty: "Medium",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Falafel"
  },
{
    amount: 1,
    unit: "",
    name: "Mixed greens"
  },
{
    amount: 1,
    unit: "",
    name: "Tomatoes"
  },
{
    amount: 1,
    unit: "",
    name: "Hummus"
  },
{
    amount: 1,
    unit: "",
    name: "Tahini sauce"
  }
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