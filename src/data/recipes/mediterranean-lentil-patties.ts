import { Recipe } from "@/types/recipe";

export const mediterraneanLentilPatties: Recipe = {
  id: 40,

  title: "Mediterranean Lentil Patties",

  slug: "mediterranean-lentil-patties",

  description:
    "Healthy baked lentil patties made with cooked brown lentils, rolled oats, fresh herbs, garlic, onion, and warm Mediterranean spices. A wholesome vegetarian option for a main meal, pita filling, or meal prep.",

  longDescription:
    "Mediterranean Lentil Patties combine tender cooked brown lentils with rolled oats, parsley, cilantro, onion, garlic, cumin, coriander, paprika, and olive oil. An egg helps bind the mixture, while baking gives the patties lightly crisp, golden edges and a tender center. Serve them warm with tahini sauce, yogurt sauce, fresh salad, or tucked into pita bread.",

  image: "/images/recipes/mediterranean-lentil-patties.webp",

  imageAlt: "Golden baked Mediterranean lentil patties served with tahini sauce and fresh parsley.",

  cuisine: "Mediterranean",

  category: "vegetarian",

  vegetarian: true,

  prepTime: "20 mins",

  cookTime: "25 mins",

  totalTime: "45 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "cooked brown lentils, very well drained",
    },
    {
      amount: 1,
      unit: "cup",
      name: "rolled oats",
    },
    {
      amount: 1,
      unit: "small",
      name: "onion, finely chopped",
    },
    {
      amount: 3,
      unit: "cloves",
      name: "garlic, minced",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh parsley, finely chopped",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh cilantro, finely chopped",
    },
    {
      amount: 1,
      unit: "large",
      name: "egg",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground coriander",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "paprika",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
  ],

  instructions: [
    "Preheat the oven to 400°F (200°C). Line a large baking tray with parchment paper and lightly brush or spray it with olive oil.",
    "Make sure the cooked lentils are very well drained and not holding excess water. Add the lentils and rolled oats to a food processor and pulse several times until mostly combined but still slightly coarse. Do not process into a completely smooth paste.",
    "Transfer the lentil mixture to a large bowl. Add the finely chopped onion, garlic, parsley, cilantro, egg, cumin, coriander, paprika, black pepper, sea salt, and olive oil.",
    "Mix thoroughly until the ingredients are evenly distributed and the mixture holds together when pressed. Let it stand for 5 minutes so the oats can absorb some of the moisture. If the mixture is too wet to shape, add a small amount of additional rolled oats; if it is too dry to hold together, add a teaspoon of water at a time.",
    "Divide the mixture into 8 approximately equal portions and shape each portion into a patty about 1/2 inch (1–1.5 cm) thick. Place the patties on the prepared baking tray with a little space between them.",
    "Bake for 12–15 minutes, then carefully flip the patties. Continue baking for another 8–10 minutes, or until the patties are lightly golden and firm enough to handle.",
    "Remove from the oven and let the patties rest on the tray for 5 minutes before serving. Serve warm with tahini sauce, yogurt sauce, fresh salad, or inside pita bread.",
  ],

  nutrition: {
    calories: 260,
    protein: "13 g",
    carbs: "30 g",
    fat: "10 g",
    fiber: "10 g",
    sugar: "3 g",
    sodium: "320 mg",
  },

  healthBenefits: [
    "Good source of plant-based protein from lentils",
    "High in dietary fiber",
    "Provides iron and folate from lentils",
    "Contains whole-food carbohydrates for sustained energy",
    "Includes heart-friendly unsaturated fat from olive oil",
    "A wholesome vegetarian alternative to meat-based patties",
  ],

  keywords: [
    "Mediterranean Lentil Patties",
    "Baked Lentil Patties",
    "Healthy Lentil Recipe",
    "Vegetarian Lentil Patties",
    "Lentil Burger",
    "Lentil Patties with Tahini",
  ],

  tags: [
    "vegetarian",
    "Mediterranean",
    "lentils",
    "healthy",
    "meal prep",
    "high fiber",
    "protein",
    "baked",
  ],

  featured: true,
};
