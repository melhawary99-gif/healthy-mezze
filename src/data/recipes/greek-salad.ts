import { Recipe } from "@/types/recipe";

export const greekSalad: Recipe = {
  datePublished: "2026-07-16",
  id: 1,

  title: "Greek Salad",

  slug: "greek-salad",

  description:
    "A fresh Mediterranean salad made with crisp vegetables, creamy feta cheese, Kalamata olives, and extra virgin olive oil.",

  longDescription:
    "Greek Salad is a fresh Mediterranean classic built around ripe tomatoes, crisp cucumber, red onion, Kalamata olives, feta cheese, oregano, and extra virgin olive oil. This Healthy Mezze interpretation keeps the recognizable Greek foundation while adding a gentle Levantine influence through fresh herbs, lemon, and sumac.",

  image: "/images/recipes/greek-salad.webp",

  imageAlt:
    "Mediterranean Greek salad with tomatoes, cucumber, feta cheese, Kalamata olives, red onion, fresh herbs, and oregano.",

  cuisine: "Greek",

  category: "salads",

  vegan: false,

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "",
      name: "Large ripe tomatoes",
      note: "cut into bite-sized pieces",
    },
    {
      amount: 1,
      unit: "",
      name: "Cucumber",
      note: "sliced or cut into half-moons",
    },
    {
      amount: 0.5,
      unit: "",
      name: "Small red onion",
      note: "thinly sliced",
    },
    {
      amount: 150,
      unit: "g",
      name: "Feta cheese",
      note: "cut into cubes or broken into large pieces",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "Kalamata olives",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "Extra virgin olive oil",
    },
    {
      amount: 1.5,
      unit: "tbsp",
      name: "Fresh lemon juice",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "Dried oregano",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "Fresh parsley",
      note: "finely chopped",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "Fresh mint",
      note: "finely chopped",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "Sumac",
      note: "A tangy, lemony red spice made from dried sumac berries, commonly used in Mediterranean and Middle Eastern cooking.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "Pomegranate molasses",
      note: "optional, for a subtle Levantine accent",
    },
    {
      amount: 1,
      unit: "",
      name: "Salt",
      note: "adjust carefully because feta and olives are already salty",
    },
    {
      amount: 1,
      unit: "",
      name: "Freshly ground black pepper",
      note: "to taste",
    },
  ],

  instructions: [
    "Wash and dry the tomatoes, cucumber, parsley, and mint thoroughly.",
    "Cut the tomatoes into generous bite-sized pieces so they hold their shape when tossed.",
    "Slice the cucumber into even pieces and thinly slice the red onion.",
    "If the red onion tastes particularly strong, soak the slices in cold water for 5–10 minutes, then drain and dry thoroughly.",
    "Place the tomatoes, cucumber, red onion, and Kalamata olives in a large serving bowl.",
    "Add the fresh parsley, fresh mint, and dried oregano.",
    "In a small bowl, whisk together the extra virgin olive oil, lemon juice, sumac, and optional pomegranate molasses.",
    "Taste the dressing before adding it to the salad. It should be bright, tangy, herbaceous, and only subtly fruity rather than sweet.",
    "Pour the dressing over the vegetables and gently toss so the vegetables remain intact.",
    "Add the feta cheese last and fold it through gently so the pieces remain visible.",
    "Taste and adjust the seasoning carefully. Add black pepper and only as much salt as needed.",
    "Serve immediately for the crispest texture and brightest flavor.",
  ],

  nutrition: {
    calories: 240,
    protein: "7 g",
    carbs: "10 g",
    fat: "19 g",
    fiber: "3 g",
    sugar: "5 g",
    sodium: "480 mg",
  },

  healthBenefits: [
    "Provides antioxidant-rich vegetables such as tomatoes and herbs.",
    "Provides vitamin C and other micronutrients from fresh vegetables and lemon.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "Feta cheese contributes protein and calcium.",
    "Fresh vegetables and olives contribute dietary fiber and a variety of plant compounds.",
    "A vegetable-forward salad can add freshness, fiber, and nutrient density to a balanced Mediterranean-style meal.",
  ],

  keywords: [
    "Greek Salad",
    "Mediterranean Salad",
    "Healthy Greek Salad",
    "Lebanese Inspired Salad",
    "Mediterranean Vegetable Salad",
    "Healthy Mediterranean Food",
    "Fresh Salad",
    "Easy Greek Salad Recipe",
  ],

  tags: [
    "Salad",
    "Greek",
    "Mediterranean",
    "Levantine Inspired",
    "Vegetarian",
    "Healthy",
    "Quick",
    "Fresh",
  ],

  featured: true,
};
