import { Recipe } from "@/types/recipe";

export const bakedFalafel: Recipe = {
  datePublished: "2026-07-17",
  id: 42,

  title: "Baked Falafel",

  slug: "baked-falafel",

  description:
    "Crispy oven-baked falafel made with soaked chickpeas, fresh parsley, cilantro, garlic, onion, and warm Mediterranean spices. A lighter alternative to traditional deep-fried falafel with a crisp exterior and tender, flavorful center.",

  longDescription:
    "These baked falafel capture the herbaceous flavor, earthy chickpeas, and warm spices of classic Mediterranean falafel while using the oven instead of deep frying. The mixture is made from soaked dried chickpeas rather than canned chickpeas, then combined with parsley, cilantro, onion, garlic, cumin, coriander, and paprika. The key to good baked falafel is texture: the chickpeas should be finely chopped but still slightly coarse, never blended into a smooth paste. After a short rest to firm the mixture, the falafel are shaped into small patties, lightly coated with olive oil, and baked until browned and crisp outside while remaining tender inside. Serve them warm with tahini sauce, hummus, chopped salad, pickles, or warm pita for a satisfying vegetarian meal.",

  image: "/images/recipes/baked-falafel.webp",

  imageAlt:
    "Golden baked falafel served with tahini sauce, fresh parsley, cucumbers, tomatoes, and pita bread.",

  cuisine: "Lebanese",

  category: "vegetarian",

  vegan: true,

  vegetarian: true,

  prepTime: "20 mins",

  cookTime: "30 mins",

  totalTime: "50 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "dried chickpeas, soaked overnight (do not use canned)",
      note: "Soak in plenty of cold water for at least 8 hours. The chickpeas should become noticeably plumper but remain firm enough to hold their shape.",
    },
    {
      amount: 1,
      unit: "small",
      name: "onion, roughly chopped",
    },
    {
      amount: 4,
      unit: "cloves",
      name: "garlic",
    },
    {
      amount: 1,
      unit: "cup",
      name: "fresh parsley leaves",
      note: "Use fresh, dry parsley for the best color and herb flavor.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "fresh cilantro leaves",
      note: "Pat dry before processing so excess moisture does not soften the mixture.",
    },
    {
      amount: 2,
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
      name: "baking powder",
      note: "Helps keep the baked falafel lighter rather than dense.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "chickpea flour",
      note: "Helps absorb excess moisture and gives the mixture enough structure to hold its shape.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 1,
      unit: "",
      name: "cooking spray or extra olive oil for brushing",
      note: "A light coating helps the surface brown and crisp in the oven.",
    },
  ],

  instructions: [
    "Place the dried chickpeas in a large bowl and cover generously with cold water. Soak for at least 8 hours or overnight. Do not cook the chickpeas.",
    "Drain the soaked chickpeas very thoroughly. Pat them dry with a clean kitchen towel if they still feel noticeably wet; excess water can make the mixture difficult to shape.",
    "Preheat the oven to 200°C (400°F). Line a baking tray with parchment paper and lightly grease it.",
    "Add the drained chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, paprika, baking powder, chickpea flour, olive oil, salt, and black pepper to a food processor.",
    "Pulse in short bursts until the mixture is finely chopped and holds together when pressed, but still has a slightly coarse, crumbly texture. Do not process it into a smooth hummus-like paste.",
    "Test a small amount by squeezing it between your fingers. If it will not hold together, add a little more chickpea flour, one teaspoon at a time. If it feels very wet, refrigerate it before shaping.",
    "Cover and refrigerate the mixture for about 30 minutes. This resting period allows the chickpea flour to absorb moisture and makes shaping easier.",
    "Shape the mixture into about 18 small, slightly flattened balls or patties. Keep them similar in size and thickness so they cook evenly.",
    "Arrange the falafel on the prepared baking tray with a little space between each piece. Lightly brush or spray the tops with olive oil.",
    "Bake for about 15 minutes, until the bottoms begin to turn golden and the edges feel firm.",
    "Carefully flip each falafel. Lightly oil the newly exposed surface if needed, then bake for another 12–15 minutes.",
    "Remove when the falafel are golden brown on the outside and firm enough to lift without breaking. Avoid overbaking, as baked falafel can become dry if left in the oven too long.",
    "Let the falafel rest for a few minutes before serving so the centers can firm slightly while remaining tender.",
    "Serve warm with tahini sauce, hummus, chopped tomato and cucumber salad, pickles, fresh herbs, or tucked into warm pita bread.",
  ],

  nutrition: {
    calories: 280,
    protein: "12 g",
    carbs: "32 g",
    fat: "11 g",
    fiber: "10 g",
    sugar: "4 g",
    sodium: "340 mg",
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber from chickpeas and herbs",
    "Provides folate, iron, and other essential nutrients",
    "Supports digestive health as part of a fiber-rich diet",
    "Uses substantially less oil than traditional deep-fried falafel",
    "Provides satisfying plant-based energy for vegetarian meals",
    "Naturally dairy-free",
    "Can be prepared as part of a balanced Mediterranean-style meal",
  ],

  keywords: [
    "Baked Falafel",
    "Healthy Falafel",
    "Oven Baked Falafel",
    "Mediterranean Chickpeas",
    "Lebanese Falafel",
    "Vegetarian Dinner",
    "Plant Based Protein",
    "Healthy Chickpea Recipe",
  ],

  tags: [
    "vegetarian",
    "vegan",
    "Mediterranean",
    "Lebanese",
    "falafel",
    "chickpeas",
    "healthy",
    "baked",
    "high fiber",
    "plant protein",
  ],

  featured: true,
};
