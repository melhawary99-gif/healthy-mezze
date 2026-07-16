import { Recipe } from "@/types/recipe";

export const chickenPitaWrap: Recipe = {
  id: 10,
  title: "Chicken Pita Wrap",
  slug: "chicken-pita-wrap",
  description:
    "A delicious Mediterranean wrap filled with grilled chicken, fresh vegetables, herbs, and a creamy yogurt sauce.",
  image: "/images/recipes/chicken-pita-wrap.jpg",

  category: "Sandwiches & Wraps",

  prepTime: "15",
  cookTime: "20",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    "Chicken breast",
    "Pita bread",
    "Lettuce",
    "Tomato",
    "Cucumber",
    "Red onion",
    "Yogurt sauce",
    "Garlic",
    "Lemon juice",
    "Fresh parsley",
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
