import { Recipe } from "@/types/recipe";

export const mediterraneanVegetableSoup: Recipe = {
  id: 108,

  title: "Syrian Mediterranean Vegetable Soup",

  slug: "mediterranean-vegetable-soup",

  description:
    "A hearty Syrian-style Mediterranean vegetable soup with potatoes, carrots, zucchini, tomatoes, chickpeas, garlic, warm spices, and lemon.",

  longDescription:
    "This Syrian Mediterranean Vegetable Soup is a rustic, nourishing bowl inspired by the everyday cooking traditions of Syria and the wider Levant. Tender potatoes, carrots, zucchini, tomatoes, green beans, and chickpeas simmer gently in a fragrant broth with garlic, cumin, coriander, and extra virgin olive oil. The vegetables are deliberately left in bite-sized pieces rather than blended, giving every spoonful a satisfying variety of textures. A final squeeze of fresh lemon and a handful of parsley brighten the broth and balance the natural sweetness of the vegetables. It is a simple, plant-based soup designed for a wholesome family meal.",

  image: "/images/recipes/mediterranean-vegetable-soup.webp",

  imageAlt:
    "Syrian-style Mediterranean vegetable soup with colorful vegetables, chickpeas, parsley, and lemon.",

  cuisine: "Syrian",

  category: "soups",

  vegetarian: true,

  vegan: true,

  prepTime: "20 mins",

  cookTime: "40 mins",

  totalTime: "1 hr",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note:
        "Use a flavorful olive oil because it forms part of the soup's aromatic base.",
    },
    {
      amount: 1,
      unit: "",
      name: "medium onion, finely diced",
      note:
        "Dice evenly so the onion softens without disappearing completely into the broth.",
    },
    {
      amount: 4,
      unit: "cloves",
      name: "garlic, minced",
      note:
        "Fresh garlic gives the broth its characteristic savory aroma.",
    },
    {
      amount: 2,
      unit: "",
      name: "medium carrots, peeled and cut into small cubes",
      note:
        "Keep the pieces similar in size to the potatoes so both cook evenly.",
    },
    {
      amount: 2,
      unit: "",
      name: "medium potatoes, peeled and cut into 2 cm cubes",
      note:
        "Use waxy or all-purpose potatoes that hold their shape during simmering.",
    },
    {
      amount: 2,
      unit: "",
      name: "medium zucchini, cut into 2 cm cubes",
      note:
        "Zucchini cooks faster than potatoes, so it is added later.",
    },
    {
      amount: 150,
      unit: "g",
      name: "green beans, trimmed and cut into 2–3 cm pieces",
      note:
        "Fresh or frozen green beans work well.",
    },
    {
      amount: 3,
      unit: "",
      name: "ripe tomatoes, diced",
      note:
        "Use ripe tomatoes for the best natural sweetness and acidity.",
    },
    {
      amount: 1,
      unit: "can",
      name: "chickpeas (400 g), drained and rinsed",
      note:
        "Rinsing removes excess canning liquid and keeps the broth cleaner.",
    },
    {
      amount: 6,
      unit: "cups",
      name: "low-sodium vegetable broth",
      note:
        "Low-sodium broth gives you better control over the final salt level.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cumin",
      note:
        "Adds warm earthy depth without overpowering the vegetables.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground coriander",
      note:
        "Adds a gentle citrusy warmth that works especially well with cumin.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "sweet paprika",
      note:
        "Adds color and mild sweetness rather than heat.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "sea salt, plus more to taste",
      note:
        "Start with less if your vegetable broth already contains salt.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "freshly ground black pepper",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice, plus more to taste",
      note:
        "Add near the end so the lemon remains bright and fresh.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "fresh parsley, chopped",
      note:
        "Reserve a little for garnishing individual bowls.",
    },
    {
      amount: 1,
      unit: "",
      name: "lemon, cut into wedges for serving",
    },
  ],

  instructions: [
    "Prepare all the vegetables before starting. Cut the potatoes and carrots into similar-sized pieces, keep the zucchini slightly larger, and cut the green beans into short pieces. This helps the vegetables finish at different cooking speeds without becoming mushy.",
    "Heat the olive oil in a large heavy-bottomed soup pot over medium heat. Add the onion and cook for 5–6 minutes, stirring occasionally, until soft and translucent but not deeply browned.",
    "Add the garlic, cumin, coriander, and paprika. Stir constantly for about 30–45 seconds until fragrant. Do not let the garlic or spices burn because burnt spices can make the entire broth bitter.",
    "Add the carrots and potatoes and stir for 2 minutes so they become lightly coated with the seasoned oil.",
    "Add the tomatoes and vegetable broth. Bring the soup to a gentle boil, then reduce the heat to maintain a steady simmer. Cover partially and cook for about 15 minutes, or until the potatoes are beginning to become tender but still hold their shape.",
    "Add the green beans, zucchini, and chickpeas. Continue simmering uncovered for 10–12 minutes. The soup should bubble gently rather than boil aggressively.",
    "Check the vegetables with a fork. The potatoes and carrots should be tender when pierced, while the zucchini and green beans should remain intact and slightly firm rather than falling apart.",
    "Season with salt and black pepper. Taste the broth before adding more salt because the chickpeas and vegetable broth may already contain sodium.",
    "Turn off the heat and stir in the fresh lemon juice and chopped parsley. Taste again and add a little more lemon if the soup tastes heavy or overly sweet.",
    "Let the soup rest for 5 minutes before serving. This allows the herbs and spices to settle into the broth while the vegetables remain intact.",
    "Ladle the soup into bowls and finish with fresh parsley, a drizzle of extra virgin olive oil, and lemon wedges. Serve warm with crusty bread or warm pita.",
  ],

  nutrition: {
    calories: 275,
    protein: "10 g",
    carbs: "39 g",
    fat: "9 g",
    fiber: "9 g",
    sugar: "8 g",
    sodium: "470 mg",
  },

  healthBenefits: [
    "Provides plant-based protein from chickpeas and vegetables",
    "High in dietary fiber",
    "Provides a variety of vitamins, minerals, and antioxidant compounds",
    "Contains heart-friendly extra virgin olive oil",
    "Naturally vegetarian and vegan",
    "Provides a satisfying combination of vegetables and legumes",
  ],

  keywords: [
    "Syrian Vegetable Soup",
    "Syrian Mediterranean Soup",
    "Mediterranean Vegetable Soup",
    "Lebanese Vegetable Soup",
    "Vegan Vegetable Soup",
    "Chickpea Vegetable Soup",
    "Healthy Mediterranean Soup",
  ],

  tags: [
    "soup",
    "Syrian",
    "Mediterranean",
    "vegetarian",
    "vegan",
    "dairy-free",
    "chickpeas",
    "vegetables",
    "high fiber",
    "healthy",
    "comfort food",
    "meal prep",
  ],

  featured: false,
};
