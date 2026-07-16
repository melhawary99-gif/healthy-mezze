import { Recipe } from "@/types/recipe";

export const hummusPowerBowl: Recipe = {
  id: 9,
  title: "Hummus Power Bowl",
  slug: "hummus-power-bowl",
  description:
    "A nourishing vegan bowl with creamy hummus, fresh vegetables, grains, and Mediterranean flavors.",
  image: "/images/recipes/hummus-power-bowl.jpg",

  category: "Vegan",

  prepTime: "20",
  cookTime: "15",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    "Hummus",
    "Chickpeas",
    "Quinoa",
    "Cucumber",
    "Cherry tomatoes",
    "Roasted vegetables",
    "Fresh parsley",
    "Lemon juice",
    "Extra virgin olive oil",
    "Sesame seeds",
  ],

  instructions: [
    "Prepare quinoa and roasted vegetables.",
    "Arrange hummus, chickpeas, vegetables, and quinoa in a bowl.",
    "Add lemon juice and olive oil dressing.",
    "Sprinkle with parsley and sesame seeds.",
    "Serve fresh.",
  ],

  nutrition: {
    calories: 480,
    protein: "18g",
    carbs: "62g",
    fat: "18g",
  },
};
