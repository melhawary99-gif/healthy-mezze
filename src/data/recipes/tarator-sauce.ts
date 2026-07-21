import { Recipe } from "@/types/recipe";

export const taratorSauce: Recipe = {
  id: 98,

  title: "Tarator Sauce",

  slug: "tarator-sauce",

  description:
    "A classic Lebanese tahini sauce made with garlic, lemon juice, parsley, and sesame tahini. Perfect for seafood, falafel, shawarma, and grilled vegetables.",

  longDescription:
    "Tarator is one of Lebanon's most iconic sauces. Unlike a basic tahini sauce, Tarator has a brighter lemon flavor, a lighter consistency, and is traditionally served with grilled fish, fried seafood, falafel, shawarma, roasted cauliflower, and many mezze dishes. This authentic recipe uses fresh lemon juice, garlic, parsley, and creamy sesame tahini to create a smooth, versatile sauce that's naturally vegan and rich in Mediterranean flavor.",

  image: "/images/recipes/tarator-sauce.webp",

  imageAlt:
    "A bowl of Lebanese Tarator sauce garnished with parsley, sesame seeds, garlic, lemon wedges, and olive oil.",

  cuisine: "Lebanese",

  category: "Dips & Sauces",

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 8,

  difficulty: "Easy",

  ingredients: [
{
    amount: 0.5,
    unit: "cup",
    name: "tahini"
  },
{
    amount: 0.3333333333333333,
    unit: "cup",
    name: "fresh lemon juice"
  },
{
    amount: 2,
    unit: "garlic",
    name: "cloves, crushed"
  },
{
    amount: 1,
    unit: "",
    name: "4–6 tbsp ice-cold water"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh parsley"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "white pepper"
  }
],

instructions: [
    "Whisk the tahini and lemon juice together until the mixture thickens.",
    "Add the crushed garlic and sea salt.",
    "Gradually whisk in the cold water until the sauce becomes smooth and pourable.",
    "Stir in the parsley, olive oil, and white pepper.",
    "Taste and adjust the seasoning or lemon juice if needed.",
    "Allow the sauce to rest for 10 minutes before serving.",
    "Serve with grilled fish, seafood, falafel, shawarma, roasted vegetables, or kebabs."
  ],

  nutrition: {
    calories: 90,
    protein: "3 g",
    carbs: "3 g",
    fat: "8 g",
    fiber: "2 g",
    sugar: "0 g",
    sodium: "125 mg"
  },

  healthBenefits: [
    "Rich in healthy unsaturated fats",
    "Provides plant-based protein",
    "Excellent source of calcium",
    "Naturally vegan and dairy-free",
    "Garlic contains beneficial antioxidants",
    "Fresh lemon juice provides vitamin C",
    "Made without preservatives"
  ],

  

  keywords: [
    "Tarator Sauce",
    "Lebanese Tarator",
    "Tahini Garlic Sauce",
    "Fish Tahini Sauce",
    "Middle Eastern Sauce"
  ],

  tags: [
    "dip",
    "sauce",
    "Lebanese",
    "tahini",
    "garlic",
    "vegan",
    "healthy",
    "mezze"
  ],

  featured: true
};