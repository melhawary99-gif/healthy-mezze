import { Recipe } from "@/types/recipe";

export const vegetableMoussaka: Recipe = {
  id: 39,

  title: "Vegetable Moussaka",

  slug: "vegetable-moussaka",

  description:
    "A hearty Mediterranean casserole made with roasted eggplant, zucchini, potatoes, rich tomato sauce, and a creamy béchamel topping baked until golden.",

  longDescription:
    "This vegetarian Mediterranean Moussaka layers roasted vegetables with a flavorful tomato sauce infused with garlic, onions, herbs, and warm spices. Finished with a light homemade béchamel and baked until beautifully golden, it's a comforting yet nutritious dish that's perfect for family dinners or meal prep.",

  image: "/images/recipes/vegetable-moussaka.jpg",

  imageAlt:
    "A baked Mediterranean vegetable moussaka with golden béchamel topping served in a casserole dish.",

  cuisine: "Lebanese",

  category: "Vegetarian",

  prepTime: "30 mins",

  cookTime: "55 mins",

  totalTime: "1 hr 25 mins",

  servings: 6,

  difficulty: "Medium",

  ingredients: [
    "2 medium eggplants, sliced",
    "2 zucchini, sliced",
    "2 potatoes, thinly sliced",
    "2 tbsp olive oil",
    "1 onion, diced",
    "3 garlic cloves, minced",
    "400 g crushed tomatoes",
    "2 tbsp tomato paste",
    "1 tsp dried oregano",
    "1 tsp ground cinnamon",
    "1/2 tsp paprika",
    "Salt and black pepper to taste",
    "2 tbsp chopped parsley",
    "2 tbsp butter",
    "2 tbsp all-purpose flour",
    "2 cups milk",
    "1/4 cup grated Parmesan cheese",
    "1 egg",
    "Pinch of nutmeg"
  ],

  instructions: [
    "Preheat oven to 200°C (400°F).",
    "Arrange eggplant, zucchini, and potato slices on baking trays, brush lightly with olive oil, and roast for 20 minutes.",
    "Meanwhile, heat olive oil in a skillet and sauté onion until soft.",
    "Add garlic and cook for 1 minute.",
    "Stir in crushed tomatoes, tomato paste, oregano, cinnamon, paprika, salt, and pepper.",
    "Simmer the sauce for 15 minutes, then stir in chopped parsley.",
    "For the béchamel, melt butter in a saucepan, whisk in flour, and cook for 1 minute.",
    "Gradually whisk in milk until smooth and thickened.",
    "Remove from heat and stir in Parmesan, nutmeg, and beaten egg.",
    "In a baking dish, layer potatoes, tomato sauce, eggplant, more sauce, zucchini, and the remaining sauce.",
    "Pour the béchamel evenly over the top.",
    "Bake for 35 minutes until golden brown.",
    "Allow to rest for 10 minutes before serving."
  ],

  nutrition: {
    calories: 340,
    protein: "11 g",
    carbs: "32 g",
    fat: "18 g",
    fiber: "7 g",
    sugar: "9 g",
    sodium: "410 mg"
  },

  healthBenefits: [
    "Rich in vegetables and antioxidants",
    "Excellent source of dietary fiber",
    "Provides calcium from the béchamel",
    "Heart-healthy olive oil",
    "Contains vitamins A and C",
    "Mediterranean diet friendly",
    "Perfect for meal prep"
  ],

  keywords: [
    "Vegetarian Moussaka",
    "Mediterranean Casserole",
    "Eggplant Recipe",
    "Healthy Dinner",
    "Vegetable Bake"
  ],

  tags: [
    "vegetarian",
    "Mediterranean",
    "Lebanese",
    "eggplant",
    "zucchini",
    "casserole",
    "healthy",
    "comfort food"
  ],

  featured: true
};