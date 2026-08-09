import { Recipe } from "@/types/recipe";

export const cucumberHummusBites: Recipe = {
  id: 58,

  title: "Cucumber Hummus Bites",

  slug: "cucumber-hummus-bites",

  description:
    "Fresh cucumber rounds topped with creamy hummus, cherry tomatoes, feta cheese, Kalamata olives, and herbs for a refreshing Mediterranean snack or appetizer.",

  longDescription:
    "Cucumber Hummus Bites are light, colorful Mediterranean appetizers built on crisp cucumber rounds instead of crackers. Each bite combines creamy hummus with juicy cherry tomatoes, salty feta, Kalamata olives, fresh parsley, and a light drizzle of extra virgin olive oil. They come together in minutes and work well for parties, mezze platters, or a simple healthy snack.",

  image: "/images/recipes/cucumber-hummus-bites.webp",

  imageAlt:
    "Cucumber rounds topped with creamy hummus, cherry tomatoes, feta cheese, Kalamata olives, parsley, and smoked paprika.",

  cuisine: "Lebanese",

  category: "snack",

  vegetarian: true,

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "large",
      name: "cucumbers",
      note: "Cut into rounds about 1/2 inch thick.",
    },
    {
      amount: 1,
      unit: "cup",
      name: "classic hummus",
      note: "Use a thick hummus so it stays neatly on the cucumber slices.",
    },
    {
      amount: 8,
      unit: "cherry tomatoes",
      name: "cherry tomatoes",
      note: "Quartered.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "feta cheese",
      note: "Crumbled.",
    },
    {
      amount: 8,
      unit: "Kalamata olives",
      name: "Kalamata olives",
      note: "Pitted and sliced.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "smoked paprika",
      note: "Use lightly so it complements rather than overwhelms the hummus.",
    },
    {
      amount: "",
      unit: "",
      name: "freshly ground black pepper",
      note: "To taste.",
    },
  ],

  instructions: [
    "Wash and thoroughly dry the cucumbers before slicing.",
    "Slice the cucumbers into rounds about 1/2 inch thick so they are sturdy enough to hold the toppings.",
    "Arrange the cucumber rounds in a single layer on a serving platter.",
    "Spoon about one teaspoon of hummus onto each cucumber round and spread it gently without covering the entire edge.",
    "Place a piece of quartered cherry tomato on each bite.",
    "Sprinkle the bites with crumbled feta cheese.",
    "Add a few slices of Kalamata olive to each cucumber bite.",
    "Drizzle lightly with extra virgin olive oil.",
    "Finish with chopped parsley, a light sprinkle of smoked paprika, and freshly ground black pepper.",
    "Serve immediately for the crispest texture, or chill briefly before serving.",
  ],

  nutrition: {
    calories: 120,
    protein: "4 g",
    carbs: "9 g",
    fat: "8 g",
    fiber: "3 g",
    sugar: "3 g",
    sodium: "220 mg",
  },

  healthBenefits: [
    "Provides dietary fiber from hummus, cucumber, and vegetables.",
    "Hummus contributes plant-based protein and healthy fats.",
    "Cucumber provides water and refreshing volume with relatively few calories.",
    "Tomatoes and fresh herbs provide vitamin C and antioxidant compounds.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "A vegetable-forward appetizer can add variety and nutrient density to a Mediterranean-style meal.",
  ],

  keywords: [
    "Cucumber Hummus Bites",
    "Healthy Appetizer",
    "Mediterranean Snack",
    "Cucumber Hummus Appetizer",
    "Easy Party Appetizer",
    "Healthy Mezze",
  ],

  tags: [
    "snack",
    "appetizer",
    "Mediterranean",
    "cucumber",
    "hummus",
    "healthy",
    "vegetarian",
    "low-carb",
  ],

  featured: true,
};
