import { Recipe } from "@/types/recipe";

export const tabboulehSalad: Recipe = {
  datePublished: "2026-07-16",
  id: 6,

  title: "Tabbouleh",

  slug: "tabbouleh",

  description:
    "A refreshing Lebanese parsley salad made with fresh herbs, tomatoes, fine bulgur wheat, lemon juice, and extra virgin olive oil.",

  longDescription:
    "Tabbouleh is a classic Lebanese salad in which fresh parsley takes center stage, supported by mint, ripe tomatoes, fine bulgur wheat, green onions, lemon juice, and extra virgin olive oil. Bright, herbaceous, and naturally rich in plant foods, it makes a refreshing side dish or light Mediterranean meal.",

  image: "/images/recipes/tabbouleh-salad.webp",

  imageAlt:
    "Fresh Lebanese tabbouleh salad with finely chopped parsley, mint, tomatoes, green onions, fine bulgur, and lemon dressing.",

  cuisine: "Lebanese",

  category: "salads",

  vegan: true,

  vegetarian: true,

  prepTime: "20 mins",

  cookTime: "0 mins",

  totalTime: "20 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "fresh parsley",
      note: "Finely chopped and thoroughly dried.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "fresh mint leaves",
      note: "Finely chopped.",
    },
    {
      amount: 2,
      unit: "medium",
      name: "ripe tomatoes",
      note: "Finely diced and drained of excess liquid.",
    },
    {
      amount: 2,
      unit: "",
      name: "green onions",
      note: "Finely sliced.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fine bulgur wheat",
      note: "Rinsed and soaked until tender, then drained thoroughly.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add more after tasting if you prefer a brighter, sharper flavor.",
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
  ],

  instructions: [
    "Rinse the fine bulgur, cover it with cold water, and soak for about 15 minutes until tender.",
    "Drain the bulgur thoroughly and press out excess water so it does not make the salad watery.",
    "Wash and dry the parsley, mint, tomatoes, and green onions thoroughly.",
    "Finely chop the parsley and mint, keeping the herbs delicate rather than crushing them.",
    "Finely dice the tomatoes and drain any excess liquid.",
    "Finely slice the green onions.",
    "Place the parsley, mint, tomatoes, green onions, and drained bulgur in a large bowl.",
    "Whisk together the extra virgin olive oil, lemon juice, salt, and black pepper.",
    "Pour the dressing over the salad and gently mix until the ingredients are evenly coated.",
    "Taste and adjust the lemon juice, olive oil, salt, or pepper as needed.",
    "Allow the tabbouleh to rest in the refrigerator for about 15 minutes before serving so the flavors can come together.",
  ],

  nutrition: {
    calories: 170,
    protein: "4 g",
    carbs: "16 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "3 g",
    sodium: "250 mg",
  },

  healthBenefits: [
    "Excellent source of Vitamin K",
    "Rich in antioxidants",
    "Supports heart health",
    "High in dietary fiber",
    "Low in saturated fat",
    "Good source of Vitamin C",
  ],

  keywords: [
    "Tabbouleh",
    "Tabbouleh recipe",
    "Lebanese salad",
    "Healthy Mediterranean salad",
    "Parsley salad",
  ],

  tags: [
    "salad",
    "healthy",
    "vegetarian",
    "vegan",
    "Mediterranean",
    "Lebanese",
    "fresh",
  ],

  featured: true,
};
