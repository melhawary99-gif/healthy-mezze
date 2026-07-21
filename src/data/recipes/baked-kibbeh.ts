import { Recipe } from "@/types/recipe";

export const bakedKibbeh: Recipe = {
  id: 64,

  title: "Baked Kibbeh",

  slug: "baked-kibbeh",

  description:
    "A healthier oven-baked version of traditional Lebanese kibbeh made with lean ground beef, fine bulgur wheat, onions, herbs, and aromatic Mediterranean spices.",

  longDescription:
    "Baked Kibbeh is one of Lebanon's most treasured national dishes. Unlike the fried version, this healthier recipe is baked until beautifully golden, reducing fat while preserving its rich flavor. Layers of seasoned lean beef and fine bulgur wheat surround a savory filling with onions and toasted pine nuts, creating a hearty meal that's packed with protein and Mediterranean goodness.",

  image: "/images/recipes/baked-kibbeh.webp",

  imageAlt:
    "Golden baked Lebanese kibbeh cut into diamond shapes and garnished with toasted pine nuts and fresh parsley.",

  cuisine: "Lebanese",

  category: "Mezze",

  prepTime: "40 mins",

  cookTime: "45 mins",

  totalTime: "1 hr 25 mins",

  servings: 8,

  difficulty: "Medium",

  ingredients: [
{
    amount: 1,
    unit: "cup",
    name: "fine bulgur wheat"
  },
{
    amount: 500,
    unit: "g",
    name: "lean ground beef (90% lean), divided"
  },
{
    amount: 1,
    unit: "large",
    name: "onion, finely chopped"
  },
{
    amount: 0.25,
    unit: "cup",
    name: "fresh parsley, finely chopped"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "fresh mint, chopped"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "pine nuts, lightly toasted"
  },
{
    amount: 2,
    unit: "tbsp",
    name: "extra virgin olive oil"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground allspice"
  },
{
    amount: 1,
    unit: "tsp",
    name: "ground cumin"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "ground cinnamon"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "paprika"
  },
{
    amount: 1,
    unit: "tsp",
    name: "sea salt"
  },
{
    amount: 0.5,
    unit: "tsp",
    name: "black pepper"
  },
{
    amount: 1,
    unit: "tbsp",
    name: "olive oil for brushing"
  }
],

instructions: [
    "Soak the bulgur wheat in warm water for 20 minutes, then drain and squeeze out excess moisture.",
    "Mix half of the ground beef with the bulgur, half the onion, parsley, mint, allspice, cumin, cinnamon, paprika, salt, and pepper.",
    "Process the mixture in a food processor until smooth.",
    "Cook the remaining onion in olive oil until softened.",
    "Add the remaining ground beef and cook until browned.",
    "Stir in the toasted pine nuts and cook for another 2 minutes.",
    "Preheat the oven to 375°F (190°C).",
    "Lightly grease a baking dish.",
    "Press half of the kibbeh mixture into the bottom of the dish.",
    "Spread the beef filling evenly over the base.",
    "Cover with the remaining kibbeh mixture and smooth the surface.",
    "Score the top into traditional diamond shapes.",
    "Brush lightly with olive oil.",
    "Bake for 40–45 minutes until golden brown.",
    "Allow to rest for 10 minutes before serving."
  ],

  nutrition: {
    calories: 295,
    protein: "22 g",
    carbs: "17 g",
    fat: "15 g",
    fiber: "3 g",
    sugar: "2 g",
    sodium: "330 mg"
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Rich in iron and vitamin B12",
    "Bulgur provides whole-grain fiber",
    "Baked instead of fried for less fat",
    "Contains heart-healthy olive oil",
    "Provides essential minerals including zinc",
    "Mediterranean diet friendly"
  ],

  keywords: [
    "Baked Kibbeh",
    "Healthy Kibbeh",
    "Lebanese Kibbeh",
    "Mediterranean Beef Recipe",
    "Traditional Lebanese Food"
  ],

  tags: [
    "mezze",
    "Lebanese",
    "kibbeh",
    "ground beef",
    "bulgur",
    "healthy",
    "baked",
    "Mediterranean"
  ],

  featured: true
};