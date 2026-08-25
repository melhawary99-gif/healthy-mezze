import { Recipe } from "@/types/recipe";

export const makdous: Recipe = {
  id: 72,

  title: "Makdous (Stuffed Baby Eggplants)",

  slug: "makdous",

  description:
    "Tender baby eggplants stuffed with walnuts, garlic, parsley, and pomegranate molasses for a healthy Lebanese mezze packed with rich Mediterranean flavor.",

  longDescription:
    "Makdous is one of the Levant's most beloved traditional preserves and mezze dishes, especially cherished in Lebanese homes. Baby eggplants are gently cooked until tender, cooled, opened with a lengthwise slit, and filled with a savory mixture of walnuts, garlic, parsley, Aleppo pepper, and pomegranate molasses. This lighter version uses a modest amount of extra virgin olive oil while preserving the characteristic sweet, tangy, nutty, and garlicky flavor of traditional Makdous. Served chilled or cool as part of a mezze spread, it pairs naturally with whole wheat pita, hummus, olives, fresh vegetables, and other Lebanese dishes.",

  image: "/images/recipes/makdous.webp",

  imageAlt:
    "Tender Lebanese makdous made with stuffed baby eggplants, walnuts, garlic, parsley, and pomegranate molasses, garnished with fresh parsley and walnuts.",

  cuisine: "Lebanese",

  category: "mezze",

  prepTime: "30 mins",

  cookTime: "20 mins",

  totalTime: "50 mins",

  servings: 6,

  difficulty: "Medium",

  vegetarian: true,

  vegan: true,

  ingredients: [
    {
      amount: 12,
      unit: "",
      name: "baby eggplants",
      note: "Choose small, firm eggplants of similar size so they cook evenly; trim only the stems.",
    },
    {
      amount: 1,
      unit: "cup",
      name: "walnuts, finely chopped",
      note: "Chop finely enough to make the filling easy to pack into the eggplants while retaining some texture.",
    },
    {
      amount: 3,
      unit: "garlic",
      name: "cloves, minced",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh parsley, finely chopped",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "pomegranate molasses",
      note: "Adds the characteristic sweet-tangy flavor; adjust only after tasting the filling if your molasses is particularly tart.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "Aleppo pepper or mild chili flakes",
      note: "Use Aleppo pepper for a more traditional Levantine flavor, or mild chili flakes for a substitute.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 1,
      unit: "",
      name: "extra parsley for garnish",
    },
  ],

  instructions: [
    "Trim the stems from the baby eggplants while keeping the tops intact. Rinse them well and place them in a large pot.",
    "Cover the eggplants with water and bring to a gentle boil. Cook for 15–20 minutes, checking frequently, until they are tender enough to pierce easily but still hold their shape.",
    "Drain the eggplants thoroughly and allow them to cool completely. Handle them gently because overcooked eggplants can split or become difficult to stuff.",
    "Once cool, make one lengthwise slit in each eggplant without cutting completely through the opposite side. The opening should be large enough to hold the walnut filling while keeping the eggplant intact.",
    "Prepare the filling by combining the finely chopped walnuts, minced garlic, parsley, cumin, Aleppo pepper, sea salt, black pepper, olive oil, and pomegranate molasses. Mix until evenly combined.",
    "Gently open each eggplant and generously fill the cavity with the walnut mixture. Do not force the filling into the eggplant, as excessive pressure can tear the softened skin.",
    "Arrange the stuffed eggplants on a serving platter with the filled openings facing upward so the walnut mixture remains visible.",
    "If desired, drizzle the stuffed eggplants very lightly with additional extra virgin olive oil. Avoid adding too much oil because the walnut filling already provides natural richness.",
    "Cover and chill for at least one hour before serving. Chilling allows the flavors to settle and gives the eggplants a firmer, more cohesive texture.",
    "Before serving, garnish with finely chopped fresh parsley and additional walnuts. Serve chilled or cool as part of a Lebanese mezze spread.",
  ],

  nutrition: {
    calories: 190,
    protein: "5 g",
    carbs: "11 g",
    fat: "15 g",
    fiber: "5 g",
    sugar: "4 g",
    sodium: "170 mg",
  },

  healthBenefits: [
    "Rich in heart-healthy omega-3 fats from walnuts",
    "Excellent source of dietary fiber",
    "Eggplants provide antioxidants including nasunin",
    "Garlic supports immune health",
    "Olive oil supplies healthy monounsaturated fats",
    "Contains beneficial plant polyphenols",
    "Mediterranean diet friendly",
  ],

  keywords: [
    "Makdous",
    "Stuffed Eggplant",
    "Lebanese Mezze",
    "Mediterranean Appetizer",
    "Healthy Makdous",
  ],

  tags: [
    "mezze",
    "Lebanese",
    "eggplant",
    "walnuts",
    "vegetarian",
    "vegan",
    "healthy",
    "Mediterranean",
    "appetizer",
  ],

  featured: true,
};
