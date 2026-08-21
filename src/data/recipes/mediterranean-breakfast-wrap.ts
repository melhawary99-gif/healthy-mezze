import { Recipe } from "@/types/recipe";

export const mediterraneanBreakfastWrap: Recipe = {
  id: 49,

  title: "Mediterranean Breakfast Wrap",

  slug: "mediterranean-breakfast-wrap",

  description:
    "A warm whole-wheat wrap filled with softly scrambled eggs, creamy hummus, baby spinach, cherry tomatoes, cucumber, feta, parsley, and Mediterranean herbs for a satisfying Lebanese-inspired breakfast.",

  longDescription:
    "This Mediterranean Breakfast Wrap is a modern, Lebanese-inspired way to bring familiar Eastern Mediterranean flavors into a practical breakfast. Soft scrambled eggs provide protein while hummus adds creaminess, chickpeas, and sesame richness. Fresh spinach, cherry tomatoes, cucumber, parsley, feta, extra virgin olive oil, and oregano add freshness, acidity, herbs, and savory depth. The most important part is the assembly: the vegetables should not be excessively wet, the eggs should remain soft rather than dry, and the tortilla should be warmed just enough to become flexible. This keeps the wrap flavorful and portable without turning the bread soggy or making it difficult to roll.",

  image: "/images/recipes/mediterranean-breakfast-wrap.webp",

  imageAlt:
    "Whole-wheat Mediterranean breakfast wrap filled with soft scrambled eggs, hummus, spinach, cherry tomatoes, cucumber, feta, parsley, and herbs.",

  cuisine: "Lebanese",

  category: "sandwiches-wraps",

  vegetarian: true,

  prepTime: "10 mins",

  cookTime: "10 mins",

  totalTime: "20 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "whole",
      name: "whole-wheat tortillas",
      note: "Use flexible tortillas large enough to fold and roll without cracking.",
    },
    {
      amount: 4,
      unit: "large",
      name: "eggs",
      note: "Bring close to room temperature if possible for more even cooking.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "milk",
      note: "Helps keep the scrambled eggs tender; do not add too much.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Use for cooking the eggs and lightly finishing the filling.",
    },
    {
      amount: 1,
      unit: "cup",
      name: "baby spinach",
      note: "Use fresh leaves and pat dry if they are wet.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "cherry tomatoes",
      note: "Halved and drained of excess juice if particularly juicy.",
    },
    {
      amount: 0.5,
      unit: "small",
      name: "cucumber",
      note: "Diced and patted dry to prevent excess moisture inside the wrap.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "crumbled feta cheese",
      note: "Taste before adding extra salt because feta can be quite salty.",
    },
    {
      amount: 4,
      unit: "tbsp",
      name: "hummus",
      note: "Spread in a thin, even layer rather than using one thick mound.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "dried oregano",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Start with less if the hummus and feta are already salty.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "freshly ground black pepper",
    },
  ],

  instructions: [
    "Whisk the eggs with the milk, black pepper, oregano, and half of the sea salt until the whites and yolks are fully combined. Do not over-whisk until foamy.",
    "Heat the extra virgin olive oil in a non-stick skillet over medium-low heat. Add the eggs and stir slowly with a spatula, bringing the cooked edges toward the center.",
    "Remove the eggs from the heat while they still look slightly glossy and soft. They will continue cooking from residual heat, so avoid cooking them until completely dry.",
    "Warm each tortilla for about 20–30 seconds per side in a dry skillet, just until flexible and warm. Do not toast it until crisp or it may crack during rolling.",
    "Spread 2 tablespoons of hummus over the center of each tortilla, leaving a border around the edges. A thin layer is easier to roll and helps prevent the tortilla from becoming overly wet.",
    "Add the baby spinach, keeping it reasonably compact. Follow with the scrambled eggs, cherry tomatoes, diced cucumber, and crumbled feta.",
    "Sprinkle the fresh parsley over the filling. Taste the overall filling before adding any remaining salt because the hummus and feta may already provide enough seasoning.",
    "Fold the bottom edge of the tortilla upward over the filling, fold both sides inward, then roll forward firmly while keeping the filling tucked inside. Do not overfill the wrap.",
    "Slice each wrap in half and serve immediately while the eggs are warm and the tortilla is still flexible.",
  ],

  nutrition: {
    calories: 435,
    protein: "24 g",
    carbs: "31 g",
    fat: "24 g",
    fiber: "8 g",
    sugar: "5 g",
    sodium: "560 mg",
  },

  healthBenefits: [
    "Provides complete protein from eggs and additional plant-based protein from hummus and whole-wheat bread.",
    "Provides dietary fiber from whole-wheat tortillas, hummus, spinach, tomatoes, and cucumber.",
    "Extra virgin olive oil and hummus provide predominantly unsaturated fats.",
    "Eggs and feta contribute protein and calcium.",
    "Spinach, tomatoes, parsley, and cucumber add a variety of vitamins, minerals, and plant compounds.",
    "The combination of protein, fiber, vegetables, and healthy fats makes the wrap satisfying for a busy morning.",
    "The recipe uses familiar Mediterranean ingredients in a convenient, portable breakfast format.",
  ],

  keywords: [
    "Mediterranean Breakfast Wrap",
    "Lebanese Breakfast Wrap",
    "Healthy Breakfast Wrap",
    "Egg Breakfast Wrap",
    "High Protein Breakfast",
    "Hummus Breakfast Wrap",
    "Mediterranean Breakfast",
  ],

  tags: [
    "breakfast",
    "Mediterranean",
    "Lebanese",
    "wrap",
    "eggs",
    "hummus",
    "feta",
    "spinach",
    "high protein",
    "healthy",
    "vegetarian",
    "quick meal",
  ],

  featured: true,
};
