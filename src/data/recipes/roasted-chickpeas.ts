import { Recipe } from "@/types/recipe";

export const roastedChickpeas: Recipe = {
  datePublished: "2026-07-17",
  id: 53,

  title: "Mediterranean Roasted Chickpeas",

  slug: "mediterranean-roasted-chickpeas",

  description:
    "Crunchy oven-roasted chickpeas seasoned with Mediterranean herbs, smoked paprika, garlic, and extra virgin olive oil. A healthy, protein-packed snack that's perfect any time of day.",

  longDescription:
    "Mediterranean Roasted Chickpeas are a simple yet satisfying snack made with chickpeas roasted until crisp and coated in extra virgin olive oil and aromatic Mediterranean spices. They are naturally rich in plant-based protein and fiber and work well as a snack, salad topping, mezze addition, or crunchy accompaniment to soups and grain bowls.",

  image: "/images/recipes/mediterranean-roasted-chickpeas.webp",

  imageAlt:
    "Crispy roasted chickpeas seasoned with smoked paprika, garlic, oregano, cumin, parsley, and Mediterranean spices.",

  cuisine: "Lebanese",

  category: "snack",

  vegetarian: true,

  vegan: true,

  prepTime: "10 mins",

  cookTime: "35 mins",

  totalTime: "45 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cans",
      name: "(15 oz each) chickpeas",
      note: "Drain and rinse thoroughly, then pat very dry before roasting.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Use enough to coat the chickpeas lightly without making them greasy.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "smoked paprika",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "garlic powder",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried oregano",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "onion powder",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust to taste, especially if the chickpeas were canned with added sodium.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "cayenne pepper",
      note: "Optional; reduce or omit for a milder snack.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "chopped fresh parsley",
      note: "Add after roasting for a fresh finish.",
    },
  ],

  instructions: [
    "Preheat the oven to 400°F (200°C) and place a large baking sheet inside while the oven heats if you want an especially crisp exterior.",
    "Drain and rinse the chickpeas thoroughly. Spread them over a clean kitchen towel or several layers of paper towel and pat them very dry. Removing as much surface moisture as possible is one of the most important steps for crisp chickpeas.",
    "Rub the chickpeas gently between the towels or with your hands and remove any loose skins that come away easily. Do not worry about removing every skin.",
    "Transfer the dry chickpeas to a large bowl and toss them with the extra virgin olive oil until they are lightly and evenly coated.",
    "Add the smoked paprika, garlic powder, oregano, cumin, onion powder, sea salt, black pepper, and cayenne pepper if using. Toss thoroughly so the seasoning reaches the chickpeas evenly.",
    "Spread the chickpeas over the baking sheet in a single, uncrowded layer. Leave space between them so hot air can circulate and moisture can escape.",
    "Roast for 30–35 minutes, shaking or stirring the pan about halfway through. Continue roasting until the chickpeas are deeply golden and feel crisp on the outside.",
    "Check a chickpea from the center of the tray before removing the pan. It should have a firm, crunchy exterior rather than feeling soft or damp inside.",
    "Remove the chickpeas from the oven and let them cool for about 5 minutes. They become noticeably crispier as excess heat and moisture escape during cooling.",
    "Transfer to a serving bowl and garnish with chopped fresh parsley. Serve while crisp or use as a crunchy topping for salads, soups, grain bowls, or mezze.",
  ],

  nutrition: {
    calories: 185,
    protein: "8 g",
    carbs: "23 g",
    fat: "7 g",
    fiber: "7 g",
    sugar: "3 g",
    sodium: "310 mg",
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber for digestive health",
    "Supports heart health",
    "Provides iron, magnesium, and folate",
    "Naturally gluten-free",
    "Helps promote fullness",
    "Mediterranean diet friendly",
  ],

  keywords: [
    "Roasted Chickpeas",
    "Healthy Snack",
    "Mediterranean Snack",
    "Crunchy Chickpeas",
    "High Protein Snack",
  ],

  tags: [
    "snack",
    "Mediterranean",
    "chickpeas",
    "healthy",
    "vegan",
    "vegetarian",
    "high protein",
    "meal prep",
  ],

  featured: true,
};
