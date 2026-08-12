import { Recipe } from "@/types/recipe";

export const authenticAmbaSauce: Recipe = {
  id: 101,

  title: "Authentic Amba Sauce",

  slug: "authentic-amba-sauce",

  description:
    "A bright, tangy Middle Eastern mango condiment made with pickled mango, turmeric, fenugreek, garlic, lemon juice, and warm spices.",

  longDescription:
    "Amba is a distinctive mango-based condiment with roots in Iraqi Jewish cuisine that became widely associated with street foods and sandwiches across the Middle East. Made from tangy pickled mango and aromatic spices, this version balances sour, savory, earthy, garlicky, and gently spicy flavors. It is especially good with shawarma, sabich, falafel, grilled meats, roasted vegetables, and sandwiches, where its sharp acidity and bold spice help cut through richer foods. Because the sauce is blended and then rested, the spices have time to settle into the mango and develop a more rounded flavor.",

  image: "/images/recipes/authentic-amba-sauce.webp",

  imageAlt:
    "Authentic amba sauce made with pickled mango, turmeric, fenugreek, garlic, lemon juice, and Middle Eastern spices.",

  cuisine: "Iraqi",

  category: "dips-sauces",

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "40 mins",

  servings: 10,

  difficulty: "Easy",

  ingredients: [
    {
      name: "pickled mango",
      amount: "1",
      unit: "cup",
      note: "Use mango pieces packed in a tangy pickle. Drain lightly if the pickling liquid is very salty or strong.",
    },
    {
      name: "garlic cloves",
      amount: "2",
      unit: "",
      note: "Fresh garlic gives the sauce its characteristic savory bite.",
    },
    {
      name: "fresh lemon juice",
      amount: "2",
      unit: "tbsp",
      note: "Add gradually because the pickled mango already contributes significant acidity.",
    },
    {
      name: "extra virgin olive oil",
      amount: "2",
      unit: "tbsp",
      note: "Adds richness and helps round out the sharp acidity of the mango and lemon.",
    },
    {
      name: "water",
      amount: "2",
      unit: "tbsp",
      note: "Use to loosen the sauce if needed after blending.",
    },
    {
      name: "ground turmeric",
      amount: "1",
      unit: "tsp",
      note: "Provides the characteristic golden color and earthy flavor.",
    },
    {
      name: "ground fenugreek",
      amount: "1/2",
      unit: "tsp",
      note: "Use moderately because fenugreek has a strong, distinctive aroma.",
    },
    {
      name: "ground cumin",
      amount: "1/2",
      unit: "tsp",
      note: "Adds warm, earthy depth.",
    },
    {
      name: "cayenne pepper",
      amount: "1/4",
      unit: "tsp",
      note: "Adjust according to the heat level you prefer.",
    },
    {
      name: "salt",
      amount: "1/2",
      unit: "tsp",
      note: "Start conservatively because pickled mango can already be salty.",
    },
    {
      name: "fresh cilantro",
      amount: "2",
      unit: "tbsp",
      note: "Chopped finely and stirred in after blending for a fresh herbal finish.",
    },
  ],

  instructions: [
    "Drain the pickled mango lightly. If it is packed in a very salty or strongly seasoned brine, briefly rinse and drain it before blending.",
    "Add the pickled mango, garlic, lemon juice, extra virgin olive oil, water, turmeric, fenugreek, cumin, cayenne pepper, and salt to a food processor.",
    "Blend until the mixture becomes a mostly smooth, spoonable sauce. Stop once or twice to scrape down the sides so the spices and mango are evenly incorporated.",
    "Check the consistency. If the sauce is too thick to spoon easily, add the remaining water a little at a time rather than adding it all at once.",
    "Taste the sauce before adding additional salt. Balance the flavor gradually with lemon juice, cayenne, or water depending on whether it needs more acidity, heat, or dilution.",
    "Stir in the finely chopped fresh cilantro after blending. This keeps some of its fresh herbal character rather than completely pureeing it into the sauce.",
    "Transfer the amba to a clean airtight jar or container.",
    "Refrigerate for at least 30 minutes before serving. This resting period allows the garlic and spices to blend with the tangy mango and gives the sauce a more rounded flavor.",
    "Stir the sauce before serving and taste once more. Adjust with a small splash of water or lemon juice if its texture or acidity needs balancing.",
    "Serve as a condiment with shawarma, sabich, falafel, grilled meats, roasted vegetables, sandwiches, or other dishes that benefit from a bright, tangy, spicy finish.",
  ],

  nutrition: {
    calories: 45,
    protein: "0 g",
    carbs: "4 g",
    fat: "3 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "170 mg",
  },

  healthBenefits: [
    "Provides flavor from herbs and spices without requiring a large amount of sauce.",
    "Turmeric contributes naturally occurring antioxidant compounds.",
    "Garlic provides naturally occurring sulfur-containing plant compounds.",
    "Extra virgin olive oil provides predominantly unsaturated fats.",
    "Pickled mango and lemon provide acidity and distinctive flavor that can make simple vegetables, legumes, and lean proteins more appealing.",
    "The recipe is naturally vegan and dairy-free.",
  ],

  keywords: [
    "Amba Sauce",
    "Authentic Amba",
    "Iraqi Amba Sauce",
    "Pickled Mango Sauce",
    "Middle Eastern Mango Sauce",
    "Shawarma Amba",
    "Sabich Sauce",
    "Middle Eastern Condiment",
  ],

  tags: [
    "dip",
    "sauce",
    "Iraqi",
    "Middle Eastern",
    "mango",
    "pickled mango",
    "vegan",
    "dairy-free",
    "condiment",
    "shawarma",
  ],

  featured: true,
};
