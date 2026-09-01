import { Recipe } from "@/types/recipe";

export const fulMedames: Recipe = {
  datePublished: "2026-07-17",
  id: 45,

  title: "Ful Medames (Egyptian Fava Beans)",

  slug: "ful-medames",

  description:
    "A traditional Egyptian ful medames made with tender fava beans, garlic, cumin, lemon juice, and extra virgin olive oil, finished with fresh vegetables and herbs for a hearty, naturally vegan breakfast.",

  longDescription:
    "Ful medames is one of Egypt’s most iconic everyday dishes, especially associated with breakfast tables, family kitchens, and humble food stalls. The dish is built around slow-cooked fava beans seasoned simply with garlic, cumin, lemon, and olive oil. For the best texture, the beans are gently warmed and only partly mashed, leaving plenty of whole beans in a thick, spoonable mixture rather than a smooth purée. Fresh tomato, red onion, parsley, and lemon add brightness at the table, while warm pita makes it a complete and satisfying meal. This version keeps the Egyptian character of ful medames while making the cooking process practical for a modern home kitchen.",

  image: "/images/recipes/ful-medames.webp",

  imageAlt:
    "Traditional Egyptian ful medames with whole and gently mashed fava beans, tomatoes, red onion, parsley, olive oil, lemon, and warm pita bread.",

  cuisine: "Egyptian",

  category: "breakfast",

  vegetarian: true,

  vegan: true,

  prepTime: "10 mins",

  cookTime: "15 mins",

  totalTime: "25 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cans",
      name: "fava beans (400 g each), drained and rinsed",
      note: "Use plain cooked fava beans without added sauces or strong seasonings. Reserve a little of the bean liquid if the beans seem dry.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Use a good-quality olive oil because part of it is added at the end for flavor.",
    },
    {
      amount: 3,
      unit: "cloves",
      name: "garlic, finely minced",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add gradually and adjust to taste; lemon should brighten the beans without overpowering the cumin.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
      note: "Cumin is one of the defining seasonings of ful medames, so use fresh, aromatic cumin when possible.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "paprika",
      note: "Optional for gentle warmth and color; it is not essential to the traditional flavor.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Start with less if the canned beans or their liquid are already salted.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley, finely chopped",
    },
    {
      amount: 1,
      unit: "small",
      name: "tomato, finely diced",
      note: "Use a ripe but firm tomato so it stays fresh and distinct when served.",
    },
    {
      amount: 0.25,
      unit: "small",
      name: "red onion, finely diced",
      note: "For a milder onion flavor, rinse the diced onion briefly under cold water and drain well.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh cilantro, chopped (optional)",
    },
    {
      amount: 4,
      unit: "boiled",
      name: "eggs (optional)",
      note: "Omit for a completely vegan serving. The ful itself remains vegan without the eggs.",
    },
    {
      amount: 1,
      unit: "portion",
      name: "warm whole-wheat pita bread, for serving",
    },
    {
      amount: 1,
      unit: "portion",
      name: "lemon wedges, for serving",
    },
  ],

  instructions: [
    "Drain and rinse the fava beans. If they look dry, keep a few tablespoons of their liquid or prepare a little warm water to loosen the mixture later if needed.",
    "Heat 1 tablespoon of the olive oil in a saucepan over medium-low heat. Add the minced garlic and cook for about 30 seconds, just until fragrant. Do not let the garlic brown deeply, as burnt garlic can make the ful bitter.",
    "Add the fava beans, cumin, paprika, salt, and black pepper. Stir gently so the beans remain mostly intact.",
    "Add 2–3 tablespoons of water or reserved bean liquid if necessary. Cover and gently simmer for 5–7 minutes, stirring occasionally, until the beans are hot and tender.",
    "Using the back of a spoon or a potato masher, gently mash part of the beans against the side of the pan while leaving plenty of whole beans. The finished ful should be thick and spoonable, not smooth like hummus.",
    "Remove the pan from the heat and stir in the lemon juice. Taste and adjust the cumin, salt, and lemon so the flavor is savory, warm, and bright.",
    "Transfer the ful to a serving bowl and make a shallow well in the center. Drizzle with the remaining olive oil.",
    "Scatter the diced tomato, red onion, parsley, and optional cilantro over the top. Keep the fresh toppings distinct rather than stirring them completely into the beans.",
    "Serve immediately with warm pita bread, lemon wedges, and optional boiled eggs. Add another small drizzle of olive oil at the table if desired.",
  ],

  nutrition: {
    calories: 330,
    protein: "16 g",
    carbs: "38 g",
    fat: "13 g",
    fiber: "12 g",
    sugar: "4 g",
    sodium: "390 mg",
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Provides iron and folate",
    "Supports digestive health",
    "Provides satisfying, slow-digesting carbohydrates",
    "Uses heart-friendly extra virgin olive oil",
    "Naturally vegan when served without eggs",
  ],

  keywords: [
    "Ful Medames",
    "Egyptian Ful Medames",
    "Egyptian Breakfast",
    "Egyptian Fava Beans",
    "Fava Bean Breakfast",
    "Healthy Egyptian Breakfast",
    "Vegan Egyptian Recipe",
  ],

  tags: [
    "breakfast",
    "Egyptian",
    "Mediterranean",
    "fava beans",
    "vegan",
    "vegetarian",
    "healthy",
    "high protein",
    "high fiber",
  ],

  featured: true,
};
