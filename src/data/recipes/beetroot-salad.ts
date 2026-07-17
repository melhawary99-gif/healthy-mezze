import { Recipe } from "@/types/recipe";

export const beetrootSalad: Recipe = {
  id: 8,

  title: "Mediterranean Beetroot Salad",

  slug: "mediterranean-beetroot-salad",

  description:
    "A vibrant beetroot salad with feta cheese, walnuts, fresh herbs, and a light lemon vinaigrette.",

  longDescription:
    "This Mediterranean Beetroot Salad combines naturally sweet roasted beets with creamy feta cheese, crunchy walnuts, fresh parsley, and mint. Finished with a simple olive oil and lemon dressing, it's packed with antioxidants, vitamins, and healthy fats, making it a nutritious appetizer, side dish, or light lunch.",

  image: "/images/recipes/beetroot-salad.jpg",

  imageAlt:
    "Mediterranean beetroot salad with roasted beets, feta cheese, walnuts, parsley, and mint.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "4 medium beetroots",
    "½ cup crumbled feta cheese",
    "⅓ cup chopped walnuts",
    "¼ cup chopped fresh parsley",
    "2 tbsp chopped fresh mint",
    "3 tbsp extra virgin olive oil",
    "2 tbsp fresh lemon juice",
    "1 tsp honey",
    "½ tsp salt",
    "¼ tsp black pepper"
  ],

  instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Wrap each beetroot in aluminum foil.",
    "Roast for 40–45 minutes until fork tender.",
    "Allow the beets to cool, then peel and cut into cubes.",
    "Arrange the beetroot in a serving bowl.",
    "Add the feta cheese, walnuts, parsley, and mint.",
    "Whisk together the olive oil, lemon juice, honey, salt, and pepper.",
    "Pour the dressing over the salad.",
    "Toss gently to combine.",
    "Serve chilled or at room temperature."
  ],

  nutrition: {
    calories: 235,
    protein: "7 g",
    carbs: "18 g",
    fat: "16 g",
    fiber: "5 g",
    sugar: "11 g",
    sodium: "300 mg"
  },

  healthBenefits: [
    "Rich in antioxidants",
    "Supports heart health",
    "High in dietary fiber",
    "Excellent source of folate",
    "Contains healthy omega-3 fats from walnuts",
    "Naturally gluten-free"
  ],

  keywords: [
    "Beetroot Salad",
    "Mediterranean Beet Salad",
    "Healthy Beetroot Recipe",
    "Roasted Beet Salad",
    "Feta Beet Salad"
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegetarian",
    "beetroot",
    "gluten-free",
    "meal prep"
  ],

  featured: true
};