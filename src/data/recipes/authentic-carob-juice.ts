import { Recipe } from "@/types/recipe";

export const authenticCarobJuice: Recipe = {
  id: 90,

  title: "Authentic Carob Juice (Kharoub)",

  slug: "authentic-carob-juice",

  description:
    "A traditional Middle Eastern drink made from roasted carob pods, naturally sweet with rich caramel-like flavor and served chilled.",

  longDescription:
    "Kharoub, or Carob Juice, is a beloved beverage enjoyed across Egypt, Lebanon, and much of the Middle East, especially during Ramadan. Roasted carob pods create a naturally sweet, deep caramel-like flavor without caffeine. This healthier version relies primarily on the natural sweetness of carob while using only a small amount of honey if desired, making it a refreshing and wholesome traditional drink.",

  image: "/images/recipes/authentic-carob-juice.jpg",

  imageAlt:
    "A chilled glass of traditional carob juice with ice, roasted carob pods, fresh mint, and lemon slices.",

  cuisine: "Lebanese",

  category: "Drinks",

  prepTime: "10 mins",

  cookTime: "25 mins",

  totalTime: "35 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    "1 cup roasted carob pods, roughly broken into pieces",
    "6 cups water",
    "1 tbsp honey (optional)",
    "1 tsp orange blossom water (optional)",
    "Ice cubes",
    "Fresh mint leaves for garnish",
    "Lemon slices for garnish"
  ],

  instructions: [
    "Rinse the roasted carob pods thoroughly.",
    "Place the carob pods and water into a saucepan.",
    "Bring to a boil over medium-high heat.",
    "Reduce the heat and simmer for 20–25 minutes.",
    "Remove from the heat and allow the mixture to cool slightly.",
    "Strain through a fine-mesh sieve, pressing gently on the pods.",
    "Stir in the honey and orange blossom water if using.",
    "Refrigerate until completely chilled.",
    "Serve over ice.",
    "Garnish with fresh mint leaves and lemon slices."
  ],

  nutrition: {
    calories: 42,
    protein: "0 g",
    carbs: "11 g",
    fat: "0 g",
    fiber: "2 g",
    sugar: "8 g",
    sodium: "12 mg"
  },

  healthBenefits: [
    "Naturally caffeine-free",
    "Rich in antioxidants",
    "Contains dietary fiber from carob",
    "Naturally sweet with minimal added sweetener",
    "Hydrating and refreshing",
    "Lower in calories than many sweetened beverages",
    "Traditionally enjoyed during Ramadan"
  ],

  keywords: [
    "Carob Juice",
    "Kharoub",
    "Lebanese Drink",
    "Egyptian Drink",
    "Traditional Middle Eastern Beverage"
  ],

  tags: [
    "drink",
    "Lebanese",
    "Egyptian",
    "carob",
    "Ramadan",
    "traditional",
    "healthy",
    "vegan"
  ],

  featured: true
};