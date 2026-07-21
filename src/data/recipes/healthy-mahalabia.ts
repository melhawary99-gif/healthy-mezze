import { Recipe } from "@/types/recipe";

export const healthyMahalabia: Recipe = {
  id: 74,

  title: "Healthy Mahalabia (Egyptian Milk Pudding)",

  slug: "healthy-mahalabia",

  description:
    "A light and creamy Egyptian milk pudding made with low-fat milk, naturally sweetened with honey, delicately flavored with vanilla and rose water, then topped with pistachios.",

  longDescription:
    "Mahalabia is a beloved dessert enjoyed throughout Egypt and the Middle East. This healthier version uses low-fat milk, a small amount of honey for natural sweetness, and cornstarch for its silky texture instead of heavy cream. Finished with fragrant rose water, cinnamon, and chopped pistachios, it's an elegant dessert that's both satisfying and light.",

  image: "/images/recipes/healthy-mahalabia.jpg",

  imageAlt:
    "Creamy Egyptian mahalabia served in glass cups with chopped pistachios, cinnamon, and dried rose petals.",

  cuisine: "Egyptian",

  category: "Desserts",

  prepTime: "10 mins",

  cookTime: "15 mins",

  totalTime: "25 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
{
    amount: 4,
    unit: "cups",
    name: "low-fat milk"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "cornstarch"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "cold water"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "honey"
  },
{
    amount: 1,
    unit: "tsp",
    name: "vanilla extract"
  },
{
    amount: 1,
    unit: "tsp",
    name: "rose water"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "orange blossom water (optional)"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped pistachios"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cinnamon"
  },
{
    amount: 1,
    unit: "",
    name: "Dried edible rose petals for garnish (optional)"
  }
],

instructions: [
    "In a small bowl, dissolve the cornstarch in the cold water until smooth.",
    "Heat the milk in a saucepan over medium heat until warm but not boiling.",
    "Whisk in the cornstarch mixture.",
    "Continue stirring constantly until the pudding thickens.",
    "Remove from the heat.",
    "Stir in the honey, vanilla, rose water, and orange blossom water.",
    "Pour into individual serving bowls or glasses.",
    "Allow to cool to room temperature.",
    "Refrigerate for at least 2 hours until fully set.",
    "Before serving, garnish with pistachios, cinnamon, and rose petals."
  ],

  nutrition: {
    calories: 145,
    protein: "7 g",
    carbs: "20 g",
    fat: "4 g",
    fiber: "1 g",
    sugar: "12 g",
    sodium: "95 mg"
  },

  healthBenefits: [
    "Excellent source of calcium",
    "Provides high-quality protein",
    "Lower in fat than traditional milk puddings",
    "Uses honey instead of refined sugar",
    "Pistachios provide healthy fats and antioxidants",
    "Rose water adds flavor without extra calories",
    "Naturally gluten-free"
  ],

  keywords: [
    "Healthy Mahalabia",
    "Egyptian Milk Pudding",
    "Healthy Egyptian Dessert",
    "Mediterranean Dessert",
    "Rose Water Pudding"
  ],

  tags: [
    "dessert",
    "Egyptian",
    "mahalabia",
    "milk pudding",
    "healthy",
    "gluten-free",
    "Mediterranean",
    "vegetarian"
  ],

  featured: true
};