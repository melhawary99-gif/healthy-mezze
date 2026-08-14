import { Recipe } from "@/types/recipe";

export const authenticEgyptianKarkade: Recipe = {
  id: 84,

  title: "Authentic Egyptian Karkade (Hibiscus Tea)",

  slug: "authentic-egyptian-karkade",

  description:
    "A vibrant traditional Egyptian hibiscus drink made by steeping dried hibiscus flowers, then balancing its naturally tart flavor with honey and optional fresh lemon. Serve it hot or chilled over ice.",

  longDescription:
    "Karkade, also called hibiscus tea, is one of Egypt's best-known traditional beverages. Made from dried hibiscus calyces, it develops a naturally deep ruby-red color and a pleasantly tart, fruity flavor. It is enjoyed both hot and cold, with chilled Karkade being especially refreshing in warm weather and a familiar choice at Ramadan gatherings and celebrations. The flowers are steeped in hot water to extract their color and flavor, then the drink is strained and sweetened according to taste. This version uses honey instead of refined sugar and keeps the lemon optional so the cook can decide how much additional acidity is appropriate. For the best flavor, avoid excessively long or aggressive cooking, which can make the hibiscus taste overly sharp. The finished drink should be bright, fragrant, tart, and balanced rather than harsh.",

  image: "/images/recipes/authentic-egyptian-karkade.webp",

  imageAlt:
    "A ruby-red glass of traditional Egyptian Karkade served over ice with lemon slices, fresh mint, and dried hibiscus flowers.",

  cuisine: "Egyptian",

  category: "drinks",

  prepTime: "5 mins",

  cookTime: "10 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 0.5,
      unit: "cup",
      name: "dried hibiscus flowers",
      note:
        "Use food-grade dried hibiscus calyces intended for tea. Remove any visible stems or unwanted debris before brewing.",
    },
    {
      amount: 4,
      unit: "cups",
      name: "water",
      note:
        "Use fresh drinking water. Filtered water can give the finished drink a cleaner flavor if your tap water has a strong taste.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "honey",
      note:
        "Start with less if you prefer a tart drink. Sweetness is easiest to adjust after the hibiscus has been strained.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice",
      note:
        "Optional. Add gradually because Karkade is naturally tart and may already have enough acidity for your taste.",
    },
    {
      amount: 1,
      unit: "",
      name: "Ice cubes",
      note:
        "Use for the chilled version. For a stronger iced drink, chill the Karkade first so the ice does not dilute it as quickly.",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon slices for garnish",
      note:
        "Optional and mainly for presentation and an additional fresh citrus aroma.",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh mint leaves",
      note:
        "Optional. Add just before serving for a fresh herbal aroma.",
    },
  ],

  instructions: [
    "Sort through the dried hibiscus flowers and remove any visible stems or debris. Quickly rinse them if needed, then drain well.",
    "Bring the water to a boil in a medium saucepan.",
    "Remove the saucepan from the heat and add the dried hibiscus flowers.",
    "Cover the saucepan and steep for about 10 minutes, until the water becomes a deep ruby-red color and the hibiscus aroma is pronounced.",
    "Taste a small amount before sweetening. If the flavor is already intensely tart, do not continue steeping; strain the flowers immediately.",
    "Strain the Karkade through a fine-mesh sieve into a heatproof pitcher or clean saucepan. Press the flowers gently to extract liquid, but avoid excessive squeezing if it makes the drink taste too sharp.",
    "While the tea is still warm, stir in the honey until completely dissolved. Start with part of the honey and add more gradually according to taste.",
    "Stir in the fresh lemon juice if using. Add it gradually because Karkade already has a naturally tart character.",
    "For hot Karkade, pour into heatproof glasses and serve warm. For cold Karkade, allow it to cool and refrigerate until thoroughly chilled.",
    "For iced Karkade, fill serving glasses with ice, pour over the chilled drink, and garnish with lemon slices and fresh mint if desired.",
  ],

  nutrition: {
    calories: 38,
    protein: "0 g",
    carbs: "10 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "9 g",
    sodium: "5 mg",
  },

  healthBenefits: [
    "Hibiscus naturally contains antioxidant plant compounds.",
    "Naturally caffeine-free when prepared from hibiscus flowers alone.",
    "Provides a refreshing way to increase fluid intake.",
    "Fresh lemon adds vitamin C and bright citrus flavor when used.",
    "Using a measured amount of honey allows the sweetness to be controlled at home.",
    "Can be enjoyed hot or chilled depending on the season and occasion.",
    "The naturally tart flavor can provide a refreshing alternative to heavily sweetened soft drinks.",
  ],

  keywords: [
    "Karkade",
    "Karkady",
    "Egyptian Hibiscus Tea",
    "Egyptian Hibiscus Drink",
    "Healthy Hibiscus Drink",
    "Traditional Egyptian Beverage",
    "Ramadan Drink",
    "Hibiscus Tea",
  ],

  tags: [
    "drink",
    "Egyptian",
    "hibiscus",
    "karkade",
    "healthy",
    "tea",
    "Ramadan",
    "vegetarian",
    "caffeine-free",
    "hot drink",
    "cold drink",
  ],

  featured: true,
};
