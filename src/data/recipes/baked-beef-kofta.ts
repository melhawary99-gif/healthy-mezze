import { Recipe } from "@/types/recipe";

export const bakedBeefKofta: Recipe = {
  id: 23,

  title: "Baked Beef Kofta",

  slug: "baked-beef-kofta",

  description:
    "Juicy Middle Eastern beef kofta made with fresh herbs, onions, garlic, and aromatic spices, baked until perfectly tender.",

  longDescription:
    "Baked Beef Kofta is a classic Egyptian and Lebanese dish featuring lean ground beef combined with parsley, onions, garlic, and warm Mediterranean spices. Baking creates juicy, flavorful kofta with less oil than frying, making it a healthier option. Serve alongside rice, roasted vegetables, hummus, tahini sauce, or warm pita bread for a complete Mediterranean meal.",

  image: "/images/recipes/baked-beef-kofta.jpg",

  imageAlt:
    "Baked beef kofta served with parsley, grilled vegetables, tahini sauce, and warm pita bread.",

  cuisine: "Lebanese",

  category: "Main Dishes",

  prepTime: "20 mins",

  cookTime: "25 mins",

  totalTime: "45 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "kg",
    name: "lean ground beef (90% lean)"
  },
{
    amount: 1,
    unit: "medium",
    name: "onion, finely grated"
  },
{
    amount: 4,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 0.5,
    unit: "cup",
    name: "fresh parsley, finely chopped"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh mint, chopped (optional)"
  },
{
    amount: 2,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 2,
    unit: "tsp",
    name: "ground coriander"
  },
{
    amount: 1,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground allspice"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "ground cinnamon"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil"
  }
],

instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Line a baking tray with parchment paper or lightly grease it.",
    "Combine all ingredients in a large mixing bowl.",
    "Mix gently until evenly combined without overworking the meat.",
    "Shape into oval kofta logs or long cylinders.",
    "Arrange evenly on the prepared baking tray.",
    "Brush lightly with olive oil.",
    "Bake for 20–25 minutes until cooked through and browned.",
    "For extra color, broil for the final 2–3 minutes if desired.",
    "Serve hot with tahini sauce, rice, salad, or warm pita bread."
  ],

  nutrition: {
    calories: 340,
    protein: "31 g",
    carbs: "5 g",
    fat: "22 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "560 mg"
  },

  healthBenefits: [
    "Excellent source of high-quality protein",
    "Rich in iron and vitamin B12",
    "Contains fresh antioxidant-rich herbs",
    "Baked instead of fried for a lighter meal",
    "Supports muscle growth and maintenance",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Beef Kofta",
    "Baked Kofta",
    "Lebanese Kofta",
    "Egyptian Kofta",
    "Healthy Beef Recipe"
  ],

  tags: [
    "main dish",
    "beef",
    "kofta",
    "Lebanese",
    "Egyptian",
    "baked",
    "high protein",
    "Mediterranean"
  ],

  featured: true
};