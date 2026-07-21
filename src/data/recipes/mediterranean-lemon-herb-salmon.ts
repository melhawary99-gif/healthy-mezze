import { Recipe } from "@/types/recipe";

export const mediterraneanLemonHerbSalmon: Recipe = {
  id: 15,
  title: "Mediterranean Lemon Herb Salmon",
  slug: "mediterranean-lemon-herb-salmon",
  description:
    "A healthy Mediterranean salmon dish prepared with fresh lemon, herbs, olive oil, and colorful vegetables.",
  image: "/images/recipes/mediterranean-lemon-herb-salmon.webp",

  cuisine: "Mediterranean",

  category: "Main Dishes",

  prepTime: "10",
  cookTime: "20",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Salmon fillet"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon zest"
  },
{
    amount: 1,
    unit: "",
    name: "Garlic"
  },
{
    amount: 1,
    unit: "",
    name: "Olive oil"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh dill"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Cherry tomatoes"
  },
{
    amount: 1,
    unit: "",
    name: "Zucchini"
  },
{
    amount: 1,
    unit: "",
    name: "Black pepper"
  }
],

instructions: [
    "Season salmon with lemon juice, herbs, garlic, and olive oil.",
    "Let the salmon marinate briefly.",
    "Bake or grill salmon until tender.",
    "Prepare vegetables with olive oil and herbs.",
    "Serve salmon with vegetables and fresh herbs.",
  ],

  nutrition: {
    calories: 520,
    protein: "42g",
    carbs: "12g",
    fat: "34g",
  },
};
