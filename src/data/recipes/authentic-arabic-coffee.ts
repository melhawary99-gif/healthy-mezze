import { Recipe } from "@/types/recipe";

export const authenticArabicCoffee: Recipe = {
  datePublished: "2026-07-17",
  id: 89,

  title: "Authentic Arabic Coffee (Ahwa)",

  slug: "authentic-arabic-coffee",

  description:
    "A traditional Arabic coffee brewed with lightly roasted coffee and fragrant cardamom, served warm in small finjan cups.",

  longDescription:
    "Arabic coffee, commonly known as Ahwa in parts of the Middle East, is much more than a drink: it is closely associated with hospitality, welcoming guests, and sharing time together. This simple preparation combines lightly roasted, finely ground Arabic coffee with fragrant cardamom and water, producing a delicate, aromatic cup that is traditionally served without milk. Regional methods and spice combinations vary across the Middle East, but cardamom remains a familiar flavor in many versions. Serve the coffee in small finjan cups and offer dates alongside it for a traditional hospitality-inspired presentation.",

  image: "/images/recipes/authentic-arabic-coffee.webp",

  imageAlt:
    "Traditional Arabic coffee served in a dallah with small finjan cups, cardamom, and dates.",

  cuisine: "Lebanese",

  category: "drinks",

  prepTime: "5 mins",

  cookTime: "10 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 4,
      unit: "cups",
      name: "water",
      note: "Use fresh drinking water for the cleanest flavor.",
    },
    {
      amount: 4,
      unit: "tbsp",
      name: "finely ground Arabic coffee",
      note: "Lightly roasted Arabic-style coffee works best for the traditional flavor and appearance.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "freshly ground cardamom",
      note: "Adjust slightly according to how strongly you want the cardamom aroma.",
    },
    {
      amount: 2,
      unit: "whole",
      name: "cardamom pods",
      note: "Optional. Lightly crush the pods before adding them for a stronger cardamom aroma.",
    },
    {
      amount: 4,
      unit: "",
      name: "fresh dates",
      note: "Optional. Serve alongside the coffee as a traditional accompaniment.",
    },
  ],

  instructions: [
    "Pour the water into a dallah or small saucepan and bring it to a gentle boil.",
    "Reduce the heat to low so the water remains hot without boiling aggressively.",
    "Add the finely ground Arabic coffee and stir gently to distribute the grounds.",
    "Allow the coffee to simmer gently for about 8–10 minutes. Avoid vigorous boiling, which can make the coffee taste harsh and cause excessive grounds to remain suspended.",
    "Add the freshly ground cardamom during the final 1–2 minutes of simmering. Add the lightly crushed cardamom pods at the same stage if using them.",
    "Remove the coffee from the heat and allow it to rest for 1–2 minutes so the grounds can settle toward the bottom.",
    "If using a saucepan, carefully pour the coffee through the spout of a serving pot or a fine coffee strainer if needed. When pouring directly into finjan cups, pour slowly and leave the settled grounds behind.",
    "Serve the coffee warm in small finjan cups rather than large mugs. Offer fresh dates alongside the coffee if desired.",
  ],

  nutrition: {
    calories: 2,
    protein: "0 g",
    carbs: "0 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "0 g",
    sodium: "5 mg",
  },

  healthBenefits: [
    "Naturally very low in calories when served without sugar, milk, or cream.",
    "Coffee naturally contains antioxidant compounds.",
    "Cardamom provides aromatic plant compounds and adds flavor without requiring added sugar.",
    "Naturally dairy-free when prepared without milk.",
    "Traditional preparation is commonly served without added sweeteners.",
    "The caffeine in coffee can temporarily increase alertness and help reduce feelings of tiredness.",
    "Its traditional serving style makes it closely connected with hospitality and social sharing across many Middle Eastern communities.",
  ],

  keywords: [
    "Arabic Coffee",
    "Authentic Arabic Coffee",
    "Ahwa",
    "Lebanese Coffee",
    "Middle Eastern Coffee",
    "Cardamom Coffee",
    "Traditional Arabic Coffee",
    "Arabic Coffee Recipe",
    "Coffee with Cardamom",
  ],

  tags: [
    "drink",
    "coffee",
    "Arabic",
    "Lebanese",
    "traditional",
    "cardamom",
    "Middle Eastern",
    "dairy-free",
    "hospitality",
  ],

  featured: true,
};
