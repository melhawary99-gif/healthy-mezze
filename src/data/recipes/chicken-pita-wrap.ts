import { Recipe } from "@/types/recipe";

export const chickenPitaWrap: Recipe = {
  id: 10,
  title: "Chicken Pita Wrap",
  slug: "chicken-pita-wrap",
  description:
    "A delicious Mediterranean wrap filled with grilled chicken, fresh vegetables, herbs, and a creamy yogurt sauce.",
  image: "/images/recipes/chicken-pita-wrap.jpg",

  cuisine: "Middle Eastern",

  category: "Sandwiches & Wraps",

  prepTime: "15",
  cookTime: "20",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Chicken breast"
  },
{
    amount: 1,
    unit: "",
    name: "Pita bread"
  },
{
    amount: 1,
    unit: "",
    name: "Lettuce"
  },
{
    amount: 1,
    unit: "",
    name: "Tomato"
  },
{
    amount: 1,
    unit: "",
    name: "Cucumber"
  },
{
    amount: 1,
    unit: "",
    name: "Red onion"
  },
{
    amount: 1,
    unit: "",
    name: "Yogurt sauce"
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
    name: "Fresh parsley"
  }
],

instructions: [
    "Marinate chicken with garlic, lemon juice, and Mediterranean spices.",
    "Grill chicken until fully cooked.",
    "Slice chicken into thin pieces.",
    "Fill pita bread with chicken and fresh vegetables.",
    "Add yogurt sauce and herbs.",
    "Wrap and serve fresh.",
  ],

  nutrition: {
    calories: 520,
    protein: "38g",
    carbs: "48g",
    fat: "20g",
  },
};
