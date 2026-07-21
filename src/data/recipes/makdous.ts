import { Recipe } from "@/types/recipe";

export const makdous: Recipe = {
  id: 70,

  title: "Makdous (Stuffed Baby Eggplants)",

  slug: "makdous",

  description:
    "Tender baby eggplants stuffed with walnuts, garlic, parsley, and pomegranate molasses for a healthy Lebanese mezze packed with Mediterranean flavor.",

  longDescription:
    "Makdous is one of the Levant's most beloved traditional dishes and is especially popular in Lebanese homes. Baby eggplants are gently cooked until tender, then stuffed with a flavorful mixture of walnuts, garlic, parsley, chili flakes, and pomegranate molasses before being lightly marinated in extra virgin olive oil. This healthier version uses less oil while preserving the authentic sweet, tangy, and nutty flavors that make Makdous a staple of the Mediterranean diet.",

  image: "/images/recipes/makdous.jpg",

  imageAlt:
    "Stuffed baby eggplants filled with walnuts, garlic, parsley, and pomegranate molasses, garnished with parsley and walnuts.",

  cuisine: "Lebanese",

  category: "Mezze",

  prepTime: "30 mins",

  cookTime: "20 mins",

  totalTime: "50 mins",

  servings: 6,

  difficulty: "Medium",

  ingredients: [
{
    amount: 12,
    unit: "baby",
    name: "eggplants"
  },
{
    amount: 1,
    unit: "cup",
    name: "walnuts, finely chopped"
  },
{
    amount: 3,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "fresh parsley, finely chopped"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "pomegranate molasses"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "Aleppo pepper or mild chili flakes"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 1,
    unit: "",
    name: "Extra parsley for garnish"
  }
],

instructions: [
    "Trim the stems of the baby eggplants, leaving the tops intact.",
    "Boil the eggplants for 15–20 minutes until just tender.",
    "Drain well and allow them to cool completely.",
    "Make a lengthwise slit in each eggplant without cutting all the way through.",
    "Combine the walnuts, garlic, parsley, cumin, Aleppo pepper, salt, black pepper, olive oil, and pomegranate molasses.",
    "Stuff each eggplant generously with the walnut mixture.",
    "Arrange on a serving platter.",
    "Drizzle lightly with a little extra virgin olive oil if desired.",
    "Chill for at least one hour before serving.",
    "Garnish with chopped parsley and additional walnuts."
  ],

  nutrition: {
    calories: 190,
    protein: "5 g",
    carbs: "11 g",
    fat: "15 g",
    fiber: "5 g",
    sugar: "4 g",
    sodium: "170 mg"
  },

  healthBenefits: [
    "Rich in heart-healthy omega-3 fats from walnuts",
    "Excellent source of dietary fiber",
    "Eggplants provide antioxidants including nasunin",
    "Garlic supports immune health",
    "Olive oil supplies healthy monounsaturated fats",
    "Contains beneficial plant polyphenols",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Makdous",
    "Stuffed Eggplant",
    "Lebanese Mezze",
    "Mediterranean Appetizer",
    "Healthy Makdous"
  ],

  tags: [
    "mezze",
    "Lebanese",
    "eggplant",
    "walnuts",
    "vegetarian",
    "healthy",
    "Mediterranean",
    "appetizer"
  ],

  featured: true
};