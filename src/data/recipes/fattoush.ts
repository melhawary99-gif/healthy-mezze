import { Recipe } from "@/types/recipe";

export const fattoush: Recipe = {
  id: 2,

  title: "Fattoush",

  slug: "fattoush",

  description:
    "A traditional Lebanese salad made with crisp vegetables, fresh herbs, toasted pita bread, and a tangy sumac dressing.",

  longDescription:
    "Fattoush is one of Lebanon's most iconic salads. It combines fresh seasonal vegetables with crunchy toasted pita bread and a bright lemon-sumac dressing. Rich in fiber, vitamins, and antioxidants, it's a refreshing side dish or light meal.",

  image: "/images/recipes/fattoush.jpg",

  imageAlt:
    "Traditional Lebanese Fattoush salad with toasted pita bread, tomatoes, cucumbers, lettuce, parsley, mint and sumac.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "20 mins",

  cookTime: "5 mins",

  totalTime: "25 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 tomatoes, diced",
    "1 cucumber, diced",
    "1 romaine lettuce, chopped",
    "4 radishes, sliced",
    "1 green bell pepper, diced",
    "3 green onions, sliced",
    "½ cup chopped parsley",
    "¼ cup chopped fresh mint",
    "2 pita breads, toasted and broken into pieces",
    "3 tbsp extra virgin olive oil",
    "2 tbsp lemon juice",
    "1 tsp sumac",
    "Salt to taste",
    "Black pepper to taste"
  ],

  instructions: [
    "Toast the pita bread until golden and crisp.",
    "Break the toasted pita into bite-sized pieces.",
    "Wash and prepare all vegetables.",
    "Combine vegetables and herbs in a large bowl.",
    "Whisk together olive oil, lemon juice, sumac, salt and pepper.",
    "Pour the dressing over the salad.",
    "Add the toasted pita just before serving.",
    "Toss gently and serve immediately."
  ],

  nutrition: {
    calories: 220,
    protein: "5 g",
    carbs: "24 g",
    fat: "12 g",
    fiber: "5 g",
    sugar: "6 g",
    sodium: "330 mg"
  },

  healthBenefits: [
    "High in dietary fiber",
    "Rich in antioxidants",
    "Excellent source of Vitamin C",
    "Supports digestive health",
    "Heart-friendly olive oil"
  ],

  keywords: [
    "Fattoush",
    "Lebanese salad",
    "Healthy Mediterranean salad",
    "Fattoush recipe",
    "Traditional Lebanese food"
  ],

  tags: [
    "salad",
    "healthy",
    "Lebanese",
    "vegetarian",
    "Mediterranean"
  ],

  featured: true
};