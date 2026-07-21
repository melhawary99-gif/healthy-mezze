import { Recipe } from "@/types/recipe";

export const cauliflowerSoup: Recipe = {
  id: 20,

  title: "Creamy Cauliflower Soup",

  slug: "creamy-cauliflower-soup",

  description:
    "A silky Mediterranean cauliflower soup with roasted cauliflower, garlic, onions, herbs, and extra virgin olive oil.",

  longDescription:
    "This Creamy Cauliflower Soup transforms simple ingredients into a rich and velvety Mediterranean-inspired dish. Roasting the cauliflower enhances its natural sweetness while garlic, onions, and herbs provide deep flavor. The soup is blended until smooth without using cream, making it naturally dairy-free while remaining wonderfully creamy. It's a nutritious, low-calorie meal perfect for lunch or dinner.",

  image: "/images/recipes/cauliflower-soup.webp",

  imageAlt:
    "Creamy roasted cauliflower soup garnished with parsley, cracked black pepper, roasted cauliflower florets, and olive oil.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 1,
    unit: "large",
    name: "cauliflower, cut into florets"
  },
{
    amount: 1,
    unit: "medium",
    name: "onion, chopped"
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
    name: "dried thyme"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "ground cumin"
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
    name: "fresh parsley, chopped"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "lemon juice"
  },
{
    amount: 1,
    unit: "",
    name: "Extra virgin olive oil for serving"
  }
],

instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Arrange the cauliflower, onion, and garlic on a baking tray.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Roast for 35 minutes until golden and tender.",
    "Transfer the roasted vegetables to a large soup pot.",
    "Add the vegetable broth, thyme, and cumin.",
    "Bring to a gentle simmer for 10 minutes.",
    "Blend until completely smooth using an immersion blender or countertop blender.",
    "Stir in the lemon juice.",
    "Taste and adjust seasoning.",
    "Serve warm with chopped parsley and a drizzle of extra virgin olive oil."
  ],

  nutrition: {
    calories: 180,
    protein: "6 g",
    carbs: "18 g",
    fat: "10 g",
    fiber: "6 g",
    sugar: "6 g",
    sodium: "420 mg"
  },

  healthBenefits: [
    "Excellent source of vitamin C",
    "Rich in antioxidants",
    "Supports immune health",
    "High in dietary fiber",
    "Naturally low in calories",
    "Dairy-free and heart healthy"
  ],

  keywords: [
    "Cauliflower Soup",
    "Creamy Cauliflower Soup",
    "Mediterranean Soup",
    "Healthy Cauliflower Soup",
    "Roasted Cauliflower Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "vegan",
    "cauliflower",
    "healthy",
    "low calorie",
    "meal prep"
  ],

  featured: true
};