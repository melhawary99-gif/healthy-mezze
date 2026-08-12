import { Recipe } from "@/types/recipe";

export const whiteBeanSalad: Recipe = {
  id: 11,

  title: "Mediterranean White Bean Salad",

  slug: "mediterranean-white-bean-salad",

  description:
    "A hearty Mediterranean white bean salad with creamy cannellini beans, crisp cucumber, juicy tomatoes, fresh herbs, feta cheese, and a bright lemon-olive oil dressing.",

  longDescription:
    "This Mediterranean White Bean Salad brings together creamy cannellini beans, crisp cucumber, ripe tomatoes, fresh parsley, mint, and crumbled feta in a simple lemon and extra virgin olive oil dressing. The beans make the salad satisfying and naturally rich in plant-based protein and fiber, while the fresh vegetables and herbs keep it bright and refreshing. It works well as a light lunch, a side dish, or a make-ahead meal-prep salad. Allowing the salad to rest briefly before serving gives the beans time to absorb the lemony dressing and helps the herbs and vegetables develop a more balanced flavor.",

  image: "/images/recipes/white-bean-salad.webp",

  imageAlt:
    "Mediterranean white bean salad with cannellini beans, cucumber, tomatoes, parsley, mint, and crumbled feta cheese.",

  cuisine: "Lebanese",

  category: "salads",

  prepTime: "15 mins",

  cookTime: "0 mins",

  totalTime: "15 mins",

  servings: 4,

  difficulty: "Easy",

  ingredients: [
    {
      amount: 2,
      unit: "cups",
      name: "canned cannellini beans",
      note: "Drain and rinse thoroughly, then allow excess water to drain before adding to the salad.",
    },
    {
      amount: 1,
      unit: "",
      name: "cucumber",
      note: "Diced into small, even pieces for a consistent texture.",
    },
    {
      amount: 1,
      unit: "",
      name: "tomato",
      note: "Diced. If very juicy, remove some excess seeds before adding.",
    },
    {
      amount: 0.25,
      unit: "",
      name: "red onion",
      note: "Finely chopped.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "fresh parsley",
      note: "Chopped finely so it distributes evenly throughout the salad.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh mint",
      note: "Finely chopped.",
    },
    {
      amount: 0.5,
      unit: "cup",
      name: "feta cheese",
      note: "Crumbled just before adding to the salad.",
    },
    {
      amount: 3,
      unit: "tbsp",
      name: "extra virgin olive oil",
      note: "Use a good-quality olive oil because it forms the base of the dressing.",
    },
    {
      amount: 2,
      unit: "tbsp",
      name: "fresh lemon juice",
      note: "Add gradually and adjust to taste depending on the acidity of the lemon.",
    },
    {
      amount: 1,
      unit: "tsp",
      name: "dried oregano",
      note: "Rub gently between your fingers before adding to release more aroma.",
    },
    {
      amount: 0.5,
      unit: "tsp",
      name: "salt",
      note: "Start with less if the feta is particularly salty, then adjust after tossing.",
    },
    {
      amount: 0.25,
      unit: "tsp",
      name: "black pepper",
      note: "Freshly ground if available.",
    },
  ],

  instructions: [
    "Drain the cannellini beans in a colander and rinse them thoroughly under cool running water. Allow them to drain well so excess water does not dilute the dressing.",
    "Dice the cucumber and tomato into small, bite-sized pieces. If the tomato is especially juicy, remove some excess seeds to help keep the salad from becoming watery.",
    "Finely chop the red onion, parsley, and fresh mint. Keeping the herbs finely chopped helps their flavor spread throughout the beans and vegetables.",
    "Add the drained beans, cucumber, tomato, red onion, parsley, and mint to a large mixing bowl.",
    "Crumble the feta cheese over the vegetables and beans. Add it gently so the cheese remains in small pieces rather than becoming completely mashed into the salad.",
    "In a small bowl, whisk together the extra virgin olive oil, fresh lemon juice, dried oregano, salt, and black pepper until the dressing is evenly combined.",
    "Taste the dressing before adding it to the salad. Adjust the lemon, salt, or pepper if needed, keeping in mind that the feta will add additional saltiness.",
    "Pour the dressing over the bean and vegetable mixture.",
    "Toss the salad gently with a large spoon or salad utensils until the beans and vegetables are evenly coated. Avoid overmixing so the beans remain intact.",
    "Let the salad rest in the refrigerator for about 15 minutes before serving. This short resting time allows the beans and vegetables to absorb the dressing and brings the flavors together.",
    "Give the salad one gentle toss just before serving and taste once more for seasoning. Serve chilled or slightly cool as a light lunch, side dish, or meal-prep salad.",
  ],

  nutrition: {
    calories: 270,
    protein: "12 g",
    carbs: "24 g",
    fat: "15 g",
    fiber: "9 g",
    sugar: "4 g",
    sodium: "380 mg",
  },

  healthBenefits: [
    "Provides plant-based protein from cannellini beans.",
    "High in dietary fiber, which contributes to fullness and supports normal digestion.",
    "Beans provide nutrients including iron and folate.",
    "Extra virgin olive oil provides predominantly unsaturated fats.",
    "Fresh vegetables and herbs contribute vitamins, minerals, and antioxidant compounds.",
    "A satisfying combination of beans, vegetables, olive oil, and feta makes this salad suitable for a filling light meal or side dish.",
  ],

  keywords: [
    "White Bean Salad",
    "Mediterranean White Bean Salad",
    "Mediterranean Bean Salad",
    "Healthy Bean Salad",
    "Cannellini Bean Salad",
    "White Bean Feta Salad",
    "High Protein Salad",
  ],

  tags: [
    "salad",
    "Mediterranean",
    "healthy",
    "vegetarian",
    "beans",
    "white beans",
    "high protein",
    "high fiber",
    "meal prep",
  ],

  featured: true,
};
