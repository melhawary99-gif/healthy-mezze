import { Recipe } from "@/types/recipe";

export const roastedEggplantSalad: Recipe = {
  id: 9,

  title: "Roasted Eggplant Salad",

  slug: "roasted-eggplant-salad",

  description:
    "A smoky Mediterranean eggplant salad with tomatoes, parsley, mint, garlic, and a fresh lemon dressing.",

  longDescription:
    "This Roasted Eggplant Salad features tender roasted eggplant combined with juicy tomatoes, fresh parsley, mint, garlic, and extra virgin olive oil. Naturally vegan and packed with antioxidants, it's a flavorful side dish that pairs beautifully with grilled meats, pita bread, or as part of a mezze platter.",

  image: "/images/recipes/roasted-eggplant-salad.jpg",

  imageAlt:
    "Roasted eggplant salad with tomatoes, parsley, mint, garlic and lemon dressing.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "35 mins",

  totalTime: "50 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 medium eggplants",
    "2 tomatoes, diced",
    "1/4 red onion, finely chopped",
    "1/4 cup chopped fresh parsley",
    "2 tbsp chopped fresh mint",
    "2 cloves garlic, minced",
    "3 tbsp extra virgin olive oil",
    "2 tbsp fresh lemon juice",
    "1 tsp ground cumin",
    "1/2 tsp salt",
    "1/4 tsp black pepper"
  ],

  instructions: [
    "Preheat the oven to 220°C (425°F).",
    "Pierce the eggplants several times with a fork.",
    "Roast for 30–35 minutes until soft.",
    "Allow the eggplants to cool slightly.",
    "Peel away the skin and roughly chop the flesh.",
    "Transfer the eggplant to a large bowl.",
    "Add the tomatoes, onion, parsley, mint, and garlic.",
    "Whisk together the olive oil, lemon juice, cumin, salt, and pepper.",
    "Pour the dressing over the salad.",
    "Mix gently and refrigerate for 20 minutes before serving."
  ],

  nutrition: {
    calories: 170,
    protein: "3 g",
    carbs: "15 g",
    fat: "12 g",
    fiber: "7 g",
    sugar: "8 g",
    sodium: "240 mg"
  },

  healthBenefits: [
    "Rich in antioxidants",
    "High in dietary fiber",
    "Supports heart health",
    "Naturally vegan",
    "Low in calories",
    "Good source of potassium"
  ],

  keywords: [
    "Roasted Eggplant Salad",
    "Mediterranean Eggplant Salad",
    "Healthy Eggplant Recipe",
    "Lebanese Eggplant Salad",
    "Vegan Mediterranean Salad"
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegan",
    "eggplant",
    "mezze",
    "gluten-free"
  ],

  featured: true
};