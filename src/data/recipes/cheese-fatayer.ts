import { Recipe } from "@/types/recipe";

export const cheeseFatayer: Recipe = {
  id: 63,

  title: "Cheese Fatayer",

  slug: "cheese-fatayer",

  description:
    "Soft whole wheat pastries filled with a delicious blend of Akkawi cheese, reduced-fat mozzarella, fresh parsley, and nigella seeds. A healthier version of a classic Lebanese bakery favorite.",

  longDescription:
    "Cheese Fatayer are among the most popular baked pastries found in Lebanese bakeries. This healthier version uses whole wheat flour and a lighter cheese filling made with soaked Akkawi cheese and reduced-fat mozzarella for less sodium and saturated fat while preserving the authentic flavor. Fresh parsley and nigella seeds add a traditional Mediterranean aroma, making these pastries perfect as breakfast, mezze, or a light meal.",

  image: "/images/recipes/cheese-fatayer.jpg",

  imageAlt:
    "Freshly baked Lebanese cheese fatayer arranged on a serving board with parsley and black nigella seeds.",

  cuisine: "Lebanese",

  category: "Mezze",

  prepTime: "35 mins",

  cookTime: "22 mins",

  totalTime: "1 hr 20 mins",

  servings: 12,

  difficulty: "Medium",

  ingredients: [
{
    amount: 2,
    unit: "cups",
    name: "whole wheat flour"
  },
{
    amount: 1,
    unit: "cup",
    name: "all-purpose flour"
  },
{
    amount: 1,
    unit: "",
    name: "2¼ tsp instant yeast"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sugar"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 1,
    unit: "cup",
    name: "warm water"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "cup",
    name: "Akkawi cheese, soaked and crumbled"
  },
{
    amount: 1,
    unit: "cup",
    name: "reduced-fat mozzarella, shredded"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "low-fat feta cheese, crumbled"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "fresh parsley, finely chopped"
  },
{
    amount: 1,
    unit: "tsp",
    name: "nigella seeds"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried oregano"
  },
{
    amount: 1,
    unit: "",
    name: "1 egg, lightly beaten (for brushing)"
  }
],

instructions: [
    "Combine the flours, yeast, sugar, and salt in a large bowl.",
    "Add the warm water and olive oil and knead for 8–10 minutes until smooth.",
    "Cover and allow the dough to rise for about 1 hour.",
    "Meanwhile, mix the Akkawi cheese, mozzarella, feta, parsley, oregano, and nigella seeds.",
    "Preheat the oven to 400°F (200°C).",
    "Divide the dough into 12 equal balls.",
    "Roll each into a 5-inch (13 cm) circle.",
    "Place about 2 tablespoons of cheese filling in the center.",
    "Fold and pinch the edges together to form the traditional triangular fatayer shape.",
    "Arrange on a parchment-lined baking tray.",
    "Brush lightly with beaten egg.",
    "Bake for 20–22 minutes until golden brown.",
    "Serve warm or at room temperature."
  ],

  nutrition: {
    calories: 210,
    protein: "10 g",
    carbs: "25 g",
    fat: "8 g",
    fiber: "3 g",
    sugar: "1 g",
    sodium: "320 mg"
  },

  healthBenefits: [
    "Excellent source of calcium",
    "Higher in protein than many pastries",
    "Made with whole wheat flour for extra fiber",
    "Reduced sodium compared to traditional recipes",
    "Contains heart-healthy olive oil",
    "Provides B vitamins",
    "Mediterranean diet inspired"
  ],

  keywords: [
    "Cheese Fatayer",
    "Lebanese Cheese Pies",
    "Healthy Fatayer",
    "Lebanese Bakery",
    "Mediterranean Pastry"
  ],

  tags: [
    "mezze",
    "Lebanese",
    "fatayer",
    "cheese",
    "vegetarian",
    "healthy",
    "baked",
    "Mediterranean"
  ],

  featured: true
};