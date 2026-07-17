import { Recipe } from "@/types/recipe";

export const authenticArabicCoffee: Recipe = {
  id: 87,

  title: "Authentic Arabic Coffee (Ahwa)",

  slug: "authentic-arabic-coffee",

  description:
    "A traditional Arabic coffee brewed with lightly roasted coffee, fragrant cardamom, and served in small cups.",

  longDescription:
    "Arabic coffee, known as Ahwa, is a symbol of hospitality throughout the Middle East. In Lebanon and many Gulf countries it is traditionally prepared with lightly roasted coffee beans and freshly ground cardamom, while regional variations exist across Egypt and the Levant. Served in small cups without milk, this aromatic coffee is often enjoyed alongside dates or traditional sweets and plays an important role in welcoming guests and celebrating special occasions.",

  image: "/images/recipes/authentic-arabic-coffee.jpg",

  imageAlt:
    "Traditional Arabic coffee served in a dallah with small finjan cups, dates, and cardamom pods.",

  cuisine: "Lebanese",

  category: "Drinks",

  prepTime: "5 mins",

  cookTime: "10 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "4 cups water",
    "4 tbsp finely ground Arabic coffee",
    "1 tsp freshly ground cardamom",
    "2 whole cardamom pods (optional)",
    "4 fresh dates for serving (optional)"
  ],

  instructions: [
    "Bring the water to a gentle boil in a traditional coffee pot (dallah) or small saucepan.",
    "Reduce the heat to low.",
    "Add the ground Arabic coffee and stir gently.",
    "Allow the coffee to simmer for 8–10 minutes without boiling vigorously.",
    "Add the ground cardamom during the final minute of simmering.",
    "Remove from the heat and let the grounds settle for 1–2 minutes.",
    "Carefully pour the coffee into small finjan cups, leaving the grounds behind.",
    "Serve immediately with fresh dates if desired."
  ],

  nutrition: {
    calories: 2,
    protein: "0 g",
    carbs: "0 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "0 g",
    sodium: "5 mg"
  },

  healthBenefits: [
    "Naturally low in calories",
    "Contains antioxidants from coffee beans",
    "Cardamom adds aromatic flavor without sugar",
    "Naturally dairy-free",
    "Traditionally enjoyed without sweeteners",
    "May help improve alertness due to its caffeine content",
    "An authentic part of Middle Eastern hospitality"
  ],

  keywords: [
    "Arabic Coffee",
    "Ahwa",
    "Lebanese Coffee",
    "Middle Eastern Coffee",
    "Traditional Arabic Coffee"
  ],

  tags: [
    "drink",
    "coffee",
    "Arabic",
    "Lebanese",
    "traditional",
    "cardamom",
    "Middle Eastern",
    "dairy-free"
  ],

  featured: true
};