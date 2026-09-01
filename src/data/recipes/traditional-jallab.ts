import { Recipe } from "@/types/recipe";

export const traditionalJallab: Recipe = {
  datePublished: "2026-07-17",
  id: 83,

  title: "Traditional Jallab (Healthy Version)",

  slug: "traditional-jallab",

  description:
    "A refreshing Lebanese Jallab made with date molasses, grape molasses, rose water, chilled water, and ice, finished with pine nuts and golden raisins.",

  longDescription:
    "Jallab is a traditional Levantine drink especially associated with Lebanon and the wider Middle East. It combines date molasses, grape molasses, and fragrant rose water with chilled water and ice, then is finished with pine nuts and golden raisins. This Healthy Mezze version uses date and grape molasses instead of refined granulated sugar while preserving the characteristic sweet, floral, rich flavor and traditional garnish.",

  image: "/images/recipes/traditional-jallab.webp",

  imageAlt:
    "A tall glass of traditional Lebanese Jallab served chilled over ice with pine nuts, golden raisins, and fresh mint.",

  cuisine: "Lebanese",

  category: "drinks",

  vegetarian: true,

  vegan: true,

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 4,
      unit: "cups",
      name: "cold water",
      note: "Use chilled water; keep the ice for serving so the drink does not become diluted while mixing.",
    },
    {
      amount: 4,
      unit: "tbsp",
      name: "date molasses",
      note: "Use a smooth date molasses or date syrup that can dissolve readily into the water.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "grape molasses",
      note: "Adds the characteristic deep fruit flavor and color associated with traditional Jallab.",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "rose water",
      note: "Use good-quality food-grade rose water; its flavor is concentrated, so measure carefully.",
    },
    {
      amount: 2,
      unit: "cups",
      name: "ice cubes",
      note: "Add to the serving glasses immediately before pouring the drink.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "pine nuts",
      note: "Use raw or lightly toasted pine nuts; toast gently if desired and allow them to cool before serving.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "golden raisins",
      note: "Use as the traditional garnish; they can be served dry or briefly softened in water before draining.",
    },
    {
      amount: 1,
      unit: "",
      name: "fresh mint leaves",
      note: "Optional, for garnish.",
    },
  ],

  instructions: [
    "Add the cold water, date molasses, grape molasses, and rose water to a large pitcher.",
    "Stir thoroughly until the date and grape molasses are evenly dissolved and the drink has a uniform deep color.",
    "Taste the mixture before adding ice. If you prefer a sweeter Jallab, add a small amount of additional date molasses and stir again.",
    "Fill four serving glasses with the ice cubes.",
    "Pour the prepared Jallab evenly over the ice, leaving enough room for the garnish.",
    "Scatter the pine nuts and golden raisins over the surface of each glass.",
    "Garnish with a few fresh mint leaves if desired.",
    "Serve immediately while thoroughly chilled, with a small spoon if desired so the pine nuts and raisins can be enjoyed with the drink.",
  ],

  nutrition: {
    calories: 95,
    protein: "1 g",
    carbs: "23 g",
    fat: "1 g",
    fiber: "1 g",
    sugar: "19 g",
    sodium: "20 mg",
  },

  healthBenefits: [
    "Uses date and grape molasses instead of refined granulated sugar.",
    "Provides small amounts of naturally occurring micronutrients and plant compounds from date and grape molasses.",
    "Pine nuts contribute unsaturated fats and vitamin E.",
    "Naturally caffeine-free.",
    "Refreshing and hydrating when served chilled.",
    "A traditional Lebanese and Levantine beverage enjoyed during hot weather and festive occasions.",
  ],

  keywords: [
    "Jallab",
    "Traditional Jallab",
    "Lebanese Jallab",
    "Jallab Drink",
    "Date Molasses Drink",
    "Grape Molasses Drink",
    "Lebanese Drink",
    "Levantine Drink",
    "Ramadan Drink",
    "Healthy Middle Eastern Beverage",
  ],

  tags: [
    "drink",
    "Lebanese",
    "Levantine",
    "jallab",
    "date molasses",
    "grape molasses",
    "rose water",
    "healthy",
    "Middle Eastern",
    "Ramadan",
    "vegetarian",
    "vegan",
  ],

  featured: true,
};
