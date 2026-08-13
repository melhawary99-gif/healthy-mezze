import { Recipe } from "@/types/recipe";

export const authenticCarobJuice: Recipe = {
  id: 92,

  title: "Authentic Egyptian Carob Juice (Kharoub)",

  slug: "authentic-carob-juice",

  description:
    "A traditional Egyptian carob drink made by simmering roasted carob pods with water, then chilling the naturally sweet, deep caramel-like beverage.",

  longDescription:
    "Kharoub, or Egyptian Carob Juice, is a traditional drink made from roasted carob pods and enjoyed especially during Ramadan and warm weather. The roasted pods give the drink a naturally sweet, deep caramel-like flavor with a distinctive toasted aroma, while the simple preparation keeps the character of the carob at the center. This version uses only a small amount of optional honey for additional sweetness and orange blossom water for a subtle floral note. Served thoroughly chilled over ice and finished with fresh mint and lemon, Kharoub makes a refreshing traditional Egyptian beverage for family meals, Ramadan gatherings, and everyday summer serving.",

  image: "/images/recipes/authentic-carob-juice.webp",

  imageAlt:
    "Traditional Egyptian carob juice served chilled over ice with roasted carob pods, fresh mint, and lemon.",

  cuisine: "Egyptian",

  category: "drinks",

  prepTime: "10 mins",

  cookTime: "25 mins",

  totalTime: "35 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "cup",
      name: "roasted carob pods",
      note: "Roughly broken into smaller pieces so their flavor can infuse into the water more easily.",
    },
    {
      amount: 6,
      unit: "cups",
      name: "water",
      note: "Use fresh drinking water. Keep a little extra available in case you want to adjust the concentration after straining.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "honey",
      note: "Optional. Carob is naturally sweet, so taste the strained drink before adding honey.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "orange blossom water",
      note: "Optional. Add a small amount after straining for a subtle floral aroma.",
    },
    {
      amount: 1,
      unit: "",
      name: "ice cubes",
      note: "For serving. Chill the juice thoroughly before pouring it over ice.",
    },
    {
      amount: 1,
      unit: "",
      name: "fresh mint leaves",
      note: "For garnish. Add just before serving.",
    },
    {
      amount: 1,
      unit: "",
      name: "lemon slices",
      note: "For garnish. Thin slices add a fresh citrus aroma and attractive presentation.",
    },
  ],

  instructions: [
    "Rinse the roasted carob pods thoroughly under cool running water to remove any loose dust or particles. Drain well.",
    "Break the carob pods into smaller pieces if they are large. Smaller pieces expose more surface area to the water and help release their roasted flavor.",
    "Place the broken carob pods and water in a medium saucepan.",
    "Bring the mixture to a boil over medium-high heat, watching carefully as it comes up to temperature.",
    "Once boiling, reduce the heat to low and simmer gently for 20–25 minutes. The liquid should become noticeably darker and develop a rich roasted aroma.",
    "Remove the saucepan from the heat and allow the mixture to cool slightly before straining.",
    "Pour the mixture through a fine-mesh sieve into a large heatproof container. Press the softened carob pieces gently with the back of a spoon to extract the remaining liquid without forcing excessive solids through the sieve.",
    "Taste the strained carob juice while it is still slightly warm. If you want it sweeter, stir in the optional honey until completely dissolved.",
    "Add the optional orange blossom water and stir gently. Start with the listed amount because too much can overpower the roasted carob flavor.",
    "Allow the juice to cool to room temperature, then cover and refrigerate until thoroughly chilled.",
    "Taste again once chilled. If the flavor is stronger than you prefer, add a little cold water; if it needs more sweetness, add a small amount of honey and stir well.",
    "Serve over ice and garnish with fresh mint leaves and thin lemon slices. Serve immediately while cold.",
  ],

  nutrition: {
    calories: 42,
    protein: "0 g",
    carbs: "11 g",
    fat: "0 g",
    fiber: "2 g",
    sugar: "8 g",
    sodium: "12 mg",
  },

  healthBenefits: [
    "Naturally caffeine-free, making it a useful alternative to caffeinated beverages.",
    "Carob contains naturally occurring plant compounds with antioxidant activity.",
    "Carob contributes dietary fiber and naturally occurring carbohydrates.",
    "The recipe can rely largely on the natural sweetness of roasted carob, with honey kept optional.",
    "Provides fluid and is naturally refreshing when served well chilled.",
    "Using a small amount of optional honey can reduce the need for heavily sweetened preparation.",
    "The traditional drink fits naturally into Ramadan meals and warm-weather family gatherings.",
  ],

  keywords: [
    "Egyptian Carob Juice",
    "Carob Juice",
    "Kharoub",
    "Kharob",
    "Egyptian Kharoub",
    "Traditional Egyptian Drink",
    "Egyptian Ramadan Drink",
    "Middle Eastern Carob Drink",
    "Carob Beverage",
    "Caffeine-Free Drink",
  ],

  tags: [
    "drink",
    "Egyptian",
    "carob",
    "kharoub",
    "Ramadan",
    "traditional",
    "healthy",
    "caffeine-free",
    "Middle Eastern",
  ],

  featured: true,
};
