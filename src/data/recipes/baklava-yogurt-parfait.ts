import { Recipe } from "@/types/recipe";

export const baklavaYogurtParfait: Recipe = {
  id: 13,
  title: "Baklava-Inspired Yogurt Parfait",
  slug: "baklava-yogurt-parfait",
  description:
    "A healthier Mediterranean-inspired dessert combining creamy Greek yogurt, nuts, honey, and warm baklava flavors.",
  image: "/images/recipes/baklava-yogurt-parfait.jpg",

  cuisine: "Middle Eastern",

  category: "Desserts",

  prepTime: "10",
  cookTime: "0",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "",
    name: "Greek yogurt"
  },
{
    amount: 1,
    unit: "",
    name: "Walnuts"
  },
{
    amount: 1,
    unit: "",
    name: "Pistachios"
  },
{
    amount: 1,
    unit: "",
    name: "Honey"
  },
{
    amount: 1,
    unit: "",
    name: "Cinnamon"
  },
{
    amount: 1,
    unit: "",
    name: "Dates"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh berries"
  },
{
    amount: 1,
    unit: "",
    name: "Vanilla extract"
  },
{
    amount: 1,
    unit: "",
    name: "Crushed almonds"
  }
],

instructions: [
    "Mix Greek yogurt with vanilla extract.",
    "Layer yogurt with nuts, dates, and berries.",
    "Add honey and cinnamon.",
    "Top with crushed almonds and pistachios.",
    "Chill before serving.",
  ],

  nutrition: {
    calories: 360,
    protein: "18g",
    carbs: "38g",
    fat: "16g",
  },
};
