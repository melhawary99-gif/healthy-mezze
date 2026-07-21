import { Recipe } from "@/types/recipe";

export const tomatoBasilSoup: Recipe = {
  id: 15,

  title: "Roasted Tomato Basil Soup",

  slug: "roasted-tomato-basil-soup",

  description:
    "A creamy Mediterranean tomato soup made with roasted tomatoes, garlic, fresh basil, and extra virgin olive oil.",

  longDescription:
    "This Roasted Tomato Basil Soup brings together sweet roasted tomatoes, garlic, onions, and fresh basil in a comforting Mediterranean-inspired dish. Roasting the vegetables enhances their natural sweetness, while blending them creates a silky texture without needing heavy cream. Rich in antioxidants and vitamins, it's an ideal light lunch or dinner served with crusty whole-grain bread.",

  image: "/images/recipes/tomato-basil-soup.jpg",

  imageAlt:
    "Creamy roasted tomato basil soup garnished with fresh basil leaves and olive oil.",

  cuisine: "Lebanese",

  category: "Soups",

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 2,
    unit: "kg",
    name: "ripe tomatoes, halved"
  },
{
    amount: 1,
    unit: "medium",
    name: "onion, quartered"
  },
{
    amount: 6,
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
    amount: 0.5,
    unit: "cup",
    name: "fresh basil leaves"
  },
{
    amount: 1,
    unit: "tsp",
    name: "dried oregano"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "freshly ground black pepper"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "balsamic vinegar (optional)"
  },
{
    amount: 1,
    unit: "",
    name: "Fresh basil leaves for garnish"
  }
],

instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Arrange the tomatoes, onion, and garlic on a baking tray.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Roast for 35–40 minutes until the tomatoes are caramelized.",
    "Transfer the roasted vegetables to a large soup pot.",
    "Add the vegetable broth and oregano.",
    "Bring to a gentle simmer for 10 minutes.",
    "Add the fresh basil leaves.",
    "Blend the soup until completely smooth using an immersion blender or countertop blender.",
    "Stir in the balsamic vinegar if using.",
    "Taste and adjust seasoning.",
    "Serve hot with fresh basil and a drizzle of olive oil."
  ],

  nutrition: {
    calories: 170,
    protein: "4 g",
    carbs: "18 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "10 g",
    sodium: "430 mg"
  },

  healthBenefits: [
    "Rich in lycopene antioxidants",
    "Excellent source of vitamin C",
    "Supports heart health",
    "Naturally low in calories",
    "Good source of dietary fiber",
    "Contains anti-inflammatory herbs"
  ],

  keywords: [
    "Tomato Basil Soup",
    "Roasted Tomato Soup",
    "Mediterranean Tomato Soup",
    "Healthy Tomato Soup",
    "Easy Tomato Soup"
  ],

  tags: [
    "soup",
    "Mediterranean",
    "vegetarian",
    "healthy",
    "roasted vegetables",
    "meal prep",
    "comfort food"
  ],

  featured: true
};