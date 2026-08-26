import { Recipe } from "@/types/recipe";

export const classicToum: Recipe = {
  id: 94,

  title: "Classic Toum (Lebanese Garlic Sauce)",

  slug: "classic-toum",

  description:
    "A creamy, fluffy Lebanese garlic sauce made with fresh garlic, lemon juice, avocado oil, and aquafaba for a lighter, healthier twist.",

  longDescription:
    "Toum is a classic Lebanese garlic sauce known for its bright garlic flavor, smooth texture, and airy, mayonnaise-like consistency. Traditionally made by emulsifying garlic with oil and lemon juice, this lighter version uses aquafaba to help create a stable, creamy emulsion while using less oil than many traditional recipes. It is naturally vegan and dairy-free and is especially delicious with chicken shawarma, grilled meats, kebabs, roasted vegetables, potatoes, sandwiches, wraps, and warm pita bread.",

  image: "/images/recipes/classic-toum.webp",

  imageAlt:
    "A bowl of fluffy Lebanese toum garnished with parsley and served with garlic cloves, lemon wedges, and warm pita bread.",

  cuisine: "Lebanese",

  category: "dips-sauces",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 12,

  difficulty: "Medium",

  vegan: true,

  vegetarian: true,

  ingredients: [
    {
      amount: 10,
      unit: "garlic",
      name: "cloves, peeled and trimmed",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "aquafaba, chilled",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
    },
    {
      amount: 0.75,
      unit: "cup",
      name: "avocado oil",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "ice-cold water, if needed",
    },
  ],

  instructions: [
    "Add the peeled garlic cloves and sea salt to a food processor. Process until the garlic is very finely minced, scraping down the sides as needed. The garlic should form a smooth, even paste with no large pieces remaining.",
    "Add the chilled aquafaba and process until the garlic mixture becomes smooth and slightly creamy. Scrape down the sides once or twice to make sure everything is evenly blended.",
    "With the food processor running, begin adding the avocado oil very slowly in a thin, steady stream. Do not pour the oil in quickly. A slow addition is essential for creating and maintaining the emulsion.",
    "After incorporating a small amount of oil, add a small splash of the fresh lemon juice. Continue alternating between slow additions of oil and small amounts of lemon juice while the processor runs continuously.",
    "Continue adding the remaining 3/4 cup avocado oil gradually until all the oil has been incorporated. The toum should become noticeably thicker, whiter, fluffier, and creamy as the emulsion develops.",
    "Check the consistency. Proper toum should be thick enough to hold soft peaks and should not look oily or separated. If it becomes excessively thick while blending, add ice-cold water 1 teaspoon at a time and process briefly until the texture becomes smooth again.",
    "Taste the finished toum and adjust only if necessary. If the garlic flavor is very sharp, chilling will mellow it slightly. If the sauce needs more brightness, add a small amount of lemon juice and blend briefly.",
    "Transfer the toum to an airtight container and refrigerate for at least 1 hour before serving. The flavor and texture improve as the sauce chills. Keep refrigerated and use within 5 days.",
  ],

  nutrition: {
    calories: 55,
    protein: "0 g",
    carbs: "1 g",
    fat: "6 g",
    fiber: "0 g",
    sugar: "0 g",
    sodium: "85 mg",
  },

  healthBenefits: [
    "Contains antioxidant-rich garlic",
    "Provides predominantly unsaturated fats from avocado oil",
    "Naturally vegan and dairy-free",
    "Contains no added preservatives",
    "Uses aquafaba to create a creamy texture with less oil than many traditional toum recipes",
    "Pairs well with vegetables and lean protein dishes",
    "A flavorful alternative to heavier creamy sauces",
  ],

  keywords: [
    "Toum",
    "Lebanese Garlic Sauce",
    "Lebanese Toum",
    "Garlic Dip",
    "Middle Eastern Garlic Sauce",
    "Healthy Toum",
    "Vegan Garlic Sauce",
  ],

  tags: [
    "dip",
    "sauce",
    "Lebanese",
    "garlic",
    "vegan",
    "vegetarian",
    "healthy",
    "mezze",
    "condiment",
  ],

  featured: true,
};
