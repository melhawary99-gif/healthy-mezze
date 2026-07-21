import { Recipe } from "@/types/recipe";

export const mediterraneanGrilledChickenPlate: Recipe = {
  id: 8,
  title: "Mediterranean Grilled Chicken Plate",
  slug: "mediterranean-grilled-chicken-plate",
  description:
    "A healthy Mediterranean meal featuring grilled chicken, fresh vegetables, herbs, and a side of wholesome grains.",
  image: "/images/recipes/mediterranean-grilled-chicken-plate.webp",

  cuisine: "Mediterranean",

  category: "Main Dishes",

  prepTime: "20",
  cookTime: "25",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Chicken breast"
  },
{
    amount: 1,
    unit: "",
    name: "Olive oil"
  },
{
    amount: 1,
    unit: "",
    name: "Garlic"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Oregano"
  },
{
    amount: 1,
    unit: "",
    name: "Brown rice"
  },
{
    amount: 1,
    unit: "",
    name: "Cucumber"
  },
{
    amount: 1,
    unit: "",
    name: "Tomatoes"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Yogurt sauce"
  }
],

instructions: [
    "Marinate chicken with olive oil, garlic, lemon juice, and herbs.",
    "Grill chicken until fully cooked and golden.",
    "Prepare fresh vegetables and grain side.",
    "Serve chicken with vegetables, rice, and yogurt sauce.",
    "Garnish with fresh parsley.",
  ],

  nutrition: {
    calories: 560,
    protein: "45g",
    carbs: "48g",
    fat: "22g",
  },
};
