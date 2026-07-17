import { Recipe } from "@/types/recipe";

export const mediterraneanShakshuka: Recipe = {
  id: 41,

  title: "Mediterranean Shakshuka",

  slug: "mediterranean-shakshuka",

  description:
    "Poached eggs simmered in a rich tomato sauce with peppers, onions, garlic, and Mediterranean spices. A healthy and flavorful breakfast enjoyed throughout the Middle East.",

  longDescription:
    "Mediterranean Shakshuka is a classic breakfast made by gently poaching eggs in a fragrant tomato sauce seasoned with garlic, onions, bell peppers, cumin, paprika, and herbs. Served with warm pita or crusty bread, it's a protein-rich meal that's naturally gluten-free (without bread) and packed with vegetables.",

  image: "/images/recipes/mediterranean-shakshuka.jpg",

  imageAlt:
    "Mediterranean shakshuka with poached eggs in a tomato and pepper sauce garnished with parsley.",

  cuisine: "Lebanese",

  category: "Breakfast",

  prepTime: "15 mins",

  cookTime: "25 mins",

  totalTime: "40 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 tbsp extra virgin olive oil",
    "1 medium onion, diced",
    "1 red bell pepper, diced",
    "3 garlic cloves, minced",
    "800 g crushed tomatoes",
    "2 tbsp tomato paste",
    "1 tsp ground cumin",
    "1 tsp paprika",
    "1/2 tsp ground coriander",
    "1/4 tsp chili flakes (optional)",
    "1 tsp sea salt",
    "1/2 tsp black pepper",
    "4 large eggs",
    "2 tbsp chopped fresh parsley",
    "2 tbsp crumbled feta cheese (optional)",
    "Warm pita bread for serving"
  ],

  instructions: [
    "Heat olive oil in a large skillet over medium heat.",
    "Cook the onion for 4 minutes until softened.",
    "Add the diced bell pepper and cook for another 5 minutes.",
    "Stir in the garlic and cook for 1 minute.",
    "Add crushed tomatoes, tomato paste, cumin, paprika, coriander, chili flakes, salt, and pepper.",
    "Simmer the sauce for 15 minutes until slightly thickened.",
    "Using a spoon, create four small wells in the sauce.",
    "Carefully crack one egg into each well.",
    "Cover the skillet and cook for 6–8 minutes until the egg whites are set and the yolks reach your preferred doneness.",
    "Remove from heat and garnish with parsley and feta cheese if using.",
    "Serve immediately with warm pita bread."
  ],

  nutrition: {
    calories: 285,
    protein: "15 g",
    carbs: "18 g",
    fat: "17 g",
    fiber: "5 g",
    sugar: "9 g",
    sodium: "470 mg"
  },

  healthBenefits: [
    "High-quality protein from eggs",
    "Rich in vitamin C from peppers",
    "Excellent source of lycopene from tomatoes",
    "Contains heart-healthy olive oil",
    "Packed with antioxidants",
    "Mediterranean diet friendly",
    "Naturally gluten-free without bread"
  ],

  keywords: [
    "Shakshuka",
    "Mediterranean Breakfast",
    "Healthy Egg Breakfast",
    "Middle Eastern Breakfast",
    "Tomato Egg Recipe"
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "Lebanese",
    "eggs",
    "healthy",
    "tomatoes",
    "high protein",
    "vegetarian"
  ],

  featured: true
};