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
{
    amount: 4,
    unit: "medium",
    name: "beetroots"
  },
{
    amount: 1,
    unit: "",
    name: "½ cup crumbled feta cheese"
  },
{
    amount: 1,
    unit: "",
    name: "⅓ cup chopped walnuts"
  },
{
    amount: 1,
    unit: "",
    name: "¼ cup chopped fresh parsley"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh mint"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "tsp",
    name: "honey"
  },
{
    amount: 1,
    unit: "",
    name: "½ tsp salt"
  },
{
    amount: 1,
    unit: "",
    name: "¼ tsp black pepper"
  }
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