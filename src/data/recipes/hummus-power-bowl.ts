import { Recipe } from "@/types/recipe";

export const hummusPowerBowl: Recipe = {
  id: 9,
  title: "Hummus Power Bowl",
  slug: "hummus-power-bowl",
  description:
    "A nourishing vegan bowl with creamy hummus, fresh vegetables, grains, and Mediterranean flavors.",
  image: "/images/recipes/hummus-power-bowl.jpg",

  cuisine: "Mediterranean",

  category: "Vegan",

  prepTime: "20",
  cookTime: "15",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Hummus"
  },
{
    amount: 1,
    unit: "",
    name: "Chickpeas"
  },
{
    amount: 1,
    unit: "",
    name: "Quinoa"
  },
{
    amount: 1,
    unit: "",
    name: "Cucumber"
  },
{
    amount: 1,
    unit: "",
    name: "Cherry tomatoes"
  },
{
    amount: 1,
    unit: "",
    name: "Roasted vegetables"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Extra virgin olive oil"
  },
{
    amount: 1,
    unit: "",
    name: "Sesame seeds"
  }
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
