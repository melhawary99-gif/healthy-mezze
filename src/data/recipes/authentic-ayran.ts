import { Recipe } from "@/types/recipe";

export const authenticAyran: Recipe = {
  id: 88,

  title: "Authentic Ayran (Laban Ayran)",

  slug: "authentic-ayran",

  description:
    "A refreshing traditional yogurt drink made with plain yogurt, ice-cold water, sea salt, and optional fresh mint.",

  longDescription:
    "Ayran, known as Laban Ayran in parts of the Levant, is a simple savory yogurt drink enjoyed across the Middle East and neighboring regions. Its appeal comes from a short list of ingredients: creamy plain yogurt, cold water, and a little salt blended until smooth and lightly frothy. Served well chilled, Ayran is especially refreshing alongside grilled meats, shawarma, kebabs, falafel, mezze, and other boldly seasoned foods. This Lebanese-style preparation keeps the drink simple and savory, with optional fresh mint for an extra cooling aroma. The yogurt provides protein and calcium, while the cold, lightly salted drink makes a refreshing accompaniment to a meal.",

  image: "/images/recipes/authentic-ayran.webp",

  imageAlt:
    "Chilled Lebanese-style Ayran yogurt drink in a clear glass with fresh mint and ice.",

  cuisine: "Lebanese",

  category: "drinks",

  prepTime: "5 mins",

  cookTime: "0 mins",

  totalTime: "5 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "plain Greek yogurt",
      note: "Use unsweetened plain yogurt. A thick yogurt produces a creamy Ayran that can be adjusted with additional water.",
    },
    {
      amount: 2,
      unit: "cups",
      name: "ice-cold water",
      note: "Start with the listed amount and add a little more if you prefer a lighter, more pourable drink.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Start with less if your yogurt is already slightly salty, then adjust to taste.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "ice cubes",
      note: "Optional. Use for an especially cold serving.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh mint",
      note: "Finely chopped and optional. Add for a fresh herbal aroma.",
    },
    {
      amount: 1,
      unit: "",
      name: "fresh mint sprig",
      note: "Optional. Use as a simple garnish.",
    },
  ],

  instructions: [
    "Add the plain Greek yogurt, ice-cold water, and sea salt to a blender.",
    "Blend for about 30–60 seconds until the yogurt and water are completely combined and a light layer of foam forms on the surface.",
    "Taste the Ayran and adjust the salt gradually. The finished drink should be pleasantly savory and refreshing rather than heavily salty.",
    "If using chopped fresh mint, stir it into the finished drink after blending so small pieces of mint remain visible and aromatic.",
    "Fill chilled serving glasses with ice if desired.",
    "Pour the Ayran into the glasses and leave a little room at the top for the natural foam.",
    "Garnish with a small fresh mint sprig if desired.",
    "Serve immediately while thoroughly chilled. Gently stir or shake the drink before serving again if the yogurt begins to settle.",
  ],

  nutrition: {
    calories: 95,
    protein: "9 g",
    carbs: "7 g",
    fat: "3 g",
    fiber: "0 g",
    sugar: "6 g",
    sodium: "340 mg",
  },

  healthBenefits: [
    "Provides protein from plain yogurt.",
    "Yogurt provides calcium and other nutrients important to a balanced diet.",
    "When made with yogurt containing live cultures, Ayran can provide beneficial yogurt cultures.",
    "Contains no added sugar in this savory preparation.",
    "Provides fluid along with electrolytes such as sodium from the yogurt and added salt.",
    "Naturally refreshing and well suited to serving alongside savory meals.",
    "Its combination of yogurt, water, and salt makes it a simple alternative to heavily sweetened beverages.",
  ],

  keywords: [
    "Ayran",
    "Authentic Ayran",
    "Laban Ayran",
    "Lebanese Ayran",
    "Lebanese Yogurt Drink",
    "Middle Eastern Yogurt Drink",
    "Savory Yogurt Drink",
    "Salted Yogurt Drink",
    "Healthy Yogurt Beverage",
  ],

  tags: [
    "drink",
    "Lebanese",
    "ayran",
    "laban",
    "yogurt",
    "healthy",
    "traditional",
    "high-protein",
    "vegetarian",
    "savory",
    "mint",
  ],

  featured: true,
};
