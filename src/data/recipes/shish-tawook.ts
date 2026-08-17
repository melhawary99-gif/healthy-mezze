import { Recipe } from "@/types/recipe";

export const shishTawook: Recipe = {
  id: 25,

  title: "Shish Tawook (Lebanese Chicken Kabobs)",

  slug: "shish-tawook",

  description:
    "Juicy Lebanese-style chicken skewers marinated in yogurt, lemon, garlic, olive oil, and warm Mediterranean spices, then grilled until tender with lightly charred edges.",

  longDescription:
    "Shish Tawook is a beloved Lebanese and Levantine grilled chicken dish built around a simple but deeply flavorful marinade. Bite-sized chicken is coated in creamy yogurt, lemon juice, garlic, olive oil, tomato paste, and aromatic spices, then rested so the flavors can penetrate the meat before grilling. The yogurt helps create a tender texture while the tomato paste and paprika encourage beautiful browning. For the best result, cut the chicken into evenly sized pieces, avoid overcrowding the skewers, keep the grill properly heated, and cook until the center reaches a safe temperature without overcooking. Traditionally enjoyed with toum (Lebanese garlic sauce), warm pita, rice, grilled vegetables, or fresh salads, Shish Tawook makes a satisfying high-protein Mediterranean meal.",

  image: "/images/recipes/shish-tawook.webp",

  imageAlt:
    "Lebanese Shish Tawook chicken skewers with juicy grilled chicken pieces, lightly charred edges, parsley, garlic sauce, and warm pita.",

  cuisine: "Lebanese",

  category: "main-dishes",

  vegan: false,

  vegetarian: false,

  prepTime: "25 mins",

  cookTime: "15 mins",

  totalTime: "40 mins (+ 6 hrs marinating)",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1.5,
      unit: "kg",
      name: "boneless skinless chicken breast",
      note:
        "Cut into evenly sized 3–4 cm cubes so the pieces cook at roughly the same rate. Chicken thighs can also be used for a juicier variation.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "plain Greek yogurt",
      note:
        "Use unsweetened yogurt. Its thickness helps the marinade cling to the chicken.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note:
        "Helps carry the spices and encourages browning on the grill.",
    },
    {
      amount: 2,
      unit: "",
      name: "fresh lemons, juiced",
      note:
        "Use fresh juice for the brightest flavor. Avoid marinating much longer than overnight because the acidic marinade can affect the chicken's texture.",
    },
    {
      amount: 5,
      unit: "cloves",
      name: "garlic, finely minced",
      note:
        "Freshly minced garlic gives the marinade its characteristic savory aroma.",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "paprika",
      note:
        "Adds warm color and a mild sweet pepper flavor.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
      note:
        "Adds earthy warmth without overpowering the chicken.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried oregano",
      note:
        "Rub lightly between your fingers before adding to release more aroma.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
      note:
        "Adjust slightly if serving with salty sauces or pickles.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "black pepper",
      note:
        "Freshly ground pepper gives the marinade a deeper flavor.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground turmeric",
      note:
        "Provides a subtle earthy note and warm golden color.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "tomato paste",
      note:
        "Adds savory depth and helps the chicken develop attractive grilled color.",
    },
    {
      amount: 6,
      unit: "",
      name: "wooden or metal skewers",
      note:
        "If using wooden skewers, soak them in water for at least 30 minutes before grilling.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh parsley, chopped",
      note:
        "Use mainly as a fresh garnish after grilling.",
    },
  ],

  instructions: [
    "Trim any excess fat or tough connective tissue from the chicken. Pat the chicken dry with paper towels, then cut it into evenly sized 3–4 cm cubes. Keeping the pieces similar in size is important because small pieces can dry out before larger pieces are safely cooked.",
    "In a large non-reactive bowl, whisk together the Greek yogurt, olive oil, fresh lemon juice, minced garlic, tomato paste, paprika, cumin, oregano, salt, black pepper, and turmeric until smooth and evenly combined.",
    "Add the chicken cubes to the marinade and toss thoroughly until every piece is coated. Cover the bowl and refrigerate for at least 6 hours. Overnight is convenient, but because the marinade contains lemon juice, avoid leaving the chicken in it for several days.",
    "If using wooden skewers, soak them in water for at least 30 minutes before grilling. Metal skewers can be used without soaking. If using an outdoor grill, prepare the cooking area so you have a hot zone and, if possible, a cooler zone for managing pieces that brown too quickly.",
    "Remove the chicken from the refrigerator shortly before threading. Shake off only the excess marinade; there should still be a thin coating around each piece. Thread the chicken onto the skewers with small gaps between pieces. Do not pack the cubes tightly together because air and heat need to circulate around them.",
    "Preheat the grill or grill pan over medium-high heat until properly hot. A hot surface helps the chicken brown instead of releasing too much liquid and steaming.",
    "Place the skewers on the hot grill. Cook for about 12–15 minutes total, turning every 2–3 minutes so the chicken browns on multiple sides. If the outside is becoming dark too quickly, move the skewers to a slightly cooler part of the grill and continue cooking.",
    "Check the thickest chicken piece with an instant-read thermometer. The center should reach 74°C (165°F) for food safety. Do not rely on grill marks or cooking time alone because cube size and grill temperature can vary.",
    "Once cooked, transfer the skewers to a clean plate and let them rest for about 5 minutes. Resting allows the juices to settle and helps keep the chicken tender.",
    "Scatter chopped fresh parsley over the chicken and serve immediately with toum, warm pita bread, rice, grilled vegetables, or a crisp Mediterranean salad.",
  ],

  nutrition: {
    calories: 330,
    protein: "42 g",
    carbs: "4 g",
    fat: "16 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "570 mg",
  },

  healthBenefits: [
    "Excellent source of high-quality protein from chicken and yogurt.",
    "Provides vitamin B6 and niacin, nutrients involved in normal energy metabolism.",
    "Naturally low in carbohydrates, making it easy to pair with vegetables or adjust with different grain portions.",
    "Provides unsaturated fat from extra virgin olive oil.",
    "Yogurt contributes protein and calcium while helping create a tender chicken texture.",
    "Garlic, lemon, herbs, and spices provide substantial flavor without relying on a heavy sauce.",
    "Pairs naturally with vegetables, whole grains, salads, and other Mediterranean-style foods.",
  ],

  keywords: [
    "Shish Tawook",
    "Lebanese Chicken Kabobs",
    "Chicken Skewers",
    "Lebanese Grilled Chicken",
    "Mediterranean Chicken",
    "Yogurt Marinated Chicken",
    "Healthy Grilled Chicken",
    "High Protein Chicken",
  ],

  tags: [
    "main dish",
    "Lebanese",
    "chicken",
    "kabobs",
    "grilled",
    "high protein",
    "Mediterranean",
    "healthy",
  ],

  featured: true,
};
