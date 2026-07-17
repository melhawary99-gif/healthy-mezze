import { Recipe } from "@/types/recipe";

export const authenticWhiteCoffee: Recipe = {
  id: 89,

  title: "Authentic Lebanese White Coffee (Ahweh Baida)",

  slug: "authentic-white-coffee",

  description:
    "A traditional Lebanese caffeine-free drink made with hot water, orange blossom water, and a touch of honey.",

  longDescription:
    "Ahweh Baida, or Lebanese White Coffee, is a fragrant, caffeine-free beverage traditionally served after meals or offered to guests as a symbol of hospitality. Although its name translates to 'white coffee,' it contains no coffee beans. Instead, hot water is delicately flavored with orange blossom water and lightly sweetened with honey, creating a soothing drink that is both elegant and refreshing.",

  image: "/images/recipes/authentic-white-coffee.jpg",

  imageAlt:
    "A traditional glass of Lebanese White Coffee garnished with orange blossoms and served on a decorative tray.",

  cuisine: "Lebanese",

  category: "Drinks",

  prepTime: "2 mins",

  cookTime: "3 mins",

  totalTime: "5 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
    "2 cups water",
    "2 tsp orange blossom water",
    "2 tsp honey (optional)",
    "Orange blossom petals for garnish (optional)"
  ],

  instructions: [
    "Bring the water to a gentle boil.",
    "Remove from the heat.",
    "Stir in the orange blossom water.",
    "Add the honey if using and stir until dissolved.",
    "Pour into small heatproof glasses or cups.",
    "Garnish with edible orange blossom petals if desired.",
    "Serve immediately while hot."
  ],

  nutrition: {
    calories: 21,
    protein: "0 g",
    carbs: "6 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "6 g",
    sodium: "5 mg"
  },

  healthBenefits: [
    "Naturally caffeine-free",
    "Hydrating and soothing",
    "Orange blossom water provides a delicate floral aroma",
    "Contains no dairy",
    "Very low in calories",
    "Traditionally enjoyed after meals",
    "A calming beverage for any time of day"
  ],

  keywords: [
    "White Coffee",
    "Ahweh Baida",
    "Lebanese White Coffee",
    "Orange Blossom Drink",
    "Traditional Lebanese Beverage"
  ],

  tags: [
    "drink",
    "Lebanese",
    "white coffee",
    "orange blossom",
    "traditional",
    "caffeine-free",
    "healthy",
    "vegan"
  ],

  featured: true
};