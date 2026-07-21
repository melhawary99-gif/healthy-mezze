import { Recipe } from "@/types/recipe";

export const roastedPumpkinSoup: Recipe = {
  id: 17,

  title: "Roasted Pumpkin Soup",

  slug: "roasted-pumpkin-soup",

  description:
    "A creamy Mediterranean pumpkin soup made with roasted pumpkin, carrots, garlic, warm spices, and olive oil.",

  longDescription:
    "This Roasted Pumpkin Soup combines naturally sweet roasted pumpkin with carrots, onions, garlic, and Mediterranean herbs to create a velvety, nourishing soup. Roasting the vegetables intensifies their flavor while blending them creates a creamy texture without dairy. Finished with a drizzle of extra virgin olive oil and fresh parsley, it's a comforting meal that's perfect for cooler weather.",

  image: "/images/recipes/roasted-pumpkin-soup.jpg",

  imageAlt:
    "Creamy roasted pumpkin soup garnished with parsley, pumpkin seeds, and olive oil.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1.5,
    unit: "kg",
    name: "pumpkin, peeled and cubed"
  },
{
    amount: 1,
    unit: "",
    name: "2 carrots, sliced"
  },
{
    amount: 1,
    unit: "medium",
    name: "onion, quartered"
  },
{
    amount: 5,
    unit: "garlic",
    name: "cloves"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 4,
    unit: "cups",
    name: "vegetable broth"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "ground cinnamon"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped fresh parsley"
  },
{
    amount: 1,
    unit: "",
    name: "Roasted pumpkin seeds for garnish (optional)"
  }
],

instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Arrange the pumpkin, carrots, onion, and garlic on a baking tray.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Roast for 35–40 minutes until tender and lightly caramelized.",
    "Transfer the roasted vegetables to a large soup pot.",
    "Add the vegetable broth, cumin, cinnamon, and paprika.",
    "Bring to a gentle simmer for 10 minutes.",
    "Blend until completely smooth using an immersion blender or countertop blender.",
    "Taste and adjust seasoning.",
    "Serve warm garnished with parsley, roasted pumpkin seeds, and a drizzle of olive oil."
  ],

  nutrition: {
    calories: 190,
    protein: "4 g",
    carbs: "24 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "9 g",
    sodium: "410 mg"
  },

  healthBenefits: [
    "Excellent source of vitamin A",
    "Rich in beta-carotene",
    "Supports eye health",
    "High in antioxidants",
    "Good source of dietary fiber",
    "Naturally dairy-free and low in saturated fat"
  ],

  keywords: [
    "Roasted Pumpkin Soup",
    "Mediterranean Pumpkin Soup",
    "Healthy Pumpkin Soup",
    "Creamy Pumpkin Soup",
    "Easy Pumpkin Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "vegan",
    "pumpkin",
    "healthy",
    "meal prep",
    "comfort food"
  ],

  featured: true
};