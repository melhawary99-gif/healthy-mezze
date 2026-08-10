import { Recipe } from "@/types/recipe";

export const babaGanoush: Recipe = {
  id: 55,

  title: "Classic Baba Ganoush",

  slug: "classic-baba-ganoush",

  description:
    "A smoky, creamy roasted eggplant dip blended with tahini, garlic, fresh lemon juice, and extra virgin olive oil. A classic Mediterranean mezze that's rich, flavorful, and naturally plant-based.",

  longDescription:
    "Classic Baba Ganoush turns roasted eggplant into a silky Mediterranean mezze with a deep smoky character. The eggplant is roasted until the skin is charred and the flesh is completely tender, then drained to concentrate its flavor before being combined with creamy tahini, fresh lemon juice, garlic, cumin, and extra virgin olive oil. The finished dip is smooth but retains a little texture, with a balance of smoky eggplant, nutty tahini, bright lemon, and aromatic garlic. Serve it as part of a mezze spread with warm pita, fresh vegetables, olives, and other small plates.",

  image: "/images/recipes/classic-baba-ganoush.webp",

  imageAlt:
    "Creamy baba ganoush topped with olive oil, parsley, smoked paprika, and pomegranate seeds, served with warm pita and fresh vegetables.",

  cuisine: "Lebanese",

  category: "mezze",

  vegan: true,

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "40 mins",

  totalTime: "55 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "large",
      name: "eggplants",
      note: "Choose firm eggplants with smooth, glossy skin.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "tahini",
      note: "Stir well before measuring.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add gradually and adjust to taste.",
    },
    {
      amount: 2,
      unit: "cloves",
      name: "garlic",
      note: "Finely minced or grated.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Plus more for serving.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust to taste.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "freshly ground black pepper",
      note: "Adjust to taste.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh parsley",
      note: "Finely chopped for garnish.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "smoked paprika",
      note: "Optional, for garnish and extra smoky aroma.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "pomegranate seeds",
      note: "Optional, for garnish.",
    },
  ],

  instructions: [
    "Preheat the oven to 220°C (425°F) and line a baking tray with parchment paper.",
    "Wash and dry the eggplants thoroughly, then pierce them several times with a fork so steam can escape during roasting.",
    "Place the eggplants on the tray and roast for 35–40 minutes, turning once halfway through, until the skins are deeply charred and wrinkled and the flesh is completely soft.",
    "Remove the eggplants from the oven and let them cool for about 10 minutes, until they are comfortable enough to handle.",
    "Cut the eggplants open lengthwise and scoop the soft flesh away from the skins.",
    "Transfer the eggplant flesh to a fine-mesh colander and let it drain for about 10 minutes, gently pressing once or twice to remove excess liquid.",
    "Place the drained eggplant flesh in a food processor or mixing bowl.",
    "Add the tahini, lemon juice, garlic, extra virgin olive oil, cumin, salt, and black pepper.",
    "Blend or mash until creamy while keeping a little texture rather than turning the eggplant into a completely smooth puree.",
    "Taste and adjust the lemon juice, tahini, garlic, salt, or cumin until the flavors are balanced.",
    "Transfer the baba ganoush to a wide serving bowl and use the back of a spoon to create a shallow swirl across the surface.",
    "Drizzle with extra virgin olive oil and garnish with parsley, smoked paprika, and optional pomegranate seeds.",
    "Let the baba ganoush rest for about 15 minutes before serving so the flavors can settle.",
    "Serve with warm pita, fresh vegetables, olives, or other Mediterranean mezze.",
  ],

  nutrition: {
    calories: 145,
    protein: "3 g",
    carbs: "11 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "5 g",
    sodium: "220 mg",
  },

  healthBenefits: [
    "Provides dietary fiber from roasted eggplant.",
    "Contains antioxidant compounds naturally found in eggplant and fresh vegetables.",
    "Tahini and extra virgin olive oil provide predominantly unsaturated fats.",
    "Provides plant-based sources of healthy fats and modest amounts of protein.",
    "Naturally vegan and vegetarian as written.",
    "Naturally gluten-free when served with gluten-free accompaniments.",
    "A vegetable-forward mezze that can add fiber and healthy fats to a Mediterranean-style meal.",
  ],

  keywords: [
    "Baba Ganoush",
    "Classic Baba Ganoush",
    "Roasted Eggplant Dip",
    "Mediterranean Eggplant Dip",
    "Lebanese Mezze",
    "Healthy Eggplant Dip",
    "Tahini Eggplant Dip",
  ],

  tags: [
    "mezze",
    "Mediterranean",
    "Lebanese",
    "eggplant",
    "baba ganoush",
    "vegan",
    "vegetarian",
    "healthy",
    "gluten-free",
    "high-fiber",
  ],

  featured: true,
};
