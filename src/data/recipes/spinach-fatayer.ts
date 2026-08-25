import { Recipe } from "@/types/recipe";

export const spinachFatayer: Recipe = {
  id: 64,

  title: "Spinach Fatayer",

  slug: "spinach-fatayer",

  description:
    "Large Lebanese boat-shaped spinach fatayer filled with fresh spinach, onion, parsley, mint, lemon, sumac, and olive oil. These golden baked pastries make a flavorful vegetarian mezze, snack, or light meal.",

  longDescription:
    "Spinach Fatayer are a beloved Lebanese pastry traditionally made from soft yeast dough and a bright, tangy spinach filling. This version is shaped into larger open boat-style pastries rather than small closed triangles, allowing the spinach filling to remain visible while the dough bakes around it into a golden, lightly crisp shell. Fresh spinach is combined with onion, parsley, mint, lemon juice, olive oil, sumac, black pepper, and allspice to create the characteristic savory, lemony, slightly tangy flavor associated with Lebanese spinach pies. The most important preparation detail is removing excess liquid from the spinach mixture before filling the dough, which helps prevent soggy bottoms and keeps the pastry crisp around the edges.",

  image: "/images/recipes/spinach-fatayer.webp",

  imageAlt:
    "Large golden Lebanese spinach fatayer shaped like open boats and filled with a vibrant spinach, onion, herb, lemon, and sumac filling.",

  cuisine: "Lebanese",

  category: "mezze",

  prepTime: "35 mins",

  cookTime: "25 mins",

  totalTime: "1 hr 60 mins",

  servings: 12,

  difficulty: "Medium",

  vegetarian: true,

  vegan: true,

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "whole wheat flour",
    },
    {
      amount: 1,
      unit: "cup",
      name: "all-purpose flour",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "instant yeast",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sugar",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 1,
      unit: "cup",
      name: "warm water",
      note: "Use warm, not hot, water so the yeast remains active.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 4,
      unit: "cups",
      name: "fresh spinach",
      note: "Finely chop before mixing and squeeze thoroughly after combining with the filling ingredients.",
    },
    {
      amount: 1,
      unit: "",
      name: "medium onion",
      note: "Finely dice so the onion cooks fully inside the pastry.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "chopped parsley",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh mint",
      note: "Chop finely for even distribution through the filling.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "ground sumac",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground black pepper",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "ground allspice",
    },
  ],

  instructions: [
    "Combine the whole wheat flour, all-purpose flour, instant yeast, sugar, and sea salt in a large mixing bowl.",
    "Add the warm water and extra virgin olive oil gradually, mixing until a soft dough forms. The dough should feel supple and slightly tacky but should not be wet or sticky.",
    "Knead the dough for about 7–10 minutes until smooth and elastic. If it feels unusually sticky, add a very small amount of flour at a time rather than adding a large amount at once.",
    "Cover the dough and let it rise in a warm, draft-free place for about 1 hour, or until it has visibly expanded and feels light and airy.",
    "While the dough rises, finely chop the spinach and combine it with the diced onion, parsley, mint, lemon juice, sumac, black pepper, and allspice.",
    "Gently mix the spinach filling, then squeeze it thoroughly with clean hands to remove excess liquid. The filling should be moist and flavorful but not dripping wet. This step is essential for preventing soggy fatayer.",
    "Preheat the oven to 400°F (200°C) and line a large baking tray with parchment paper.",
    "Divide the risen dough into 12 equal portions. Shape each portion into a ball, cover them loosely, and let them rest for about 10 minutes so the dough relaxes and rolls out more easily.",
    "Roll each dough ball into a relatively large oval, keeping the center slightly thicker than the outer edges. Avoid rolling the dough paper-thin because the larger boat shape needs enough structure to hold the filling.",
    "Place about 2 tablespoons of the spinach mixture lengthwise along the center of each oval, leaving a clear border around the filling.",
    "Bring the two long sides of the dough upward around the filling and pinch the dough firmly at both ends to create a large open boat shape. Leave the center of the spinach filling exposed rather than closing the pastry completely.",
    "Arrange the shaped fatayer on the parchment-lined tray with space between them. If the dough springs back while shaping, let it rest for a few minutes before continuing rather than forcing it.",
    "Bake for about 20–25 minutes, or until the dough is golden brown around the edges and underneath and the exposed spinach filling looks cooked and slightly softened.",
    "Remove the fatayer from the oven and allow them to rest for a few minutes before serving. They can be enjoyed warm or at room temperature.",
  ],

  nutrition: {
    calories: 185,
    protein: "6 g",
    carbs: "31 g",
    fat: "4 g",
    fiber: "4 g",
    sugar: "2 g",
    sodium: "210 mg",
  },

  healthBenefits: [
    "Provides iron and other micronutrients from spinach",
    "Rich in vitamins A, C, and K from leafy greens and fresh herbs",
    "Provides dietary fiber from spinach and whole wheat flour",
    "Uses extra virgin olive oil as the primary added fat",
    "Provides plant-based nutrients without meat or dairy",
    "Baking keeps the pastries lighter than deep-fried alternatives",
    "Fits well within a Mediterranean-style eating pattern",
  ],

  keywords: [
    "Spinach Fatayer",
    "Lebanese Spinach Fatayer",
    "Lebanese Spinach Pies",
    "Boat Shaped Fatayer",
    "Healthy Fatayer",
    "Mediterranean Appetizer",
    "Lebanese Mezze",
  ],

  tags: [
    "mezze",
    "Lebanese",
    "fatayer",
    "spinach",
    "vegetarian",
    "vegan",
    "baked",
    "healthy",
    "Mediterranean",
  ],

  featured: true,
};
