import { Recipe } from "@/types/recipe";

export const mediterraneanLemonHerbSalmon: Recipe = {
  id: 15,
  title: "Mediterranean Lemon Herb Salmon",
  slug: "mediterranean-lemon-herb-salmon",
  description:
    "A healthy Mediterranean salmon dish prepared with fresh lemon, herbs, olive oil, and colorful vegetables.",
  image: "/images/recipes/mediterranean-lemon-herb-salmon.jpg",

  category: "Main Dishes",

  prepTime: "10",
  cookTime: "20",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    "Salmon fillet",
    "Lemon juice",
    "Lemon zest",
    "Garlic",
    "Olive oil",
    "Fresh dill",
    "Fresh parsley",
    "Cherry tomatoes",
    "Zucchini",
    "Black pepper",
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
