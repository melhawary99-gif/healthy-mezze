import { Recipe } from "@/types/recipe";

export const roastedCauliflowerTahini: Recipe = {
  id: 69,

  title: "Roasted Cauliflower with Tahini Sauce",

  slug: "roasted-cauliflower-tahini",

  description:
    "Tender roasted cauliflower florets topped with creamy tahini sauce, toasted pine nuts, fresh parsley, and a squeeze of lemon for a flavorful Lebanese mezze with Mediterranean character.",

  longDescription:
    "Roasted Cauliflower with Tahini Sauce is a simple Lebanese mezze that turns humble cauliflower into a deeply flavorful Mediterranean dish. High-heat roasting develops golden edges and a naturally sweet, nutty flavor while keeping the center tender. The cauliflower is finished with a smooth tahini sauce brightened with lemon and garlic, then topped with toasted pine nuts, parsley, and paprika. The result is creamy, savory, nutty, and fresh without requiring a heavy sauce or complicated preparation.",

  image: "/images/recipes/roasted-cauliflower-tahini.webp",

  imageAlt:
    "Golden roasted cauliflower topped with creamy tahini sauce, toasted pine nuts, fresh parsley, and lemon wedges.",

  cuisine: "Lebanese",

  category: "mezze",

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "30 mins",

  totalTime: "45 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "medium",
      name: "cauliflower",
      note: "Cut into similar-sized florets so they roast evenly. Dry thoroughly after washing.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Use enough to lightly coat the florets without making them greasy.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust after roasting and again after adding the tahini sauce.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
      note: "Adds warm, earthy flavor that complements the cauliflower and tahini.",
    },
    {
      amount: 0.33,
      unit: "cup",
      name: "tahini",
      note: "Stir the tahini well before measuring because the sesame solids and oil can separate.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add gradually and taste; the amount can be adjusted depending on the tahini.",
    },
    {
      amount: 1,
      unit: "clove",
      name: "garlic",
      note: "Minced very finely or grated for a smooth sauce.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "water",
      note: "Add gradually. You may need more or less depending on the thickness of the tahini.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley",
      note: "Finely chopped and added just before serving.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "pine nuts",
      note: "Toast gently until lightly golden; they can burn quickly.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "paprika",
      note: "Sprinkle lightly over the finished dish for color and gentle warmth.",
    },
    {
      amount: 1,
      unit: "",
      name: "lemon wedges",
      note: "Serve alongside the cauliflower for fresh lemon juice at the table.",
    },
  ],

  instructions: [
    "Preheat the oven to 425°F (220°C) and position a rack in the center of the oven.",
    "Cut the cauliflower into medium-sized florets, keeping the pieces as similar in size as possible. Rinse if needed and dry very thoroughly so excess moisture does not prevent browning.",
    "Place the cauliflower on a large baking tray. Add the olive oil, salt, black pepper, and cumin, then toss thoroughly until the florets are lightly and evenly coated.",
    "Spread the cauliflower into a single layer with space between the pieces. Avoid overcrowding the tray because trapped steam can make the cauliflower soft instead of roasted.",
    "Roast for 25–30 minutes, turning the florets halfway through, until the edges are deeply golden and lightly caramelized and the thickest stems are tender when pierced with a fork.",
    "While the cauliflower roasts, whisk the tahini, lemon juice, and minced garlic together. The mixture may suddenly become very thick; this is normal.",
    "Gradually whisk in the water, one spoonful at a time, until the tahini becomes smooth, creamy, and easily pourable. Taste and adjust the lemon or salt if needed.",
    "Toast the pine nuts gently in a dry skillet over low to medium heat, stirring frequently, until lightly golden and fragrant. Remove them from the heat immediately so they do not continue browning in the hot pan.",
    "Transfer the roasted cauliflower to a serving platter and drizzle generously with the tahini sauce.",
    "Finish with the chopped parsley, toasted pine nuts, and a light dusting of paprika. Serve immediately with fresh lemon wedges.",
  ],

  nutrition: {
    calories: 220,
    protein: "7 g",
    carbs: "15 g",
    fat: "16 g",
    fiber: "5 g",
    sugar: "4 g",
    sodium: "250 mg",
  },

  healthBenefits: [
    "Excellent source of vitamin C from cauliflower.",
    "Provides dietary fiber that supports digestive health.",
    "Cauliflower contains naturally occurring antioxidant compounds.",
    "Tahini provides healthy unsaturated fats and plant-based minerals.",
    "Sesame tahini is a useful source of calcium and magnesium.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "Naturally vegetarian and gluten-free when prepared with gluten-free ingredients.",
  ],

  keywords: [
    "Roasted Cauliflower",
    "Tahini Sauce",
    "Lebanese Cauliflower",
    "Healthy Mezze",
    "Mediterranean Appetizer",
    "Roasted Cauliflower Tahini",
  ],

  tags: [
    "mezze",
    "Lebanese",
    "cauliflower",
    "tahini",
    "vegetarian",
    "gluten-free",
    "healthy",
    "Mediterranean",
  ],

  featured: true,
};
