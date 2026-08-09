import { Recipe } from "@/types/recipe";

export const beetrootSalad: Recipe = {
  id: 10,

  title: "Mediterranean Beetroot Salad",

  slug: "mediterranean-beetroot-salad",

  description:
    "A vibrant Mediterranean beetroot salad with roasted beets, creamy feta, walnuts, fresh herbs, and a bright lemon vinaigrette.",

  longDescription:
    "This Mediterranean Beetroot Salad combines naturally sweet roasted beets with creamy feta cheese, crunchy walnuts, fresh parsley, and mint. A simple lemon and olive oil dressing with a touch of honey brings the earthy sweetness of the beets into balance. It makes a colorful appetizer, side dish, or light Mediterranean meal.",

  image: "/images/recipes/beetroot-salad.webp",

  imageAlt:
    "Mediterranean beetroot salad with roasted beets, feta cheese, walnuts, fresh parsley, and mint.",

  cuisine: "Mediterranean",

  category: "salads",

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 4,
      unit: "medium",
      name: "beetroots",
      note: "Trimmed and scrubbed well before roasting.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "feta cheese",
      note: "Crumbled or cut into small pieces.",
    },
    {
      amount: 0.33,
      unit: "cup",
      name: "walnuts",
      note: "Chopped. Lightly toasted if desired.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh mint",
      note: "Finely chopped.",
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
      note: "Add gradually and adjust after tasting.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "honey",
      note: "Adds a subtle sweetness to balance the lemon and earthy beetroot.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust carefully because feta can already be salty.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "freshly ground black pepper",
    },
  ],

  instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Trim and scrub the beetroots thoroughly, then wrap each beetroot loosely in aluminum foil.",
    "Roast the beetroots for about 40–45 minutes, or until a knife or fork slides easily into the center.",
    "Allow the roasted beetroots to cool enough to handle, then peel away the skins and cut the beets into bite-sized cubes.",
    "Arrange the beetroot pieces in a large serving bowl and allow them to cool further if they are still warm.",
    "Add the feta, chopped walnuts, parsley, and mint.",
    "Whisk together the extra virgin olive oil, lemon juice, honey, salt, and black pepper until the dressing is well combined.",
    "Taste the dressing and adjust the lemon, honey, or seasoning as needed.",
    "Pour the dressing over the beetroot salad.",
    "Gently toss to coat the ingredients while keeping the feta and beetroot pieces intact.",
    "Serve chilled or at room temperature.",
  ],

  nutrition: {
    calories: 235,
    protein: "7 g",
    carbs: "18 g",
    fat: "16 g",
    fiber: "5 g",
    sugar: "11 g",
    sodium: "300 mg",
  },

  healthBenefits: [
    "Rich in antioxidant compounds from beetroot and fresh herbs.",
    "Provides dietary fiber from beetroot, herbs, and walnuts.",
    "Beetroot provides folate and other micronutrients.",
    "Walnuts provide unsaturated fats, including plant-based omega-3 fatty acids.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "Naturally gluten-free when prepared with certified gluten-free ingredients.",
  ],

  keywords: [
    "Beetroot Salad",
    "Mediterranean Beet Salad",
    "Healthy Beetroot Recipe",
    "Roasted Beet Salad",
    "Feta Beet Salad",
    "Beetroot Feta Salad",
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegetarian",
    "beetroot",
    "gluten-free",
    "meal prep",
  ],

  featured: true,
};
