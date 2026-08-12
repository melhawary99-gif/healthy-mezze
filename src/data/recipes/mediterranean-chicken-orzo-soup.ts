import { Recipe } from "@/types/recipe";

export const mediterraneanChickenOrzoSoup: Recipe = {
  id: 16,
  title: "Mediterranean Chicken Orzo Soup",
  slug: "mediterranean-chicken-orzo-soup",

  description:
    "A comforting Mediterranean-inspired chicken soup with tender shredded chicken, vegetables, delicate orzo, fresh herbs, and bright lemon.",

  longDescription:
    "This Mediterranean Chicken Orzo Soup is a nourishing one-pot meal built around tender shredded chicken, aromatic vegetables, delicate orzo pasta, and a light lemon-herb finish. The chicken is gently simmered in the broth rather than aggressively boiled, helping it stay juicy and easy to shred. Carrots, celery, onion, garlic, oregano, thyme, and bay leaf create a deeply savory base, while fresh lemon juice and parsley brighten the finished soup. It is comforting enough for a cozy dinner but light enough for an everyday lunch, and it reheats well when the orzo is handled carefully.",

  image: "/images/recipes/mediterranean-chicken-orzo-soup.webp",

  imageAlt:
    "Mediterranean chicken orzo soup with shredded chicken, carrots, celery, herbs, and lemon.",

  cuisine: "Mediterranean",
  category: "soups",
  prepTime: "20 mins",
  cookTime: "35 mins",
  totalTime: "55 mins",
  servings: 6,
  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
    },
    {
      amount: 1,
      unit: "medium",
      name: "yellow onion",
      note: "Diced evenly.",
    },
    {
      amount: 2,
      unit: "medium",
      name: "carrots",
      note: "Peeled and diced into small, even pieces.",
    },
    {
      amount: 2,
      unit: "stalks",
      name: "celery",
      note: "Diced into small pieces.",
    },
    {
      amount: 3,
      unit: "cloves",
      name: "garlic",
      note: "Finely minced.",
    },
    {
      amount: 2,
      unit: "",
      name: "boneless, skinless chicken breasts",
      note: "Poached whole, then shredded.",
    },
    {
      amount: 6,
      unit: "cups",
      name: "low-sodium chicken broth",
      note: "Use a good-quality broth for the best flavor.",
    },
    {
      amount: 0.75,
      unit: "cup",
      name: "dry orzo pasta",
      note: "Added near the end to prevent overcooking.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried oregano",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried thyme",
    },
    {
      amount: 1,
      unit: "",
      name: "bay leaf",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt",
      note: "Adjust according to the saltiness of the broth.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "freshly ground black pepper",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add gradually and adjust to taste.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 1,
      unit: "",
      name: "lemon",
      note: "Cut into wedges for serving.",
    },
  ],

  instructions: [
    "Heat the extra virgin olive oil in a large heavy-bottomed soup pot over medium heat.",
    "Add the onion, carrots, and celery. Cook for 6–8 minutes, stirring occasionally, until the vegetables begin to soften and the onion becomes translucent.",
    "Add the minced garlic and cook for 30–60 seconds, just until fragrant. Do not let it brown heavily.",
    "Pour in the chicken broth and add the oregano, thyme, bay leaf, salt, and black pepper. Stir well and bring to a gentle boil.",
    "Place the whole chicken breasts into the broth. Reduce the heat to maintain a gentle simmer, cover partially, and cook for about 12–15 minutes, or until the thickest part reaches 74°C (165°F).",
    "Transfer the chicken to a plate and let it rest for a few minutes. Remove the bay leaf from the soup.",
    "Return the soup to a gentle simmer and stir in the dry orzo. Cook for 8–10 minutes, stirring occasionally, until the orzo is tender but still has a slight bite.",
    "Shred the rested chicken into bite-sized strands using two forks. Keep the pieces substantial rather than shredding them too finely.",
    "Return the shredded chicken to the soup and simmer gently for 1–2 minutes to warm it through.",
    "Turn off the heat and stir in the fresh lemon juice and chopped parsley. Taste and adjust the salt, pepper, or lemon juice as needed.",
    "Let the soup rest for 2–3 minutes. The vegetables should be tender, the chicken moist, and the orzo tender without becoming mushy.",
    "Ladle into bowls and serve hot with fresh lemon wedges and additional parsley if desired.",
  ],

  nutrition: {
    calories: 285,
    protein: "27 g",
    carbs: "25 g",
    fat: "9 g",
    fiber: "3 g",
    sugar: "4 g",
    sodium: "520 mg",
  },

  healthBenefits: [
    "Provides a substantial source of lean protein from chicken breast.",
    "Provides carbohydrates from orzo for satisfying energy.",
    "Vegetables contribute fiber and important micronutrients.",
    "Fresh lemon and parsley add brightness and vitamin C.",
    "Extra virgin olive oil provides predominantly unsaturated fat.",
    "A balanced one-pot meal combining protein, vegetables, carbohydrates, and flavorful broth.",
  ],

  keywords: [
    "Chicken Orzo Soup",
    "Mediterranean Chicken Soup",
    "Healthy Chicken Soup",
    "Lemon Chicken Orzo Soup",
    "Shredded Chicken Soup",
    "Easy Chicken Orzo Soup",
    "Mediterranean Soup Recipe",
  ],

  tags: [
    "soup",
    "Mediterranean",
    "chicken",
    "orzo",
    "high protein",
    "family dinner",
    "comfort food",
    "one pot",
    "meal prep",
  ],

  featured: true,
};
