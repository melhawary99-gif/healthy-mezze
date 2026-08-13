import { Recipe } from "@/types/recipe";

export const authenticLebaneseMintTea: Recipe = {
  id: 90,

  title: "Authentic Lebanese Mint Tea (Shai bil Nana)",

  slug: "authentic-lebanese-mint-tea",

  description:
    "A traditional Lebanese black tea infused with fresh mint leaves and lightly sweetened with optional honey, served hot and fragrant.",

  longDescription:
    "Shai bil Nana, or Lebanese Mint Tea, is a familiar hot beverage in Lebanon and across the Levant. Strong black tea is combined with fresh mint to create a fragrant, refreshing drink that is often served after meals or offered to guests. The key to a balanced cup is to avoid over-steeping the black tea: the tea should provide a warm, full-bodied base while the fresh mint contributes its bright aroma. This version keeps honey optional so the natural character of the tea and mint remains easy to taste. Serve it immediately while hot, preferably in heatproof glasses or small tea cups, with a fresh mint sprig for aroma.",

  image: "/images/recipes/authentic-lebanese-mint-tea.webp",

  imageAlt:
    "Authentic Lebanese mint tea served hot in clear glasses with fresh mint leaves and a traditional teapot.",

  cuisine: "Lebanese",

  category: "drinks",

  prepTime: "5 mins",

  cookTime: "5 mins",

  totalTime: "10 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 4,
      unit: "cups",
      name: "water",
      note:
        "Use fresh drinking water for a clean-tasting tea. Bring it just to a boil before steeping.",
    },
    {
      amount: 4,
      unit: "tea bags",
      name: "black tea",
      note:
        "Or use 4 teaspoons of loose black tea. Choose a good-quality black tea with a clean, full-bodied flavor.",
    },
    {
      amount: 1,
      unit: "",
      name: "large handful fresh mint leaves",
      note:
        "Use fresh, fragrant leaves. Gently bruise a few leaves if you want a stronger mint aroma.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "honey",
      note:
        "Optional. Taste the tea first because the mint and black tea should remain noticeable.",
    },
    {
      amount: 1,
      unit: "",
      name: "fresh mint sprigs",
      note:
        "For garnish and additional fresh mint aroma when serving.",
    },
  ],

  instructions: [
    "Bring the water to a full boil in a saucepan or kettle.",
    "Remove the water from the heat and immediately add the black tea bags or loose black tea.",
    "Steep the black tea for 3–4 minutes. Avoid steeping much longer, as prolonged steeping can make the tea noticeably bitter.",
    "Add the fresh mint leaves and steep for another 2–3 minutes. The mint should release a clear, fresh aroma without losing its brightness.",
    "Remove the tea bags, or strain the loose tea and mint leaves through a fine tea strainer.",
    "Taste the tea before sweetening. Stir in the optional honey if you prefer a lightly sweetened drink.",
    "Pour the hot tea into heatproof glasses or small tea cups, leaving enough room for comfortable handling.",
    "Garnish each serving with a fresh mint sprig and serve immediately while hot.",
  ],

  nutrition: {
    calories: 18,
    protein: "0 g",
    carbs: "5 g",
    fat: "0 g",
    fiber: "0 g",
    sugar: "5 g",
    sodium: "5 mg",
  },

  healthBenefits: [
    "Black tea naturally contains antioxidant compounds.",
    "Fresh mint contributes a refreshing aroma and flavor and is traditionally enjoyed after meals.",
    "The drink is naturally low in calories when prepared without honey.",
    "Contains no dairy.",
    "Provides fluid as part of a balanced diet.",
    "Honey can be adjusted or omitted according to personal preference.",
    "Its warm mint aroma makes it a comforting traditional beverage after meals or during gatherings.",
  ],

  keywords: [
    "Lebanese Mint Tea",
    "Shai bil Nana",
    "Shay bil Nana",
    "Lebanese Tea",
    "Middle Eastern Mint Tea",
    "Traditional Lebanese Drink",
    "Fresh Mint Tea",
    "Lebanese Black Tea",
    "Mint Tea",
  ],

  tags: [
    "drink",
    "tea",
    "Lebanese",
    "mint",
    "traditional",
    "healthy",
    "hot drink",
    "Middle Eastern",
  ],

  featured: true,
};
