import { Recipe } from "@/types/recipe";

export const authenticSahlab: Recipe = {
  id: 83,

  title: "Authentic Sahlab (Healthy Version)",

  slug: "authentic-sahlab",

  description:
    "A warm and creamy Middle Eastern milk drink flavored with orange blossom water, honey, cinnamon, pistachios, and coconut.",

  longDescription:
    "Sahlab is one of the Middle East's most cherished winter beverages, enjoyed throughout Egypt and Lebanon. Traditionally sold by street vendors during the colder months, this comforting drink is known for its velvety texture and fragrant aroma. This healthier version uses low-fat milk, honey instead of refined sugar, and authentic toppings of pistachios, shredded coconut, and cinnamon for a nourishing and satisfying drink.",

  image: "/images/recipes/authentic-sahlab.webp",

  imageAlt:
    "A warm mug of authentic Middle Eastern sahlab topped with pistachios, shredded coconut, cinnamon, and served with a cinnamon stick.",

  cuisine: "Egyptian",

  category: "Drinks",

  prepTime: "5 mins",

  cookTime: "10 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
{
    amount: 4,
    unit: "cups",
    name: "low-fat milk"
  },
{
    amount: 3,
    unit: "tbsp",
    name: "sahlab powder"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "honey"
  },
{
    amount: 1,
    unit: "tsp",
    name: "orange blossom water"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "vanilla extract"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "chopped pistachios"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "unsweetened shredded coconut"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cinnamon"
  },
{
    amount: 1,
    unit: "",
    name: "Ground cinnamon for garnish"
  }
],

instructions: [
    "In a saucepan, whisk together the cold milk and sahlab powder until completely smooth.",
    "Place over medium heat and stir constantly.",
    "Cook until the mixture thickens to a creamy consistency, about 8–10 minutes.",
    "Stir in the honey, vanilla extract, and orange blossom water.",
    "Remove from the heat.",
    "Pour into serving mugs.",
    "Top with chopped pistachios, shredded coconut, and ground cinnamon.",
    "Serve immediately while warm."
  ],

  nutrition: {
    calories: 175,
    protein: "9 g",
    carbs: "23 g",
    fat: "6 g",
    fiber: "1 g",
    sugar: "17 g",
    sodium: "110 mg"
  },

  healthBenefits: [
    "Excellent source of calcium",
    "Provides high-quality protein",
    "Lower in fat than traditional recipes",
    "Naturally sweetened with honey",
    "Pistachios contribute healthy fats and antioxidants",
    "A warming, comforting beverage for cold weather",
    "Contains authentic Middle Eastern flavors"
  ],

  keywords: [
    "Sahlab",
    "Healthy Sahlab",
    "Middle Eastern Milk Drink",
    "Egyptian Drink",
    "Lebanese Drink"
  ],

  tags: [
    "drink",
    "Egyptian",
    "Lebanese",
    "sahlab",
    "winter",
    "healthy",
    "vegetarian",
    "milk"
  ],

  featured: true
};