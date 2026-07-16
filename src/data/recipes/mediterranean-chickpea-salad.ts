import { Recipe } from "@/types/recipe";

export const mediterraneanChickpeaSalad: Recipe = {
  id: 6,
  title: "Mediterranean Chickpea Salad",
  slug: "mediterranean-chickpea-salad",
  description:
    "A colorful Mediterranean salad made with chickpeas, fresh vegetables, herbs, and a bright lemon olive oil dressing.",
  image: "/images/recipes/mediterranean-chickpea-salad.jpg",

  category: "Salads",

  prepTime: "15",
  cookTime: "0",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    "Chickpeas",
    "Cherry tomatoes",
    "Cucumber",
    "Red onion",
    "Fresh parsley",
    "Bell pepper",
    "Lemon juice",
    "Extra virgin olive oil",
    "Feta cheese",
  ],

  instructions: [
    "Prepare and wash all vegetables.",
    "Combine chickpeas and vegetables in a bowl.",
    "Add herbs and feta cheese.",
    "Mix with lemon juice and olive oil dressing.",
    "Serve chilled.",
  ],

  nutrition: {
    calories: 340,
    protein: "14g",
    carbs: "42g",
    fat: "14g",
  },
};
