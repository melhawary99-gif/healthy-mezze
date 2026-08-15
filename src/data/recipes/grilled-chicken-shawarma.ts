import { Recipe } from "@/types/recipe";

export const grilledChickenShawarma: Recipe = {
  id: 24,

  title: "Grilled Chicken Shawarma",

  slug: "grilled-chicken-shawarma",

  description:
    "Juicy Mediterranean grilled chicken marinated in yogurt, lemon, garlic, olive oil, and warm shawarma spices, then grilled until tender with lightly charred edges.",

  longDescription:
    "Grilled Chicken Shawarma is a flavorful Lebanese-inspired dish built around tender boneless chicken thighs marinated in yogurt, fresh lemon juice, garlic, extra virgin olive oil, and a warm blend of cumin, paprika, coriander, turmeric, cinnamon, allspice, and black pepper. The yogurt helps create a tender texture while the lemon and spices give the chicken its characteristic bright, savory shawarma flavor. After an overnight marinade, the chicken is grilled over medium-high heat until cooked through and lightly charred, then rested before being sliced into thin strips. Serve it with warm pita, hummus, garlic sauce, pickled vegetables, rice, or a fresh Mediterranean salad for a satisfying meal.",

  image: "/images/recipes/grilled-chicken-shawarma.webp",

  imageAlt:
    "Grilled chicken shawarma sliced into tender strips with pita bread, garlic sauce, pickles, parsley, and fresh salad.",

  cuisine: "Lebanese",

  category: "main-dishes",

  prepTime: "20 mins",

  cookTime: "20 mins",

  totalTime: "40 mins (+ 8 hrs marinating)",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1.5,
      unit: "kg",
      name: "boneless skinless chicken thighs",
      note:
        "Chicken thighs stay juicy on the grill and work especially well for shawarma.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "plain Greek yogurt",
      note:
        "Use plain unsweetened yogurt. It helps the marinade cling to the chicken and contributes to a tender texture.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "",
      name: "juice of 2 lemons",
      note:
        "Fresh lemon juice gives the marinade its characteristic brightness.",
    },
    {
      amount: 6,
      unit: "garlic",
      name: "cloves, minced",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "ground cumin",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "paprika",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground coriander",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "turmeric",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cinnamon",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground allspice",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "cayenne pepper (optional)",
      note:
        "Add according to your preferred level of heat.",
    },
    {
      amount: 2,
      unit: "tsp",
      name: "sea salt",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "black pepper",
    },
    {
      amount: 1,
      unit: "",
      name: "fresh parsley for garnish",
    },
  ],

  instructions: [
    "Pat the chicken thighs dry with paper towels. If the pieces are very thick, gently flatten them to a more even thickness so they cook at a similar rate.",
    "In a large bowl, whisk together the Greek yogurt, olive oil, fresh lemon juice, minced garlic, cumin, paprika, coriander, turmeric, cinnamon, allspice, cayenne if using, salt, and black pepper.",
    "Add the chicken to the marinade and turn the pieces several times until every surface is well coated. Massage the marinade into the chicken so the spices are evenly distributed.",
    "Cover the bowl or transfer the chicken to a sealed food-safe container. Refrigerate for at least 8 hours, preferably overnight, to allow the flavors to develop.",
    "Remove the chicken from the refrigerator about 15–20 minutes before grilling. Keep it refrigerated until this point and do not leave raw chicken at room temperature for an extended period.",
    "Preheat a grill or grill pan over medium-high heat. The cooking surface should be hot enough that the chicken begins to sizzle as soon as it touches the grill.",
    "Remove excess marinade from the chicken without scraping it completely clean. Place the pieces on the hot grill with enough space between them to allow proper browning.",
    "Grill for about 6–8 minutes per side, depending on thickness, until the chicken is fully cooked and develops browned, lightly charred edges.",
    "Check the thickest piece for doneness with a food thermometer. Chicken should reach 74°C (165°F) internally for safe consumption.",
    "Transfer the grilled chicken to a clean cutting board and let it rest for about 5 minutes. Resting helps the juices redistribute before slicing.",
    "Slice the chicken into thin strips across the grain. Cutting after resting helps keep the shawarma juicy while creating the thin pieces that are easy to serve in wraps or bowls.",
    "Garnish with fresh parsley and serve immediately with warm pita bread, garlic sauce, hummus, rice, pickled vegetables, or a fresh Mediterranean salad.",
  ],

  nutrition: {
    calories: 360,
    protein: "39 g",
    carbs: "5 g",
    fat: "20 g",
    fiber: "1 g",
    sugar: "2 g",
    sodium: "590 mg",
  },

  healthBenefits: [
    "Excellent source of high-quality protein from chicken thighs",
    "Provides B vitamins that support normal energy metabolism",
    "Contains garlic and spices that contribute antioxidant compounds",
    "Uses extra virgin olive oil as a source of unsaturated fat",
    "Naturally low in carbohydrates before serving accompaniments are added",
    "Can be paired with vegetables, hummus, and whole-grain pita for a balanced meal",
    "Mediterranean diet friendly",
  ],

  keywords: [
    "Chicken Shawarma",
    "Grilled Chicken Shawarma",
    "Lebanese Chicken",
    "Healthy Shawarma",
    "Mediterranean Chicken",
    "Chicken Shawarma Marinade",
    "Homemade Shawarma",
  ],

  tags: [
    "main dish",
    "Lebanese",
    "chicken",
    "grilled",
    "high protein",
    "Mediterranean",
    "healthy",
    "shawarma",
  ],

  featured: true,
};
