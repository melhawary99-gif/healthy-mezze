import { Recipe } from "@/types/recipe";

export const healthyMahalabia: Recipe = {
  id: 76,

  title: "Healthy Mahalabia (Egyptian Milk Pudding)",

  slug: "healthy-mahalabia",

  description:
    "A light and creamy Egyptian milk pudding made with low-fat milk, naturally sweetened with honey, delicately flavored with vanilla and rose water, then topped with pistachios.",

  longDescription:
    "Mahalabia is a beloved dessert enjoyed throughout Egypt and the Middle East. This lighter version uses low-fat milk, a small amount of honey for natural sweetness, and cornstarch for its silky texture instead of heavy cream. Finished with fragrant rose water, cinnamon, and chopped pistachios, it is an elegant dessert that is both satisfying and light.",

  image: "/images/recipes/healthy-mahalabia.webp",

  imageAlt:
    "Creamy Egyptian mahalabia served in glass cups with chopped pistachios, cinnamon, and dried edible rose petals.",

  cuisine: "Egyptian",

  category: "desserts",

  vegetarian: true,

  prepTime: "10 mins",

  cookTime: "15 mins",

  totalTime: "25 mins",

  servings: 6,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 4,
      unit: "cups",
      name: "low-fat milk",
      note: "Use cold or room-temperature milk for easier mixing.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "cornstarch",
      note: "Whisk with the cold water until completely smooth before adding to the milk.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "cold water",
      note: "Used to make a smooth cornstarch slurry.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "honey",
      note: "Add after removing the pudding from the heat.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "vanilla extract",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "rose water",
      note: "Add after cooking so its delicate aroma remains noticeable.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "orange blossom water",
      note: "Optional; adds a subtle floral citrus aroma.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "chopped pistachios",
      note: "Use finely or coarsely chopped pistachios according to preference.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "ground cinnamon",
      note: "For a light finishing sprinkle.",
    },
    {
      amount: 1,
      unit: "",
      name: "dried edible rose petals",
      note: "Optional; use only food-grade edible rose petals for garnish.",
    },
  ],

  instructions: [
    "In a small bowl, whisk the cornstarch with the cold water until completely smooth and no dry lumps remain.",
    "Pour the milk into a saucepan and warm it over medium heat until hot but not boiling.",
    "Slowly whisk the cornstarch mixture into the warm milk, stirring continuously so the cornstarch stays evenly distributed.",
    "Continue cooking over medium heat, stirring constantly, until the mixture thickens to a smooth pudding consistency.",
    "Remove the saucepan from the heat once the pudding is thick enough to coat the back of a spoon.",
    "Stir in the honey, vanilla extract, rose water, and optional orange blossom water until evenly combined.",
    "Pour the warm pudding into six individual serving bowls or glasses, dividing it evenly.",
    "Allow the portions to cool at room temperature until no longer hot.",
    "Cover and refrigerate for at least 2 hours, or until the mahalabia is fully chilled and set.",
    "Before serving, garnish with chopped pistachios, a light sprinkle of cinnamon, and optional dried edible rose petals.",
  ],

  nutrition: {
    calories: 145,
    protein: "7 g",
    carbs: "20 g",
    fat: "4 g",
    fiber: "1 g",
    sugar: "12 g",
    sodium: "95 mg",
  },

  healthBenefits: [
    "Provides calcium from low-fat milk.",
    "Provides high-quality protein from milk.",
    "Lower in fat than traditional milk puddings made with cream.",
    "Uses a modest amount of honey instead of refined granulated sugar.",
    "Pistachios provide unsaturated fats and antioxidant compounds.",
    "Rose water and orange blossom water add aromatic flavor without significantly increasing calories.",
    "Naturally gluten-free when all ingredients are sourced from gluten-free facilities where required.",
  ],

  keywords: [
    "Healthy Mahalabia",
    "Egyptian Milk Pudding",
    "Healthy Egyptian Dessert",
    "Mediterranean Dessert",
    "Rose Water Pudding",
    "Mahalabia Recipe",
  ],

  tags: [
    "dessert",
    "Egyptian",
    "mahalabia",
    "milk pudding",
    "healthy",
    "gluten-free",
    "Mediterranean",
    "vegetarian",
  ],

  featured: true,
};
