import { Recipe } from "@/types/recipe";

export const bakedBeefKofta: Recipe = {
  id: 26,

  title: "Baked Beef Kofta",

  slug: "baked-beef-kofta",

  description:
    "Juicy Middle Eastern beef kofta made with fresh parsley, onion, garlic, and warm aromatic spices, baked until browned and tender.",

  longDescription:
    "Baked Beef Kofta is a flavorful Middle Eastern main dish made by combining lean ground beef with finely grated onion, fresh parsley, garlic, cumin, coriander, paprika, allspice, and a touch of cinnamon. The mixture is shaped into small oval logs and baked until browned on the outside and tender inside. Baking provides an easy alternative to traditional grilling or pan-frying while keeping the preparation simple and using very little added oil. Serve the kofta with tahini sauce, warm pita, rice, roasted vegetables, salads, or a generous mezze spread.",

  image: "/images/recipes/baked-beef-kofta.webp",

  imageAlt:
    "Baked beef kofta arranged with fresh parsley, tahini sauce, roasted vegetables, and warm pita bread.",

  cuisine: "Lebanese",

  category: "main-dishes",

  prepTime: "20 mins",

  cookTime: "25 mins",

  totalTime: "45 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "kg",
      name: "lean ground beef",
      note: "About 90% lean works well while retaining enough fat for juicy kofta.",
    },
    {
      amount: 1,
      unit: "medium",
      name: "onion",
      note: "Finely grated, then lightly squeezed to remove excess liquid.",
    },
    {
      amount: 4,
      unit: "cloves",
      name: "garlic",
      note: "Finely minced or grated.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh mint",
      note: "Finely chopped; optional.",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "ground coriander",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "paprika",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground allspice",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground cinnamon",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "freshly ground black pepper",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "For lightly brushing the kofta and baking tray.",
    },
  ],

  instructions: [
    "Preheat the oven to 200°C (400°F) and line a large baking tray with parchment paper.",
    "Finely grate the onion, then gently squeeze out excess liquid. Keeping some moisture while removing the excess helps the kofta stay flavorful without becoming too wet.",
    "Place the ground beef, onion, garlic, parsley, optional mint, cumin, coriander, paprika, allspice, cinnamon, salt, and black pepper in a large mixing bowl.",
    "Mix gently with clean hands until the ingredients are evenly distributed. Avoid kneading or compressing the mixture more than necessary, as overworking the meat can make the kofta dense.",
    "Divide the mixture into 12–18 portions depending on the size you prefer.",
    "Shape each portion into a compact oval or short cylinder, using lightly oiled hands to prevent sticking.",
    "Arrange the kofta on the prepared baking tray with a little space between each piece so the hot air can circulate around them.",
    "Lightly brush the kofta with extra virgin olive oil.",
    "Bake for 20–25 minutes, turning once halfway through if you want more even browning.",
    "Check the thickest piece with an instant-read thermometer. Ground beef should reach at least 71°C (160°F) internally for safe consumption.",
    "For deeper browning, place the kofta under the broiler for the final 2–3 minutes, watching closely so the surface does not burn.",
    "Rest the cooked kofta for about 5 minutes before serving so the juices can settle.",
    "Serve hot with tahini sauce, warm pita, rice, roasted vegetables, fresh salad, or other Mediterranean mezze.",
  ],

  nutrition: {
    calories: 340,
    protein: "31 g",
    carbs: "5 g",
    fat: "22 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "560 mg",
  },

  healthBenefits: [
    "Excellent source of high-quality protein.",
    "Provides iron and vitamin B12 from beef.",
    "Fresh parsley and onion contribute vitamins, minerals, and plant compounds.",
    "Baking uses less added oil than traditional pan-frying.",
    "Protein can support muscle maintenance when included as part of a balanced diet.",
    "Pairs naturally with vegetables, legumes, whole grains, and other Mediterranean-style foods.",
  ],

  keywords: [
    "Baked Beef Kofta",
    "Beef Kofta",
    "Lebanese Kofta",
    "Egyptian Kofta",
    "Middle Eastern Meatballs",
    "Healthy Beef Kofta",
    "Oven Baked Kofta",
  ],

  tags: [
    "main dish",
    "beef",
    "kofta",
    "Lebanese",
    "Egyptian",
    "Middle Eastern",
    "baked",
    "high protein",
    "Mediterranean",
    "family meal",
  ],

  featured: true,
};
