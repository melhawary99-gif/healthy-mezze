import { Recipe } from "@/types/recipe";

export const healthyChickenMakanek: Recipe = {
  id: 70,

  title: "Healthy Chicken Makanek",

  slug: "healthy-chicken-makanek",

  description:
    "Lean homemade Lebanese-style chicken sausages seasoned with garlic, parsley, lemon juice, and warm Mediterranean spices, then lightly pan-seared for a flavorful, protein-rich mezze.",

  longDescription:
    "Makanek are small Lebanese sausages traditionally prepared with beef or lamb and served as part of a mezze spread. This lighter homemade version uses lean ground chicken while keeping the characteristic Lebanese combination of garlic, coriander, allspice, cinnamon, and fresh lemon juice. The mixture is rested so the spices can develop, shaped into small finger-length sausages, and gently pan-seared in olive oil until browned and fully cooked. Served with lemon, parsley, fresh vegetables, hummus, or warm whole wheat pita, these chicken makanek make a flavorful high-protein mezze without relying on a large amount of added fat.",

  image: "/images/recipes/healthy-chicken-makanek.webp",

  imageAlt:
    "Golden-browned Lebanese chicken makanek seasoned with garlic and warm spices, served with parsley and lemon wedges.",

  cuisine: "Lebanese",

  category: "mezze",

  prepTime: "20 mins",

  cookTime: "15 mins",

  totalTime: "35 mins",

  servings: 4,

  difficulty: "Medium",

  ingredients: [
    {
      amount: 500,
      unit: "g",
      name: "lean ground chicken",
    },
    {
      amount: 3,
      unit: "cloves",
      name: "garlic, minced",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh parsley, finely chopped",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground coriander",
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
      amount: 0.5,
      unit: "tsp",
      name: "paprika",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground black pepper",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "cayenne pepper (optional)",
    },
  ],

  instructions: [
    "Combine the ground chicken, minced garlic, parsley, lemon juice, olive oil, coriander, allspice, cinnamon, paprika, black pepper, salt, and optional cayenne in a large bowl.",
    "Mix gently but thoroughly until the spices and herbs are evenly distributed throughout the chicken. Avoid overmixing, which can make the cooked makanek dense.",
    "Cover the bowl and refrigerate the seasoned mixture for at least 30 minutes. This resting time allows the garlic, spices, and lemon to develop their flavor.",
    "With slightly damp hands, divide the chilled mixture into small portions and shape each one into a short, finger-length sausage. Keep the pieces similar in size so they cook evenly.",
    "Heat a non-stick skillet over medium heat. Add a small amount of olive oil only if needed to prevent sticking.",
    "Place the chicken makanek in the hot skillet without overcrowding the pan. Cook for 12–15 minutes, turning them regularly so they brown on several sides and cook evenly.",
    "Check the thickest piece before serving. Because these are made with ground chicken, they should be completely cooked through with no raw center. If using a thermometer, the center should reach 165°F (74°C).",
    "Transfer the cooked makanek to a serving platter and allow them to rest briefly. Garnish with fresh parsley and lemon wedges.",
    "Serve warm with whole wheat pita, hummus, fresh vegetables, or other Lebanese mezze.",
  ],

  nutrition: {
    calories: 240,
    protein: "28 g",
    carbs: "3 g",
    fat: "13 g",
    fiber: "1 g",
    sugar: "1 g",
    sodium: "340 mg",
  },

  healthBenefits: [
    "Excellent source of lean protein",
    "Lower in saturated fat than traditional beef or lamb makanek",
    "Provides vitamin B6 and niacin from chicken",
    "Contains antioxidant-rich garlic and Mediterranean herbs and spices",
    "Extra virgin olive oil provides predominantly unsaturated fats",
    "Naturally low in carbohydrates",
    "Fits well into a Mediterranean-style mezze meal",
  ],

  keywords: [
    "Healthy Chicken Makanek",
    "Lebanese Chicken Sausage",
    "Healthy Mezze",
    "Mediterranean Chicken",
    "High Protein Appetizer",
  ],

  tags: [
    "mezze",
    "Lebanese",
    "chicken",
    "high-protein",
    "healthy",
    "Mediterranean",
    "appetizer",
    "gluten-free",
  ],

  featured: true,
};
