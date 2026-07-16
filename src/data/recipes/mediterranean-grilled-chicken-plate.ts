import { Recipe } from "@/types/recipe";

export const mediterraneanGrilledChickenPlate: Recipe = {
  id: 8,
  title: "Mediterranean Grilled Chicken Plate",
  slug: "mediterranean-grilled-chicken-plate",
  description:
    "A healthy Mediterranean meal featuring grilled chicken, fresh vegetables, herbs, and a side of wholesome grains.",
  image: "/images/recipes/mediterranean-grilled-chicken-plate.jpg",

  category: "Main Dishes",

  prepTime: "20",
  cookTime: "25",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    "Chicken breast",
    "Olive oil",
    "Garlic",
    "Lemon juice",
    "Oregano",
    "Brown rice",
    "Cucumber",
    "Tomatoes",
    "Fresh parsley",
    "Yogurt sauce",
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
