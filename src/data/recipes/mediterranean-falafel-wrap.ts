import { Recipe } from "@/types/recipe";

export const mediterraneanFalafelWrap: Recipe = {
  id: 14,
  title: "Mediterranean Falafel Wrap",
  slug: "mediterranean-falafel-wrap",
  description:
    "A delicious Mediterranean wrap filled with crispy falafel, fresh vegetables, herbs, and creamy tahini sauce.",
  image: "/images/recipes/mediterranean-falafel-wrap.jpg",

  category: "Sandwiches & Wraps",

  prepTime: "15",
  cookTime: "10",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    "Falafel",
    "Flatbread",
    "Lettuce",
    "Tomatoes",
    "Cucumber",
    "Red onion",
    "Fresh parsley",
    "Tahini sauce",
    "Lemon juice",
    "Pickled vegetables",
  ],

  instructions: [
    "Prepare fresh vegetables and herbs.",
    "Warm flatbread slightly.",
    "Add falafel and vegetables to the bread.",
    "Drizzle with tahini and lemon sauce.",
    "Add herbs and pickled vegetables.",
    "Wrap tightly and serve fresh.",
  ],

  nutrition: {
    calories: 470,
    protein: "16g",
    carbs: "58g",
    fat: "20g",
  },
};
