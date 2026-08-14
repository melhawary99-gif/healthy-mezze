import { Recipe } from "@/types/recipe";

export const authenticWhiteCoffee: Recipe = {
  id: 91,

  title: "Authentic Lebanese White Coffee (Ahweh Baida)",

  slug: "authentic-white-coffee",

  description:
    "A delicate traditional Lebanese caffeine-free drink made with hot water and fragrant orange blossom water, lightly sweetened with honey and served warm.",

  longDescription:
    "Ahweh Baida, commonly known as Lebanese White Coffee, is a traditional caffeine-free Lebanese beverage with a name that can be surprising to newcomers because it contains no coffee beans. Instead, hot water is delicately scented with orange blossom water and may be lightly sweetened with honey. It is traditionally offered after meals and to guests as a simple expression of Lebanese hospitality. The secret to a pleasant cup is restraint: orange blossom water is highly aromatic, so it should perfume the water rather than dominate it. This version keeps the preparation simple while providing practical guidance for adjusting the floral intensity and sweetness. Serve it immediately while hot, preferably in small heatproof cups or glasses, with optional edible orange blossom petals for an elegant presentation.",

  image: "/images/recipes/authentic-white-coffee.webp",

  imageAlt:
    "A traditional glass of Lebanese White Coffee garnished with orange blossoms and served on a decorative tray.",

  cuisine: "Lebanese",

  category: "drinks",

  prepTime: "2 mins",

  cookTime: "3 mins",

  totalTime: "5 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "water",
      note:
        "Use fresh drinking water. Filtered water is useful when tap water has a strong taste because this very simple drink has no strong ingredients to hide it.",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "orange blossom water",
      note:
        "Use food-grade orange blossom water intended for culinary use. Different brands vary in strength, so start with less if yours is particularly concentrated.",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "honey (optional)",
      note:
        "Add according to taste. The traditional drink can be enjoyed unsweetened, while a small amount of honey provides gentle sweetness.",
    },
    {
      amount: 1,
      unit: "",
      name: "orange blossom petals for garnish (optional)",
      note:
        "Only use petals that are specifically sold as edible and suitable for food use.",
    },
  ],

  instructions: [
    "Bring the water to a gentle boil in a small saucepan or kettle. The water should be fully heated but does not need to boil vigorously.",
    "Remove the hot water from the heat and allow vigorous bubbling to settle for a few seconds.",
    "Stir in the orange blossom water. Adding it after removing the water from direct heat helps preserve its delicate floral aroma.",
    "Add the honey if using and stir until completely dissolved. Taste and add a little more only if a sweeter drink is desired.",
    "Taste a small spoonful before serving. If the floral aroma is too strong, add a little more hot water; if it is too subtle, add a few drops of orange blossom water.",
    "Pour into small heatproof glasses or cups, leaving enough room to handle them safely.",
    "Garnish with edible orange blossom petals if desired.",
    "Serve immediately while hot, particularly after a meal or when welcoming guests.",
  ],

  nutrition: {
    calories: 21,
    protein: "0 g",
    carbs: "6 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "6 g",
    sodium: "5 mg",
  },

  healthBenefits: [
    "Naturally caffeine-free when prepared with water and orange blossom water.",
    "Provides hydration without coffee or tea caffeine.",
    "Contains no dairy and can easily be prepared as a vegan drink when honey is omitted or replaced.",
    "Very low in calories when served without added sweetener.",
    "Orange blossom water contributes a delicate floral aroma without requiring a large quantity of ingredients.",
    "Can be a lighter alternative to heavily sweetened hot beverages.",
    "Traditionally enjoyed after meals as a simple, aromatic beverage.",
  ],

  keywords: [
    "White Coffee",
    "Ahweh Baida",
    "Ahweh Bayda",
    "Lebanese White Coffee",
    "Lebanese White Coffee Drink",
    "Orange Blossom Drink",
    "Traditional Lebanese Beverage",
    "Caffeine-Free Drink",
  ],

  tags: [
    "drink",
    "Lebanese",
    "white coffee",
    "ahweh baida",
    "orange blossom",
    "traditional",
    "caffeine-free",
    "healthy",
    "vegan",
    "hospitality",
  ],

  featured: true,
};
