import { Recipe } from "@/types/recipe";

export const egyptianMolokhiaSoup: Recipe = {
  id: 12,

  title: "Egyptian Molokhia Soup",

  slug: "egyptian-molokhia-soup",

  description:
    "A traditional Egyptian soup made with finely chopped molokhia leaves simmered in a fragrant garlic and coriander broth.",

  longDescription:
    "Molokhia is considered one of Egypt's most iconic comfort foods. Prepared with finely chopped jute mallow leaves, aromatic garlic, coriander, and a rich chicken broth, this nutritious soup has a uniquely silky texture and earthy flavor. It is traditionally served over rice alongside roasted or grilled chicken, rabbit, or beef, making it a staple of Egyptian family meals.",

  image: "/images/recipes/egyptian-molokhia-soup.jpg",

  imageAlt:
    "Traditional Egyptian molokhia soup served with rice, garlic, coriander, and lemon wedges.",

  cuisine: "Egyptian",

  category: "Soups",

  prepTime: "20 mins",

  cookTime: "30 mins",

  totalTime: "50 mins",

  servings: 6,

  difficulty: "Medium",

  ingredients: [
    "500 g frozen or fresh finely chopped molokhia leaves",
    "6 cups chicken broth",
    "2 tbsp butter or ghee",
    "6 cloves garlic, minced",
    "2 tsp ground coriander",
    "1 tbsp extra virgin olive oil",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "1 tbsp fresh lemon juice (optional)",
    "Cooked white rice for serving",
    "Lemon wedges for serving"
  ],

  instructions: [
    "Bring the chicken broth to a gentle boil in a large pot.",
    "Add the molokhia leaves and stir continuously.",
    "Reduce the heat and simmer for 8–10 minutes without allowing the soup to boil vigorously.",
    "Meanwhile, heat the butter or ghee in a small skillet.",
    "Add the minced garlic and cook until lightly golden.",
    "Stir in the ground coriander and cook for another 30 seconds.",
    "Immediately pour the garlic mixture into the soup.",
    "Season with salt and black pepper.",
    "Stir gently and simmer for 2 more minutes.",
    "Finish with lemon juice if desired and serve hot over rice."
  ],

  nutrition: {
    calories: 180,
    protein: "10 g",
    carbs: "10 g",
    fat: "11 g",
    fiber: "4 g",
    sugar: "2 g",
    sodium: "590 mg"
  },

  healthBenefits: [
    "Excellent source of vitamin A",
    "Rich in vitamin C",
    "High in antioxidants",
    "Good source of iron",
    "Supports immune health",
    "Provides dietary fiber"
  ],

  keywords: [
    "Egyptian Molokhia",
    "Molokhia Soup",
    "Jute Mallow Soup",
    "Traditional Egyptian Soup",
    "Healthy Egyptian Recipe"
  ],

  tags: [
    "soup",
    "Egyptian",
    "traditional",
    "healthy",
    "comfort food",
    "high protein",
    "family dinner"
  ],

  featured: true
};