import { Recipe } from "@/types/recipe";

export const baklavaYogurtParfait: Recipe = {
  id: 109,
  title: "Baklava-Inspired Yogurt Parfait",
  slug: "baklava-yogurt-parfait",
  description:
    "A healthier twist on traditional baklava featuring creamy Greek yogurt layered with walnuts, pistachios, dates, honey, fresh berries, and warm cinnamon flavors.",
  image: "/images/recipes/baklava-yogurt-parfait.webp",

  imageAlt:
    "Baklava-inspired Greek yogurt parfait layered with walnuts, pistachios, dates, honey, fresh berries, and cinnamon.",

  cuisine: "Middle Eastern",

  category: "desserts",
  vegan: false,
  vegetarian: true,

  prepTime: "10 mins",
  cookTime: "0 mins",
  totalTime: "10 mins",
  servings: 2,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Greek yogurt",
    },
    {
      amount: 1,
      unit: "",
      name: "Walnuts",
    },
    {
      amount: 1,
      unit: "",
      name: "Pistachios",
    },
    {
      amount: 1,
      unit: "",
      name: "Honey",
    },
    {
      amount: 1,
      unit: "",
      name: "Cinnamon",
    },
    {
      amount: 1,
      unit: "",
      name: "Dates",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh berries",
    },
    {
      amount: 1,
      unit: "",
      name: "Vanilla extract",
    },
    {
      amount: 1,
      unit: "",
      name: "Crushed almonds",
    },
  ],

  instructions: [
    "Mix the Greek yogurt with the vanilla extract until smooth.",
    "Roughly chop the walnuts, pistachios, dates, and almonds.",
    "Spoon a layer of Greek yogurt into each serving glass.",
    "Add a layer of chopped dates and mixed nuts.",
    "Top with a handful of fresh berries.",
    "Drizzle lightly with honey.",
    "Repeat the layers until the glasses are full.",
    "Sprinkle with ground cinnamon.",
    "Finish with extra pistachios and almonds on top.",
    "Chill for 15 minutes before serving for the best flavor.",
  ],

  nutrition: {
    calories: 360,
    protein: "18 g",
    carbs: "38 g",
    fat: "16 g",
    fiber: "5 g",
    sugar: "21 g",
    sodium: "90 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of protein",
    "Rich in healthy fats from nuts",
    "Contains calcium for strong bones",
    "Provides antioxidants from berries",
    "Supports heart health",
    "Offers sustained energy",
  ],

  keywords: [
    "Baklava Yogurt Parfait",
    "Healthy Baklava Dessert",
    "Greek Yogurt Parfait",
    "Mediterranean Dessert",
    "Healthy Middle Eastern Dessert",
    "Easy Yogurt Parfait",
  ],

  tags: ["Dessert", "Greek Yogurt", "Mediterranean", "Healthy", "Baklava", "Parfait"],

  featured: false,
};
