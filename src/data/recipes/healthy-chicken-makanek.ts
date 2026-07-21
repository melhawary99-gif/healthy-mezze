import { Recipe } from "@/types/recipe";

export const healthyChickenMakanek: Recipe = {
  id: 68,

  title: "Healthy Chicken Makanek",

  slug: "healthy-chicken-makanek",

  description:
    "Lean homemade Lebanese-style chicken sausages seasoned with garlic, parsley, lemon juice, and warm Mediterranean spices, then lightly pan-seared for a healthy mezze.",

  longDescription:
    "Makanek are small Lebanese sausages traditionally prepared with beef or lamb. This healthier version uses lean ground chicken while preserving the authentic flavor profile of garlic, coriander, cinnamon, allspice, and fresh lemon juice. They're lightly cooked in olive oil instead of excess fat, making them a protein-rich appetizer or mezze that pairs perfectly with fresh vegetables, hummus, and warm whole wheat pita.",

  image: "/images/recipes/healthy-chicken-makanek.jpg",

  imageAlt:
    "Healthy Lebanese chicken makanek garnished with parsley and served with lemon wedges.",

  cuisine: "Lebanese",

  category: "Mezze",

  prepTime: "20 mins",

  cookTime: "15 mins",

  totalTime: "35 mins",

  servings: 4,

  difficulty: "Medium",

  ingredients: [
{
    amount: 500,
    unit: "g",
    name: "lean ground chicken"
  },
{
    amount: 3,
    unit: "garlic",
    name: "cloves, minced"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh parsley, finely chopped"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "fresh lemon juice"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground coriander"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground allspice"
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
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.25,
    unit: "tsp",
    name: "cayenne pepper (optional)"
  }
],

instructions: [
    "Combine the ground chicken with all herbs, spices, garlic, lemon juice, and olive oil.",
    "Mix thoroughly until well combined.",
    "Cover and refrigerate for at least 30 minutes.",
    "Shape the mixture into small finger-length sausages.",
    "Heat a non-stick skillet over medium heat.",
    "Cook the sausages for 12–15 minutes, turning frequently until evenly browned and fully cooked.",
    "Transfer to a serving platter.",
    "Garnish with fresh parsley and lemon wedges.",
    "Serve immediately with whole wheat pita or fresh vegetables."
  ],

  nutrition: {
    calories: 240,
    protein: "28 g",
    carbs: "3 g",
    fat: "13 g",
    fiber: "1 g",
    sugar: "1 g",
    sodium: "340 mg"
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Lower in saturated fat than traditional makanek",
    "Rich in vitamin B6 and niacin",
    "Contains immune-supporting garlic",
    "Olive oil provides heart-healthy fats",
    "Naturally low in carbohydrates",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Healthy Chicken Makanek",
    "Lebanese Chicken Sausage",
    "Healthy Mezze",
    "Mediterranean Chicken",
    "High Protein Appetizer"
  ],

  tags: [
    "mezze",
    "Lebanese",
    "chicken",
    "high-protein",
    "healthy",
    "Mediterranean",
    "appetizer",
    "gluten-free"
  ],

  featured: true
};