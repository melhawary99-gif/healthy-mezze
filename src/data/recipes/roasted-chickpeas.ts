import { Recipe } from "@/types/recipe";

export const roastedChickpeas: Recipe = {
  id: 51,

  title: "Mediterranean Roasted Chickpeas",

  slug: "mediterranean-roasted-chickpeas",

  description:
    "Crunchy oven-roasted chickpeas seasoned with Mediterranean herbs, smoked paprika, garlic, and extra virgin olive oil. A healthy, protein-packed snack that's perfect any time of day.",

  longDescription:
    "Mediterranean Roasted Chickpeas are a simple yet incredibly satisfying snack made with crispy chickpeas coated in extra virgin olive oil and a blend of aromatic Mediterranean spices. High in plant-based protein, fiber, and essential minerals, these crunchy bites are perfect for healthy snacking, meal prep, or adding texture to salads and grain bowls.",

  image: "/images/recipes/mediterranean-roasted-chickpeas.jpg",

  imageAlt:
    "Crispy roasted chickpeas seasoned with paprika, garlic, oregano, parsley, and Mediterranean herbs.",

  cuisine: "Lebanese",

  category: "Snack",

  prepTime: "10 mins",

  cookTime: "35 mins",

  totalTime: "45 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 cans (15 oz each) chickpeas, drained and rinsed",
    "2 tbsp extra virgin olive oil",
    "1 tsp smoked paprika",
    "1 tsp garlic powder",
    "1 tsp dried oregano",
    "1/2 tsp ground cumin",
    "1/2 tsp onion powder",
    "1/2 tsp sea salt",
    "1/4 tsp black pepper",
    "1/4 tsp cayenne pepper (optional)",
    "1 tbsp chopped fresh parsley for garnish"
  ],

  instructions: [
    "Preheat the oven to 400°F (200°C).",
    "Drain, rinse, and thoroughly pat the chickpeas dry using paper towels.",
    "Remove any loose skins for extra crispiness.",
    "Place the chickpeas on a baking sheet and toss with olive oil.",
    "Sprinkle with paprika, garlic powder, oregano, cumin, onion powder, salt, black pepper, and cayenne if using.",
    "Mix well until evenly coated.",
    "Spread the chickpeas into a single layer.",
    "Roast for 30–35 minutes, shaking the pan halfway through, until golden and crispy.",
    "Allow to cool for 5 minutes to become even crispier.",
    "Garnish with fresh parsley before serving."
  ],

  nutrition: {
    calories: 185,
    protein: "8 g",
    carbs: "23 g",
    fat: "7 g",
    fiber: "7 g",
    sugar: "3 g",
    sodium: "310 mg"
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber for digestive health",
    "Supports heart health",
    "Provides iron, magnesium, and folate",
    "Naturally gluten-free",
    "Helps promote fullness",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Roasted Chickpeas",
    "Healthy Snack",
    "Mediterranean Snack",
    "Crunchy Chickpeas",
    "High Protein Snack"
  ],

  tags: [
    "snack",
    "Mediterranean",
    "chickpeas",
    "healthy",
    "vegan",
    "vegetarian",
    "high protein",
    "meal prep"
  ],

  featured: true
};