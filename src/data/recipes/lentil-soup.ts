import { Recipe } from "@/types/recipe";

export const lentilSoup: Recipe = {
  id: 5,

  title: "Syrian Lentil Soup (Shorbat Adas)",

  slug: "lentil-soup",

  description:
    "A comforting Syrian red lentil soup gently simmered with onion, garlic, cumin, coriander, and olive oil, then finished with fresh lemon.",

  longDescription:
    "Syrian Lentil Soup, known as Shorbat Adas (شوربة عدس), is a simple and deeply comforting Levantine soup built around red lentils, onion, warm spices, and lemon. Unlike heavily loaded lentil soups, this Syrian-style version lets the lentils remain the heart of the dish, with cumin, coriander, garlic, and olive oil adding depth without overpowering them. The soup is naturally plant-based, filling, and economical, making it equally suitable for an everyday family meal and the warm bowls commonly associated with Ramadan tables. A final squeeze of fresh lemon brightens the earthy lentils and is an important part of the finished flavor.",

  image: "/images/recipes/lentil-soup.webp",

  imageAlt:
    "Syrian red lentil soup served warm in a bowl with a swirl of olive oil, chopped parsley, cumin, and fresh lemon wedges.",

  cuisine: "Syrian",

  category: "soups",

  vegan: true,

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "35 mins",

  totalTime: "50 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1.5,
      unit: "cups",
      name: "red lentils",
      note:
        "Use split red lentils if possible. Sort through them briefly and rinse several times until the water runs mostly clear.",
    },
    {
      amount: 1,
      unit: "large",
      name: "yellow or white onion, finely chopped",
      note:
        "Finely chopping the onion helps it soften completely into the soup.",
    },
    {
      amount: 3,
      unit: "cloves",
      name: "garlic, finely minced",
      note:
        "Keep the garlic finely minced so it cooks evenly without leaving large bitter pieces.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note:
        "Use part for cooking the onion and the remainder for finishing if desired.",
    },
    {
      amount: 1.5,
      unit: "tsp",
      name: "ground cumin",
      note:
        "Cumin is one of the defining warm spices in this style of lentil soup.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground coriander",
      note:
        "Adds a gentle citrusy spice note without overpowering the lentils.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "ground black pepper",
      note:
        "Adjust to taste.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
      note:
        "Start with less if using salted vegetable broth and adjust near the end.",
    },
    {
      amount: 6,
      unit: "cups",
      name: "water or low-sodium vegetable broth",
      note:
        "Use water for a very traditional, clean lentil flavor or low-sodium broth for extra depth.",
    },
    {
      amount: 1,
      unit: "",
      name: "carrot, finely diced",
      note:
        "Optional but useful for gentle sweetness. Keep it finely diced so it melts naturally into the soup.",
    },
    {
      amount: 1,
      unit: "",
      name: "lemon",
      note:
        "Cut into wedges for serving. Fresh lemon is best added after cooking rather than simmered for a long time.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley, finely chopped",
      note:
        "Use for finishing the soup immediately before serving.",
    },
  ],

  instructions: [
    "Sort through the red lentils and remove any small stones or damaged lentils. Rinse them under cold running water several times until the water is mostly clear, then drain. Red lentils do not need soaking.",
    "Finely chop the onion and carrot, and mince the garlic. Keep the garlic separate because it needs less cooking time than the onion.",
    "Heat the olive oil in a large heavy-bottomed pot over medium heat. Add the onion and cook for 5–7 minutes, stirring occasionally, until soft and translucent. Do not rush this step or let the onion become dark brown.",
    "Add the carrot and cook for another 2–3 minutes until it begins to soften. Add the garlic and stir for about 30–45 seconds, just until fragrant. If the garlic starts browning quickly, lower the heat immediately.",
    "Add the cumin, ground coriander, and black pepper. Stir for about 20–30 seconds to release their aroma. Do not fry the spices for too long because ground spices can become bitter when scorched.",
    "Add the rinsed lentils and 6 cups of water or low-sodium vegetable broth. Stir well and scrape the bottom of the pot so no spices or onion are stuck there.",
    "Bring the soup to a gentle boil over medium-high heat. Once bubbling, reduce the heat to low and partially cover the pot. Leave a small opening for steam to escape.",
    "Simmer for about 25–30 minutes, stirring every few minutes, especially toward the end of cooking. Red lentils soften quickly and can settle on the bottom as the soup thickens. Add a little hot water if necessary.",
    "Continue cooking until the lentils have completely softened and are beginning to break down. The soup should look naturally creamy even before blending. There should be no firm lentil centers remaining.",
    "Use an immersion blender to blend the soup until mostly smooth, or blend only part of it if you prefer a slightly rustic texture. If using a countertop blender, work in small batches and never fill the blender more than halfway with hot soup.",
    "Check the consistency after blending. Syrian-style lentil soup should be thick and spoonable but still pour easily from a ladle. Stir in a little hot water if it has become too thick.",
    "Taste and adjust the salt and cumin. The soup may taste earthy before the lemon is added; do not add large amounts of extra seasoning before tasting it again with lemon.",
    "Ladle the soup into warm bowls. Finish with fresh lemon juice, chopped parsley, and a small drizzle of extra virgin olive oil if desired.",
    "Serve immediately with lemon wedges and warm Syrian or Arabic flatbread. Add more lemon at the table according to taste.",
  ],

  nutrition: {
    calories: 285,
    protein: "17 g",
    carbs: "43 g",
    fat: "7 g",
    fiber: "13 g",
    sugar: "5 g",
    sodium: "410 mg",
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Provides iron, folate, and other essential minerals",
    "Naturally vegan and vegetarian",
    "Provides long-lasting carbohydrates from lentils",
    "Uses extra virgin olive oil as the main added fat",
    "A filling meal made primarily from affordable pantry ingredients",
  ],

  keywords: [
    "Syrian Lentil Soup",
    "Shorbat Adas",
    "Shorbat Adas Recipe",
    "Syrian Red Lentil Soup",
    "Syrian Soup",
    "Levantine Lentil Soup",
    "Healthy Lentil Soup",
    "Vegan Syrian Recipe",
    "Mediterranean Lentil Soup",
  ],

  tags: [
    "soup",
    "Syrian",
    "Levantine",
    "Mediterranean",
    "lentils",
    "vegan",
    "vegetarian",
    "high fiber",
    "plant protein",
    "healthy",
  ],

  featured: false,
};
