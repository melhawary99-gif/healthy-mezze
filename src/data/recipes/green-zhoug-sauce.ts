import { Recipe } from "@/types/recipe";

export const greenZhougSauce: Recipe = {
  id: 97,

  title: "Green Zhoug (Zhug) Sauce",

  slug: "green-zhoug-sauce",

  description:
    "A vibrant Yemeni green chili and herb sauce made with fresh cilantro, parsley, garlic, warm spices, lemon juice, and extra virgin olive oil.",

  longDescription:
    "Green zhoug, also spelled zhug or schug, is a traditional Yemeni hot sauce made from fresh green chilies, cilantro, garlic, and aromatic spices. It became especially well known beyond Yemen through Jewish Yemeni communities and is now enjoyed widely across the Middle East and Mediterranean-influenced kitchens. This fresh, uncooked sauce balances bright herbs, citrus, garlic, warm spices, and controlled heat. It is excellent with falafel, shawarma, grilled meats, eggs, roasted vegetables, sandwiches, wraps, and mezze. The sauce is naturally vegan and dairy-free, and this version uses extra virgin olive oil and fresh ingredients for a clean, intensely aromatic finish.",

  image: "/images/recipes/green-zhoug-sauce.webp",

  imageAlt:
    "A bowl of vibrant green zhoug sauce made with fresh cilantro, parsley, green chilies, garlic, spices, and extra virgin olive oil.",

  cuisine: "Yemeni",

  category: "dips-sauces",

  vegetarian: true,

  vegan: true,

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "45 mins",

  servings: 10,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "fresh cilantro leaves",
      note: "Tender leaves and soft stems are fine; wash thoroughly and dry very well.",
    },
    {
      amount: 1,
      unit: "cup",
      name: "fresh parsley leaves",
      note: "Use fresh, dry leaves for the best color and texture.",
    },
    {
      amount: 2,
      unit: "",
      name: "green chilies",
      note: "Seed them for a milder sauce; keep some or all seeds for more heat.",
    },
    {
      amount: 4,
      unit: "garlic",
      name: "cloves",
      note: "Peel and roughly chop before processing.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Use a good-quality olive oil with a flavor you enjoy.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Freshly squeezed lemon gives the sauce a brighter flavor.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground coriander",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "ground cardamom",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust after blending because the intensity of the herbs and chilies varies.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "cold water",
      note: "Use only as needed to reach your preferred consistency.",
    },
  ],

  instructions: [
    "Wash the cilantro and parsley thoroughly, then dry them very well. Excess water can make the zhoug watery and can reduce its fresh, concentrated flavor.",
    "Prepare the chilies and garlic. Remove the chili seeds if you want a milder sauce, then roughly chop the chilies and garlic so the food processor can break them down evenly.",
    "Add the cilantro, parsley, green chilies, garlic, cumin, coriander, cardamom, lemon juice, olive oil, and sea salt to a food processor. Pulse several times until the herbs and aromatics are finely chopped but still retain some texture.",
    "Check the consistency before adding water. If the mixture is too thick to move easily, add cold water gradually, about 1 tablespoon at a time, pulsing between additions. Stop as soon as the sauce becomes spoonable; do not over-dilute it.",
    "Taste the zhoug and adjust it to your preference. Add a little more lemon juice for brightness, salt for seasoning, or chili for additional heat. If it becomes too sharp, a small amount of extra olive oil can soften the overall balance.",
    "Transfer the zhoug to a clean serving bowl or airtight container. Scrape down the sides so none of the fresh herb mixture is left exposed unnecessarily.",
    "Refrigerate the sauce for at least 30 minutes before serving. This resting time allows the garlic, herbs, chilies, spices, lemon, and olive oil to blend into a more balanced flavor.",
    "Serve chilled or slightly cool with falafel, shawarma, grilled meats, eggs, roasted vegetables, sandwiches, wraps, or other mezze. Stir gently before serving if the oil separates during storage.",
  ],

  nutrition: {
    calories: 35,
    protein: "0 g",
    carbs: "1 g",
    fat: "3 g",
    fiber: "1 g",
    sugar: "0 g",
    sodium: "90 mg",
  },

  healthBenefits: [
    "Fresh herbs provide antioxidants and beneficial plant compounds",
    "Extra virgin olive oil provides predominantly heart-friendly monounsaturated fat",
    "Garlic contributes sulfur-containing plant compounds",
    "Cilantro and parsley provide vitamin K and other micronutrients",
    "Naturally vegan and dairy-free",
    "Made without preservatives or highly processed ingredients",
    "Adds strong flavor and freshness without relying on heavy sauces",
  ],

  keywords: [
    "Green Zhoug",
    "Green Zhug",
    "Schug Sauce",
    "Yemeni Hot Sauce",
    "Yemeni Herb Sauce",
    "Middle Eastern Green Sauce",
    "Healthy Zhoug",
  ],

  tags: [
    "dip",
    "sauce",
    "Yemeni",
    "Middle Eastern",
    "herbs",
    "chili",
    "garlic",
    "vegan",
    "healthy",
    "mezze",
    "condiment",
  ],

  featured: true,
};
