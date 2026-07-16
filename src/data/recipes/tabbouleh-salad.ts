import { Recipe } from "@/types/recipe";

export const tabboulehSalad: Recipe = {
  id: 5,
  title: "Tabbouleh Salad",
  slug: "tabbouleh-salad",
  description:
    "A refreshing Levantine salad made with parsley, bulgur, fresh vegetables, and lemon dressing.",
  image: "/images/recipes/tabbouleh-salad.jpg",

  category: "Salads",

  prepTime: "20",
  cookTime: "10",
  servings: 4,
  difficulty: "Easy",

  ingredients: [
    "Fresh parsley",
    "Bulgur wheat",
    "Tomatoes",
    "Cucumber",
    "Fresh mint",
    "Green onion",
    "Lemon juice",
    "Extra virgin olive oil",
  ],

  instructions: [
    "Soak bulgur in hot water until tender, then drain any excess water.",
    "Chop parsley, mint, tomatoes, cucumber, and green onion finely.",
    "Combine bulgur and chopped vegetables in a large bowl.",
    "Whisk lemon juice and olive oil together, then pour over the salad.",
    "Toss everything together, season to taste, and serve chilled.",
  ],

  nutrition: {
    calories: 210,
    protein: "5g",
    carbs: "30g",
    fat: "8g",
  },
};
