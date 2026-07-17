import { Recipe } from "@/types/recipe";

export const tabboulehSalad: Recipe = {
  id: 3,

  title: "Tabbouleh",

  slug: "tabbouleh",

  description:
    "A refreshing Lebanese parsley salad with bulgur wheat, tomatoes, mint, lemon juice, and extra virgin olive oil.",

  longDescription:
    "Tabbouleh is a classic Lebanese salad celebrated for its vibrant flavor and nutritional value. Fresh parsley is the star ingredient, complemented by mint, tomatoes, fine bulgur, lemon juice, and olive oil. It's naturally rich in vitamins, antioxidants, and fiber, making it an excellent healthy side dish or light meal.",

  image: "/images/recipes/tabbouleh-salad.jpg",

  imageAlt:
    "Fresh Lebanese tabbouleh salad with parsley, tomatoes, mint, bulgur and lemon.",

  cuisine: "Lebanese",

  category: "Salads",

  prepTime: "20 mins",

  cookTime: "0 mins",

  totalTime: "20 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    "2 cups fresh parsley, finely chopped",
    "½ cup fresh mint, finely chopped",
    "2 medium tomatoes, diced",
    "2 green onions, finely sliced",
    "¼ cup fine bulgur wheat",
    "3 tbsp extra virgin olive oil",
    "2 tbsp fresh lemon juice",
    "½ tsp salt",
    "¼ tsp black pepper"
  ],

  instructions: [
    "Rinse the bulgur and soak it in cold water for 15 minutes.",
    "Drain the bulgur thoroughly.",
    "Finely chop the parsley and mint.",
    "Dice the tomatoes into small cubes.",
    "Slice the green onions.",
    "Combine all vegetables and bulgur in a large bowl.",
    "Whisk together the olive oil, lemon juice, salt and pepper.",
    "Pour the dressing over the salad.",
    "Mix gently until everything is evenly coated.",
    "Chill for 15 minutes before serving for the best flavor."
  ],

  nutrition: {
    calories: 170,
    protein: "4 g",
    carbs: "16 g",
    fat: "10 g",
    fiber: "5 g",
    sugar: "3 g",
    sodium: "250 mg"
  },

  healthBenefits: [
    "Excellent source of Vitamin K",
    "Rich in antioxidants",
    "Supports heart health",
    "High in dietary fiber",
    "Low in saturated fat",
    "Good source of Vitamin C"
  ],

  keywords: [
    "Tabbouleh",
    "Tabbouleh recipe",
    "Lebanese salad",
    "Healthy Mediterranean salad",
    "Parsley salad"
  ],

  tags: [
    "salad",
    "healthy",
    "vegetarian",
    "Mediterranean",
    "Lebanese",
    "fresh"
  ],

  featured: true
};