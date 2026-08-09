import { Recipe } from "@/types/recipe";

export const fattoush: Recipe = {
  id: 2,

  title: "Fattoush",

  slug: "fattoush",

  description:
    "A classic Lebanese salad made with crisp vegetables, fresh herbs, toasted pita, and a bright lemon-sumac dressing with pomegranate molasses.",

  longDescription:
    "Fattoush is a beloved Lebanese salad built around crisp seasonal vegetables, fresh herbs, and crunchy pieces of pita bread. Its signature dressing brings together lemon juice, sumac, extra virgin olive oil, and pomegranate molasses for a bright sweet-tart flavor. This Healthy Mezze version keeps the recognizable Lebanese character while focusing on fresh ingredients, balanced dressing, and a crisp pita finish.",

  image: "/images/recipes/fattoush.webp",

  imageAlt:
    "Lebanese Fattoush salad with romaine lettuce, tomatoes, cucumber, radishes, fresh herbs, toasted pita, sumac, and pomegranate molasses dressing.",

  cuisine: "Lebanese",

  category: "salads",

  prepTime: "20 mins",

  cookTime: "5 mins",

  totalTime: "25 mins",

  servings: 4,

  difficulty: "Easy",

  vegetarian: true,

  vegan: true,

  ingredients: [
    {
      amount: 1,
      unit: "large head",
      name: "Romaine lettuce",
      note: "Chopped or torn into bite-sized pieces.",
    },
    {
      amount: 2,
      unit: "",
      name: "Tomatoes",
      note: "Use ripe but firm tomatoes and cut them into bite-sized pieces.",
    },
    {
      amount: 1,
      unit: "large",
      name: "Cucumber",
      note: "Cut into thick half-moons or bite-sized pieces.",
    },
    {
      amount: 5,
      unit: "",
      name: "Radishes",
      note: "Thinly sliced for crisp texture and a mild peppery flavor.",
    },
    {
      amount: 0.5,
      unit: "large",
      name: "Green bell pepper",
      note: "Diced into small, even pieces.",
    },
    {
      amount: 3,
      unit: "",
      name: "Green onions",
      note: "Thinly sliced.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "Fresh parsley",
      note: "Finely chopped.",
    },
    {
      amount: 0.25,
      unit: "cup",
      name: "Fresh mint leaves",
      note: "Finely chopped or gently torn.",
    },
    {
      amount: 2,
      unit: "",
      name: "Pita breads",
      note: "Cut into bite-sized pieces and toasted until crisp.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "Extra virgin olive oil",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "Fresh lemon juice",
      note: "Add more after tasting if you prefer a sharper dressing.",
    },
    {
      amount: 1,
      unit: "clove",
      name: "Garlic",
      note: "Finely grated or minced.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "Sumac",
      note: "A tangy, lemony red spice made from dried sumac berries, widely used in Mediterranean and Middle Eastern cooking.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "Pomegranate molasses",
      note: "Adds a concentrated sweet-tart fruitiness to the dressing.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "Dried mint",
      note: "Adds a deeper mint flavor to the dressing.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "Sea salt",
      note: "Adjust carefully after tasting the dressing.",
    },
    {
      amount: "",
      unit: "",
      name: "Freshly ground black pepper",
      note: "To taste.",
    },
  ],

  instructions: [
    "Wash and thoroughly dry the lettuce, tomatoes, cucumber, radishes, green pepper, parsley, mint, and green onions. Excess water can dilute the dressing.",
    "Cut the vegetables into bite-sized pieces, keeping the pieces reasonably uniform so each forkful has a good balance of texture.",
    "Cut the pita bread into small pieces. Toast it in a skillet with a little olive oil over medium heat until crisp and lightly golden, turning frequently so it does not burn.",
    "Whisk together the extra virgin olive oil, lemon juice, garlic, sumac, pomegranate molasses, dried mint, salt, and black pepper until well combined.",
    "Place the romaine, tomatoes, cucumber, radishes, green pepper, green onions, parsley, and fresh mint in a large serving bowl.",
    "Taste the dressing before adding it to the salad. It should be bright, tangy, lightly fruity, and well balanced rather than overly sweet.",
    "Pour the dressing over the vegetables and toss gently until everything is lightly coated.",
    "Add the toasted pita immediately before serving and toss briefly so the pita remains crisp.",
    "Finish with a light sprinkle of sumac and serve immediately.",
  ],

  nutrition: {
    calories: 220,
    protein: "5 g",
    carbs: "24 g",
    fat: "12 g",
    fiber: "5 g",
    sugar: "6 g",
    sodium: "330 mg",
  },

  healthBenefits: [
    "Provides dietary fiber from lettuce, vegetables, and fresh herbs.",
    "Provides vitamin C and other micronutrients from fresh vegetables and lemon.",
    "Extra virgin olive oil provides predominantly monounsaturated fat.",
    "Fresh herbs and vegetables contribute a variety of plant compounds and antioxidants.",
    "Pita provides carbohydrates that can make the salad more substantial as part of a balanced meal.",
  ],

  keywords: [
    "Fattoush",
    "Lebanese Fattoush",
    "Lebanese Salad",
    "Fattoush Salad Recipe",
    "Healthy Fattoush",
    "Mediterranean Salad",
    "Sumac Salad",
    "Pita Bread Salad",
  ],

  tags: ["Salad", "Lebanese", "Mediterranean", "Vegetarian", "Vegan", "Healthy", "Fresh", "Quick"],

  featured: true,
};
