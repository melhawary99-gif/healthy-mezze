import { Recipe } from "@/types/recipe";

export const mediterraneanFalafelWrap: Recipe = {
  id: 14,
  title: "Mediterranean Falafel Wrap",
  slug: "mediterranean-falafel-wrap",
  description:
    "A delicious Mediterranean wrap filled with crispy falafel, fresh vegetables, herbs, and creamy tahini sauce.",
  image: "/images/recipes/mediterranean-falafel-wrap.jpg",

  cuisine: "Mediterranean",

  category: "Sandwiches & Wraps",

  prepTime: "15",
  cookTime: "10",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Falafel"
  },
{
    amount: 1,
    unit: "",
    name: "Flatbread"
  },
{
    amount: 1,
    unit: "",
    name: "Lettuce"
  },
{
    amount: 1,
    unit: "",
    name: "Tomatoes"
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
    name: "Fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Tahini sauce"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Pickled vegetables"
  }
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
