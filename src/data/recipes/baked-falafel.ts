import { Recipe } from "@/types/recipe";

export const bakedFalafel: Recipe = {
  id: 40,

  title: "Baked Falafel",

  slug: "baked-falafel",

  description:
    "Crispy oven-baked falafel made with chickpeas, fresh herbs, garlic, onion, and warm Mediterranean spices. A healthier alternative to traditional fried falafel.",

  longDescription:
    "Baked Falafel delivers all the classic Mediterranean flavors without deep frying. Made with soaked chickpeas, parsley, cilantro, garlic, onion, cumin, coriander, and baked until perfectly crisp outside and tender inside, these falafel are rich in plant-based protein and fiber. Serve them with tahini sauce, hummus, fresh vegetables, or tucked into warm pita bread for a satisfying meal.",

  image: "/images/recipes/baked-falafel.jpg",

  imageAlt:
    "Golden baked falafel served with tahini sauce, fresh parsley, cucumbers, tomatoes, and pita bread.",

  cuisine: "Lebanese",

  category: "Vegetarian",

  prepTime: "20 mins",

  cookTime: "30 mins",

  totalTime: "50 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 cups dried chickpeas, soaked overnight (do not use canned)",
    "1 small onion, roughly chopped",
    "4 garlic cloves",
    "1 cup fresh parsley",
    "1/2 cup fresh cilantro",
    "2 tsp ground cumin",
    "1 tsp ground coriander",
    "1 tsp paprika",
    "1/2 tsp baking powder",
    "2 tbsp chickpea flour",
    "2 tbsp olive oil",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "Cooking spray or extra olive oil for brushing"
  ],

  instructions: [
    "Preheat the oven to 200°C (400°F).",
    "Line a baking tray with parchment paper and lightly grease it.",
    "Drain the soaked chickpeas thoroughly.",
    "Add chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, paprika, baking powder, chickpea flour, olive oil, salt, and pepper to a food processor.",
    "Pulse until the mixture is finely chopped but not completely smooth.",
    "Refrigerate the mixture for 30 minutes if it feels too soft.",
    "Shape into approximately 18 small balls or patties.",
    "Arrange them on the prepared baking tray.",
    "Lightly brush or spray the tops with olive oil.",
    "Bake for 15 minutes.",
    "Carefully flip each falafel and bake another 12–15 minutes until crisp and golden.",
    "Serve warm with tahini sauce, hummus, salad, or inside pita bread."
  ],

  nutrition: {
    calories: 280,
    protein: "12 g",
    carbs: "32 g",
    fat: "11 g",
    fiber: "10 g",
    sugar: "4 g",
    sodium: "340 mg"
  },

  healthBenefits: [
    "Excellent source of plant-based protein",
    "High in dietary fiber",
    "Rich in folate and iron",
    "Supports digestive health",
    "Lower in fat than fried falafel",
    "Mediterranean diet friendly",
    "Naturally dairy-free"
  ],

  keywords: [
    "Baked Falafel",
    "Healthy Falafel",
    "Mediterranean Chickpeas",
    "Vegetarian Dinner",
    "Plant Based Protein"
  ],

  tags: [
    "vegetarian",
    "vegan",
    "Mediterranean",
    "Lebanese",
    "falafel",
    "chickpeas",
    "healthy",
    "baked"
  ],

  featured: true
};