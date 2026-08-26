import { Recipe } from "@/types/recipe";

export const eggplantParmesanMediterranean: Recipe = {
  id: 103,

  title: "Eggplant Parmesan (Mediterranean Style)",

  slug: "eggplant-parmesan-mediterranean",

  description:
    "Layers of oven-roasted eggplant, homemade tomato sauce, mozzarella, Parmesan cheese, and fresh herbs baked until golden and bubbling.",

  longDescription:
    "This Mediterranean-inspired Eggplant Parmesan replaces deep frying with oven roasting while preserving the rich flavors of the classic dish. Tender roasted eggplant is layered with a light tomato sauce, mozzarella, Parmesan cheese, basil, oregano, garlic, and parsley before being baked until bubbling and lightly browned. The result is a satisfying vegetarian meal that fits beautifully into a Mediterranean-style way of eating.",

  image: "/images/recipes/eggplant-parmesan-mediterranean.webp",

  imageAlt:
    "Mediterranean-style baked eggplant Parmesan layered with tomato sauce, mozzarella, Parmesan cheese, and fresh basil.",

  cuisine: "Lebanese",

  category: "vegetarian",

  vegetarian: true,

  vegan: false,

  prepTime: "25 mins",

  cookTime: "45 mins",

  totalTime: "1 hr 10 mins",

  servings: 6,

  difficulty: "Medium",

  ingredients: [
    {
      amount: 2,
      unit: "",
      name: "large eggplants",
      note: "sliced into 1 cm rounds",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 2,
      unit: "cups",
      name: "tomato sauce",
    },
    {
      amount: 250,
      unit: "g",
      name: "fresh mozzarella",
      note: "sliced",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "grated Parmesan cheese",
    },
    {
      amount: 2,
      unit: "cloves",
      name: "garlic",
      note: "minced",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh basil",
      note: "chopped",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh parsley",
      note: "chopped",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried oregano",
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
      name: "fresh basil leaves",
      note: "for garnish",
    },
  ],

  instructions: [
    "Preheat the oven to 220°C (425°F). Line baking trays with parchment paper.",
    "Arrange the eggplant slices in a single layer on the prepared trays.",
    "Brush both sides of the eggplant with olive oil and season with sea salt and black pepper.",
    "Roast the eggplant for 20 minutes, turning the slices halfway through, until tender and lightly browned.",
    "Meanwhile, warm the tomato sauce in a saucepan with the minced garlic and dried oregano for about 5 minutes. Do not let the sauce dry out.",
    "Lightly grease a baking dish and spread a thin layer of tomato sauce over the bottom.",
    "Arrange a layer of roasted eggplant over the sauce, followed by tomato sauce, mozzarella, Parmesan, basil, and parsley.",
    "Repeat the layers until the eggplant and sauce are used, distributing the cheeses and herbs between the layers.",
    "Finish with the remaining Parmesan cheese on top.",
    "Bake for about 25 minutes, until the sauce is bubbling and the cheese is melted with a lightly browned top.",
    "Remove from the oven and let the dish rest for 10 minutes so the layers can settle before serving.",
    "Garnish with fresh basil leaves and serve warm.",
  ],

  nutrition: {
    calories: 315,
    protein: "17 g",
    carbs: "18 g",
    fat: "20 g",
    fiber: "7 g",
    sugar: "10 g",
    sodium: "470 mg",
  },

  healthBenefits: [
    "Rich in antioxidants from eggplant",
    "Provides calcium from mozzarella and Parmesan cheese",
    "Provides dietary fiber from eggplant and tomato sauce",
    "Provides vitamins and plant compounds from eggplant, tomatoes, and fresh herbs",
    "Uses extra virgin olive oil as the primary added fat",
    "Oven-roasted instead of deep-fried",
    "Suitable for a vegetarian Mediterranean-style meal",
  ],

  keywords: [
    "Eggplant Parmesan",
    "Healthy Eggplant Parmesan",
    "Mediterranean Vegetarian",
    "Baked Eggplant",
    "Healthy Mediterranean Dinner",
  ],

  tags: [
    "vegetarian",
    "Mediterranean",
    "Lebanese",
    "eggplant",
    "healthy",
    "baked",
    "cheese",
    "main dish",
  ],

  featured: true,
};
