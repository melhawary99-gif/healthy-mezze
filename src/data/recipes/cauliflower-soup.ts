import { Recipe } from "@/types/recipe";

export const cauliflowerSoup: Recipe = {
  id: 23,

  title: "Creamy Cauliflower Soup",

  slug: "creamy-cauliflower-soup",

  description:
    "A silky Mediterranean cauliflower soup made with deeply roasted cauliflower, garlic, onion, thyme, cumin, lemon, and extra virgin olive oil—rich and creamy without dairy.",

  longDescription:
    "This Creamy Cauliflower Soup turns humble cauliflower into a silky, deeply flavorful Mediterranean-inspired soup. Roasting the cauliflower, onion, and garlic first develops gentle caramelized edges and brings out the cauliflower's natural sweetness before everything is simmered with vegetable broth, thyme, and cumin. The vegetables are blended until smooth, then finished with fresh lemon juice and extra virgin olive oil for brightness and richness. No cream is needed to achieve a velvety texture, making this soup naturally dairy-free and suitable for vegetarian and vegan meals. It is comforting enough for dinner, light enough for lunch, and practical for meal preparation.",

  image: "/images/recipes/cauliflower-soup.webp",

  imageAlt:
    "Silky roasted cauliflower soup in a bowl, garnished with parsley, cracked black pepper, roasted cauliflower florets, and extra virgin olive oil.",

  cuisine: "Lebanese",

  category: "soups",

  prepTime: "15 mins",

  cookTime: "45 mins",

  totalTime: "1 hr",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "",
      name: "large cauliflower",
      note: "Cut into evenly sized florets.",
    },
    {
      amount: 1,
      unit: "",
      name: "medium onion",
      note: "Peeled and cut into thick wedges.",
    },
    {
      amount: 5,
      unit: "",
      name: "garlic cloves",
      note: "Leave whole or lightly crush.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 4,
      unit: "cups",
      name: "vegetable broth",
      note: "Use low-sodium broth when possible.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried thyme",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust to taste depending on the broth.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley",
      note: "Finely chopped, for serving.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add after blending.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "For finishing and serving.",
    },
  ],

  instructions: [
    "Preheat the oven to 200°C (400°F) and position a rack in the center of the oven.",
    "Cut the cauliflower into evenly sized florets so they roast at roughly the same rate. Cut the onion into thick wedges and prepare the garlic cloves.",
    "Arrange the cauliflower, onion, and garlic in a single layer on a large baking tray. Avoid overcrowding the tray so the vegetables roast instead of steaming.",
    "Drizzle with the olive oil and season with sea salt and black pepper. Toss gently until the vegetables are lightly coated.",
    "Roast for about 30–35 minutes, turning the vegetables once halfway through, until the cauliflower is tender with golden-brown edges and the onion is softened.",
    "Reserve a few attractive roasted cauliflower florets for garnish if desired, then transfer the remaining roasted vegetables to a large soup pot.",
    "Add the vegetable broth, dried thyme, and ground cumin. Bring the mixture to a gentle simmer and cook for about 10 minutes so the flavors combine.",
    "Blend the soup until smooth using an immersion blender. If using a countertop blender, blend in small batches and never fill the blender more than recommended, because hot liquid expands and can cause dangerous splashing.",
    "If the soup is thicker than you prefer, gradually add a little more warm vegetable broth or water until the desired consistency is reached.",
    "Stir in the fresh lemon juice after blending. Taste carefully and adjust the salt, black pepper, cumin, or lemon according to preference.",
    "Ladle the soup into warm bowls and finish with chopped parsley, the reserved roasted cauliflower florets, cracked black pepper, and a light drizzle of extra virgin olive oil.",
  ],

  nutrition: {
    calories: 180,
    protein: "6 g",
    carbs: "18 g",
    fat: "10 g",
    fiber: "6 g",
    sugar: "6 g",
    sodium: "420 mg",
  },

  healthBenefits: [
    "Cauliflower provides vitamin C and other plant compounds",
    "Rich in dietary fiber to support a balanced diet",
    "Roasting develops flavor without requiring cream or butter",
    "Extra virgin olive oil provides predominantly unsaturated fats",
    "Naturally dairy-free",
    "Naturally vegetarian and vegan when vegetable broth is used",
    "Provides a satisfying combination of vegetables, fiber, and healthy fats",
    "A light, vegetable-forward option for lunch or dinner",
  ],

  keywords: [
    "Cauliflower Soup",
    "Creamy Cauliflower Soup",
    "Mediterranean Soup",
    "Healthy Cauliflower Soup",
    "Roasted Cauliflower Soup",
    "Dairy Free Cauliflower Soup",
    "Vegan Cauliflower Soup",
  ],

  tags: [
    "soup",
    "Mediterranean",
    "Lebanese",
    "vegetarian",
    "vegan",
    "cauliflower",
    "healthy",
    "dairy-free",
    "low calorie",
    "meal prep",
    "roasted vegetables",
  ],

  featured: true,
};
