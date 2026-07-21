import { Recipe } from "@/types/recipe";

export const classicTahiniSauce: Recipe = {
  id: 93,

  title: "Classic Tahini Sauce",

  slug: "classic-tahini-sauce",

  description:
    "A creamy Middle Eastern sauce made with tahini, fresh lemon juice, garlic, parsley, and olive oil.",

  longDescription:
    "Tahini sauce is a staple throughout the Middle East and is traditionally served with falafel, shawarma, grilled fish, kebabs, roasted vegetables, and fresh salads. Made from sesame tahini blended with lemon juice, garlic, parsley, and water, this healthy version is rich in healthy fats, minerals, and authentic Mediterranean flavor while remaining naturally vegan and dairy-free.",

  image: "/images/recipes/classic-tahini-sauce.jpg",

  imageAlt:
    "A bowl of creamy tahini sauce garnished with parsley, sesame seeds, olive oil, garlic, and lemon wedges.",

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
    amount: 0.25,
    unit: "cup",
    name: "fresh lemon juice"
  },
{
    amount: 2,
    unit: "garlic",
    name: "cloves, finely minced"
  },
{
    amount: 1,
    unit: "",
    name: "3–5 tbsp cold water"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh parsley, finely chopped"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "ground cumin (optional)"
  }
],

instructions: [
    "Add the tahini to a medium mixing bowl.",
    "Whisk in the lemon juice until the mixture thickens.",
    "Add the minced garlic and sea salt.",
    "Gradually whisk in the cold water until the sauce becomes smooth and creamy.",
    "Stir in the olive oil, parsley, and cumin if using.",
    "Taste and adjust the lemon juice or salt if needed.",
    "Serve immediately or refrigerate in an airtight container for up to 5 days."
  ],

  nutrition: {
    calories: 95,
    protein: "3 g",
    carbs: "3 g",
    fat: "8 g",
    fiber: "2 g",
    sugar: "0 g",
    sodium: "120 mg"
  },

  healthBenefits: [
    "Rich in heart-healthy unsaturated fats",
    "Excellent source of calcium",
    "Provides plant-based protein",
    "Naturally vegan and dairy-free",
    "Contains antioxidants from sesame seeds",
    "Garlic contributes beneficial plant compounds",
    "Pairs well with vegetables and lean proteins"
  ],

  keywords: [
    "Tahini Sauce",
    "Lebanese Tahini",
    "Middle Eastern Sauce",
    "Healthy Tahini",
    "Sesame Sauce"
  ],

  tags: [
    "dip",
    "sauce",
    "tahini",
    "Lebanese",
    "vegan",
    "healthy",
    "sesame",
    "mezze"
  ],

  featured: true
};