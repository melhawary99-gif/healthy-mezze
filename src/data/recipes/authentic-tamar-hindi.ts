import { Recipe } from "@/types/recipe";

export const authenticTamarHindi: Recipe = {
  id: 86,

  title: "Authentic Tamar Hindi (Egyptian Tamarind Drink)",

  slug: "authentic-tamar-hindi",

  description:
    "A refreshing traditional Egyptian tamarind drink made by gently simmering and steeping tamarind pulp, then balancing its naturally sweet-tart flavor with honey and optional lemon and orange blossom water. Serve thoroughly chilled over ice.",

  longDescription:
    "Tamar Hindi, the Egyptian name commonly used for tamarind drink, is one of Egypt's beloved traditional beverages and is especially familiar during Ramadan and warm-weather gatherings. Tamarind pulp gives the drink its distinctive deep brown-amber color and naturally sweet, tangy flavor. The pulp is gently simmered and then allowed to steep so its flavor can fully develop before the liquid is strained and adjusted with honey. This version uses a modest amount of honey instead of a large quantity of refined sugar, while keeping lemon and orange blossom water optional so the final balance can be adjusted to taste. The key to a successful Tamar Hindi is balance: the drink should be noticeably tangy and fruity without becoming harsh, excessively sweet, or watery. Proper straining is also important because tamarind pulp can contain fibers and small pieces that should be removed before serving.",

  image: "/images/recipes/authentic-tamar-hindi.webp",

  imageAlt:
    "A chilled glass of Egyptian Tamar Hindi garnished with tamarind pods, lemon slices, fresh mint, and ice cubes.",

  cuisine: "Egyptian",

  category: "drinks",

  prepTime: "15 mins",

  cookTime: "10 mins",

  totalTime: "25 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 1,
      unit: "cup",
      name: "tamarind pulp (seedless)",
      note:
        "Use food-grade tamarind pulp intended for drinks or cooking. Seedless pulp is easier to work with, but some fibrous material may still need to be strained out.",
    },
    {
      amount: 6,
      unit: "cups",
      name: "water",
      note:
        "Use fresh drinking water. Filtered water can provide a cleaner flavor if your water has a strong mineral or chlorine taste.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "honey",
      note:
        "Start with less and adjust after straining. Tamarind varies in natural acidity, so the amount of sweetener needed can differ from batch to batch.",
    },
    {
      amount: 1,
      unit: "tbsp",
      name: "fresh lemon juice",
      note:
        "Optional. Add gradually because tamarind is already naturally tangy.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "orange blossom water",
      note:
        "Optional. Add at the end for a subtle floral aroma. Use sparingly so it does not overpower the tamarind.",
    },
    {
      amount: 1,
      unit: "",
      name: "Ice cubes",
      note:
        "For serving cold. Chill the Tamar Hindi first when possible so the ice does not dilute the drink too quickly.",
    },
    {
      amount: 1,
      unit: "",
      name: "Fresh mint leaves for garnish",
      note:
        "Optional. Add shortly before serving for a fresh herbal aroma.",
    },
    {
      amount: 1,
      unit: "",
      name: "Lemon slices for garnish",
      note:
        "Optional. Use thin slices for presentation and a fresh citrus aroma.",
    },
  ],

  instructions: [
    "Break the tamarind pulp into smaller pieces if necessary. Check it for any remaining seeds, stems, or unwanted debris.",
    "Place the tamarind pulp and water in a medium saucepan and bring to a gentle boil.",
    "Reduce the heat and simmer gently for about 10 minutes, stirring occasionally so the pulp softens and releases its flavor into the water.",
    "Remove the saucepan from the heat, cover it, and let the mixture steep for another 10 minutes. This additional resting time helps develop a fuller tamarind flavor without prolonged boiling.",
    "Strain the mixture through a fine-mesh sieve into a large heatproof pitcher or clean saucepan. Press the softened pulp gently to extract the flavorful liquid, but avoid forcing large fibrous pieces through the sieve.",
    "Taste the strained drink before sweetening. The natural acidity and strength of tamarind can vary, so use the taste as your guide.",
    "While the liquid is still warm, stir in the honey until completely dissolved. Add gradually rather than automatically using the entire amount.",
    "Add the lemon juice if using. Because tamarind is already tangy, add the lemon in small amounts and taste between additions.",
    "Stir in the orange blossom water if using. Add it at the end so its delicate floral aroma remains noticeable without dominating the drink.",
    "Allow the Tamar Hindi to cool, then refrigerate it until thoroughly chilled.",
    "For serving, fill glasses with ice, pour over the chilled Tamar Hindi, and garnish with fresh mint and lemon slices if desired.",
  ],

  nutrition: {
    calories: 60,
    protein: "0 g",
    carbs: "16 g",
    fat: "0 g",
    fiber: "1 g",
    sugar: "13 g",
    sodium: "8 mg",
  },

  healthBenefits: [
    "Tamarind naturally contains antioxidant plant compounds.",
    "Provides small amounts of minerals such as potassium and magnesium.",
    "Naturally caffeine-free when prepared from tamarind without tea or caffeinated ingredients.",
    "Using a measured amount of honey helps control added sweetness.",
    "Fresh lemon contributes vitamin C when used.",
    "A refreshing way to increase fluid intake, especially when served chilled.",
    "Its naturally tangy flavor can provide an alternative to heavily sweetened commercial beverages.",
  ],

  keywords: [
    "Tamar Hindi",
    "Tamarind Drink",
    "Egyptian Tamarind Drink",
    "Egyptian Tamarind Juice",
    "Traditional Egyptian Beverage",
    "Ramadan Drink",
    "Healthy Tamarind Drink",
    "Tamarind Juice",
  ],

  tags: [
    "drink",
    "Egyptian",
    "tamarind",
    "Ramadan",
    "healthy",
    "traditional",
    "vegetarian",
    "summer",
    "caffeine-free",
    "cold drink",
  ],

  featured: true,
};
