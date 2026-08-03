import { Recipe } from "@/types/recipe";

export const hummusPowerBowl: Recipe = {
  id: 105,
  title: "Hummus Power Bowl",
  slug: "hummus-power-bowl",
  description:
    "A wholesome Mediterranean power bowl featuring creamy hummus, protein-rich chickpeas, quinoa, roasted vegetables, and fresh herbs for a nutritious plant-based meal.",
  image: "/images/recipes/hummus-power-bowl.webp",

  imageAlt:
    "Mediterranean hummus power bowl with quinoa, roasted vegetables, chickpeas, cucumber, cherry tomatoes, and fresh parsley.",

  cuisine: "Mediterranean",

  category: "vegan",
  vegan: true,
  vegetarian: true,

  prepTime: "20 mins",
  cookTime: "15 mins",
  totalTime: "35 mins",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "Hummus",
    },
    {
      amount: 1,
      unit: "",
      name: "Chickpeas",
    },
    {
      amount: 1,
      unit: "",
      name: "Quinoa",
    },
    {
      amount: 1,
      unit: "",
      name: "Cucumber",
    },
    {
      amount: 1,
      unit: "",
      name: "Cherry tomatoes",
    },
    {
      amount: 1,
      unit: "",
      name: "Roasted vegetables",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh parsley",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon juice",
    },
    {
      amount: 1,
      unit: "",
      name: "Extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "",
      name: "Sesame seeds",
    },
  ],

  instructions: [
    "Cook the quinoa according to the package instructions and let it cool slightly.",
    "Roast the vegetables until tender and lightly caramelized.",
    "Drain and rinse the chickpeas if using canned.",
    "Wash and slice the cucumber and cherry tomatoes.",
    "Spread a generous layer of hummus in the bottom of each serving bowl.",
    "Arrange the quinoa, roasted vegetables, chickpeas, cucumber, and tomatoes around the hummus.",
    "Drizzle with extra virgin olive oil and fresh lemon juice.",
    "Sprinkle with sesame seeds and chopped parsley.",
    "Season with salt and freshly ground black pepper to taste.",
    "Serve immediately while the roasted vegetables are still warm.",
  ],

  nutrition: {
    calories: 480,
    protein: "18 g",
    carbs: "62 g",
    fat: "18 g",
    fiber: "14 g",
    sugar: "8 g",
    sodium: "380 mg",
  
  
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Supports heart health",
    "Rich in vitamins and minerals",
    "Promotes digestive health",
    "Provides long-lasting energy",
  ],

  keywords: [
    "Hummus Power Bowl",
    "Mediterranean Power Bowl",
    "Healthy Vegan Bowl",
    "Plant Based Mediterranean Recipe",
    "High Fiber Meal",
    "Healthy Lunch Recipe",
  ],

  tags: ["Vegan", "Mediterranean", "Healthy", "Hummus", "Quinoa", "Plant Based"],

  featured: false,
};
