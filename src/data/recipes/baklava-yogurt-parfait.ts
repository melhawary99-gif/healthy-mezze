import { Recipe } from "@/types/recipe";

export const baklavaYogurtParfait: Recipe = {
  id: 109,

  title: "Baklava-Inspired Yogurt Parfait",

  slug: "baklava-yogurt-parfait",

  description:
    "A lighter Mediterranean-inspired dessert layered with creamy Greek yogurt, toasted walnuts and pistachios, naturally sweet Medjool dates, fresh berries, honey, and warm cinnamon.",

  longDescription:
    "Baklava-Inspired Yogurt Parfait captures the flavors of classic baklava in a fresh, no-bake dessert. Creamy Greek yogurt is layered with chopped walnuts, pistachios, almonds, naturally sweet Medjool dates, and fresh berries, then finished with a light drizzle of honey and a touch of cinnamon. The result is creamy, crunchy, fruity, and gently sweet without the heavy syrup and pastry of traditional baklava. It makes an easy breakfast-style dessert, afternoon treat, or elegant light finish to a Mediterranean meal.",

  image: "/images/recipes/baklava-yogurt-parfait.webp",

  imageAlt:
    "Baklava-inspired Greek yogurt parfait layered with creamy yogurt, pistachios, walnuts, dates, fresh berries, honey, and cinnamon.",

  cuisine: "Middle Eastern",

  category: "desserts",

  vegan: false,

  vegetarian: true,

  prepTime: "10 mins",

  cookTime: "0 mins",

  totalTime: "25 mins",

  servings: 2,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "Greek yogurt",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "walnuts",
      note: "Roughly chopped.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "pistachios",
      note: "Roughly chopped.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "honey",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "ground cinnamon",
    },
    {
      amount: 4,
      unit: "",
      name: "Medjool dates",
      note: "Pitted and chopped.",
    },
    {
      amount: 1,
      unit: "cup",
      name: "fresh berries",
      note: "Strawberries, blueberries, raspberries, or a mixture.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "vanilla extract",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "crushed almonds",
    },
  ],

  instructions: [
    "Prepare the fruit and nuts by pitting and chopping the dates, roughly chopping the walnuts and pistachios, and crushing the almonds.",
    "In a bowl, gently mix the Greek yogurt with the vanilla extract until smooth and creamy.",
    "Combine the chopped walnuts, pistachios, and crushed almonds in a small bowl.",
    "Spoon a layer of Greek yogurt into the bottom of each serving glass.",
    "Add a layer of chopped Medjool dates and the mixed nuts.",
    "Add a layer of fresh berries.",
    "Drizzle lightly with honey and sprinkle with a small pinch of cinnamon.",
    "Repeat the yogurt, dates, nuts, and berry layers until the glasses are nearly full.",
    "Finish with fresh berries, chopped pistachios, almonds, and a light drizzle of honey.",
    "Sprinkle a small amount of cinnamon over the top.",
    "Chill for about 15 minutes before serving so the flavors can come together.",
  ],

  nutrition: {
    calories: 360,
    protein: "18 g",
    carbs: "38 g",
    fat: "16 g",
    fiber: "5 g",
    sugar: "21 g",
    sodium: "90 mg",
  },

  healthBenefits: [
    "Provides high-quality protein from Greek yogurt",
    "Greek yogurt provides calcium to support bone health",
    "Walnuts, pistachios, and almonds provide unsaturated fats",
    "Fresh berries contribute antioxidants and vitamin-rich plant compounds",
    "Dates provide naturally occurring sweetness and dietary fiber",
    "Uses a modest amount of honey instead of a heavy syrup",
    "A lighter alternative to traditional syrup-soaked baklava",
  ],

  keywords: [
    "Baklava Yogurt Parfait",
    "Healthy Baklava Dessert",
    "Greek Yogurt Parfait",
    "Mediterranean Dessert",
    "Healthy Middle Eastern Dessert",
    "Easy Yogurt Parfait",
    "Date and Pistachio Parfait",
  ],

  tags: [
    "dessert",
    "Greek yogurt",
    "Mediterranean",
    "healthy",
    "baklava",
    "parfait",
    "pistachios",
    "walnuts",
    "dates",
    "berries",
    "no bake",
  ],

  featured: false,
};
