import { Recipe } from "@/types/recipe";

export const classicTahiniSauce: Recipe = {
  id: 95,

  title: "Classic Tahini Sauce",

  slug: "classic-tahini-sauce",

  description:
    "A creamy Lebanese tahini sauce made with sesame tahini, fresh lemon juice, garlic, parsley, and olive oil. Smooth, tangy, nutty, and naturally vegan.",

  longDescription:
    "Classic tahini sauce is one of the most versatile sauces in Lebanese and wider Middle Eastern cooking. Made by blending sesame tahini with fresh lemon juice, garlic, salt, and cold water, it transforms into a silky, creamy sauce with a bright citrus flavor and rich sesame character. A little olive oil, fresh parsley, and optional cumin round out the flavor. The sauce is traditionally served alongside falafel, shawarma, grilled meats and fish, roasted vegetables, and mezze, and it can also be used as a dressing for salads and grain bowls. The key to a successful tahini sauce is adding the cold water gradually: the mixture may thicken dramatically when the lemon juice is first whisked into the tahini, then loosen into a smooth, pourable sauce as the water is incorporated.",

  image: "/images/recipes/classic-tahini-sauce.webp",

  imageAlt:
    "Creamy Lebanese tahini sauce in a bowl, garnished with parsley and olive oil with lemon and garlic nearby.",

  cuisine: "Lebanese",

  category: "dips-sauces",

  vegan: true,

  vegetarian: true,

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "10 mins",

  servings: 8,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 0.5,
      unit: "cup",
      name: "tahini",
      note: "Stir the tahini well before measuring so the sesame solids and oil are evenly combined.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh lemon juice",
      note: "Freshly squeezed lemon gives the sauce its characteristic bright flavor.",
    },
    {
      amount: 2,
      unit: "cloves",
      name: "garlic",
      note: "Finely minced or crushed for an even distribution of flavor.",
    },
    {
      amount: "3–5",
      unit: "tbsp",
      name: "cold water",
      note: "Add gradually; the exact amount depends on the tahini and the desired consistency.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Adds a smooth finish and Mediterranean richness.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust to taste.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "ground cumin",
      note: "Optional; use for a warmer, earthier flavor.",
    },
  ],

  instructions: [
    "Stir the tahini thoroughly before measuring to make sure the sesame paste is evenly mixed.",
    "Add the tahini to a medium mixing bowl and whisk in the fresh lemon juice. The mixture will become very thick and may look slightly grainy at first; this is normal.",
    "Add the minced garlic and sea salt, then whisk until evenly combined.",
    "Add the cold water one tablespoon at a time while whisking continuously. The sauce will gradually loosen and become smooth, creamy, and pale in color.",
    "Stop adding water when the sauce reaches the consistency you want. Use less water for a thick dipping sauce and more for a thinner dressing.",
    "Whisk in the olive oil, chopped parsley, and optional cumin.",
    "Taste and adjust the seasoning. Add a little more lemon juice for brightness, salt for seasoning, or cold water if the sauce is too thick.",
    "Serve immediately, or transfer to an airtight container and refrigerate for up to 5 days. Stir well before serving if the sauce thickens during storage.",
  ],

  nutrition: {
    calories: 95,
    protein: "3 g",
    carbs: "3 g",
    fat: "8 g",
    fiber: "2 g",
    sugar: "0 g",
    sodium: "120 mg",
  },

  healthBenefits: [
    "Provides predominantly unsaturated fats from sesame and extra virgin olive oil",
    "Provides plant-based protein from sesame tahini",
    "A useful source of calcium and other minerals naturally present in sesame seeds",
    "Contains dietary fiber from sesame",
    "Naturally vegan and dairy-free",
    "Contains antioxidant compounds naturally found in sesame and garlic",
    "A flavorful way to add a nutrient-dense sauce to vegetables, legumes, and lean proteins",
  ],

  keywords: [
    "Tahini Sauce",
    "Classic Tahini Sauce",
    "Lebanese Tahini",
    "Middle Eastern Tahini Sauce",
    "Healthy Tahini Sauce",
    "Sesame Sauce",
    "Vegan Tahini Sauce",
  ],

  tags: [
    "dip",
    "sauce",
    "tahini",
    "Lebanese",
    "Middle Eastern",
    "vegan",
    "vegetarian",
    "healthy",
    "sesame",
    "mezze",
  ],

  featured: true,
};
