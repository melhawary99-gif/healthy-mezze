import { Recipe } from "@/types/recipe";

export const authenticAmbaSauce: Recipe = {
  id: 99,

  title: "Authentic Amba Sauce",

  slug: "authentic-amba-sauce",

  description:
    "A tangy Middle Eastern mango sauce made with pickled mango, turmeric, fenugreek, garlic, lemon juice, and spices.",

  longDescription:
    "Amba is a traditional Iraqi condiment that has become a favorite throughout the Middle East. Made from pickled mango blended with aromatic spices, garlic, lemon juice, and olive oil, it delivers a unique balance of tangy, savory, and mildly spicy flavors. Traditionally served with shawarma, sabich, falafel, grilled meats, roasted vegetables, and sandwiches, Amba adds vibrant flavor to countless Mediterranean dishes.",

  image: "/images/recipes/authentic-amba-sauce.webp",

  imageAlt:
    "A bowl of authentic Amba sauce garnished with turmeric, fresh cilantro, garlic cloves, and pickled mango slices.",

  cuisine: "Lebanese",

  category: "Dips & Sauces",

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 10,

  difficulty: "Easy",

  ingredients: [
    {
      name: "Pickled mango",
      amount: "1",
      unit: "cup",
    },
    {
      name: "Garlic cloves",
      amount: "2",
      unit: "",
    },
    {
      name: "Fresh lemon juice",
      amount: "2",
      unit: "tbsp",
    },
    {
      name: "Extra virgin olive oil",
      amount: "2",
      unit: "tbsp",
    },
    {
      name: "Water",
      amount: "2",
      unit: "tbsp",
    },
    {
      name: "Ground turmeric",
      amount: "1",
      unit: "tsp",
    },
    {
      name: "Ground fenugreek",
      amount: "1/2",
      unit: "tsp",
    },
    {
      name: "Ground cumin",
      amount: "1/2",
      unit: "tsp",
    },
    {
      name: "Cayenne pepper",
      amount: "1/4",
      unit: "tsp",
    },
    {
      name: "Salt",
      amount: "1/2",
      unit: "tsp",
    },
    {
      name: "Fresh cilantro, chopped",
      amount: "2",
      unit: "tbsp",
    },
  ],

  instructions: [
    "Add the pickled mango, garlic, lemon juice, olive oil, water, turmeric, fenugreek, cumin, cayenne pepper, and salt to a food processor.",
    "Blend until smooth.",
    "Stir in the chopped cilantro.",
    "Taste and adjust the seasoning or lemon juice if needed.",
    "Transfer to an airtight jar.",
    "Refrigerate for at least 30 minutes before serving.",
    "Serve with shawarma, falafel, sabich, grilled meats, roasted vegetables, or sandwiches.",
  ],

  nutrition: {
    calories: 45,
    protein: "0 g",
    carbs: "4 g",
    fat: "3 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "170 mg",
  },

  healthBenefits: [
    "Turmeric provides powerful antioxidant compounds.",
    "Fenugreek contributes beneficial plant nutrients.",
    "Naturally vegan and dairy-free.",
    "Contains heart-healthy fats from extra virgin olive oil.",
    "Garlic provides beneficial sulfur compounds.",
    "Adds bold flavor with very few calories.",
    "Pairs well with vegetables, legumes, and lean proteins.",
  ],

  keywords: [
    "Amba Sauce",
    "Iraqi Mango Sauce",
    "Middle Eastern Condiment",
    "Shawarma Sauce",
    "Pickled Mango Sauce",
  ],

  tags: [
    "dip",
    "sauce",
    "Iraqi",
    "Middle Eastern",
    "mango",
    "vegan",
    "healthy",
    "condiment",
  ],

  featured: true,
};