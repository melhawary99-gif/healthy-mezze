import { Recipe } from "@/types/recipe";

export const shakshuka: Recipe = {
  id: 7,
  title: "Shakshuka",
  slug: "shakshuka",
  description:
    "A classic Mediterranean dish of poached eggs cooked in a rich tomato sauce with peppers, onions, and warming spices.",
  image: "/images/recipes/shakshuka.jpg",

  category: "Main Dishes",

  prepTime: "15",
  cookTime: "25",
  servings: 4,
  difficulty: "Medium",

  ingredients: [
    "Eggs",
    "Tomatoes",
    "Red bell pepper",
    "Onion",
    "Garlic",
    "Olive oil",
    "Cumin",
    "Paprika",
    "Fresh parsley",
  ],

  instructions: [
    "Sauté onion, garlic, and peppers in olive oil.",
    "Add tomatoes and spices, then simmer until the sauce thickens.",
    "Create small wells in the sauce and add eggs.",
    "Cover and cook until eggs are set.",
    "Garnish with fresh parsley and serve warm.",
  ],

  nutrition: {
    calories: 380,
    protein: "20g",
    carbs: "18g",
    fat: "25g",
  },
};
