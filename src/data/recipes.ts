import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Greek Salad",
    slug: "greek-salad",
    description:
      "A refreshing Mediterranean salad with vegetables, herbs, feta cheese, and olives.",
    image: "/images/recipes/greek-salad.jpg",

    category: "Salads",

    prepTime: "15",
    cookTime: "0",
    servings: 4,
    difficulty: "Easy",

    ingredients: [
      "Tomatoes",
      "Cucumber",
      "Red onion",
      "Feta cheese",
      "Kalamata olives",
      "Extra virgin olive oil",
    ],

    instructions: [
      "Wash and chop all vegetables.",
      "Combine vegetables in a large bowl.",
      "Add feta cheese and olives.",
      "Drizzle with olive oil and serve.",
    ],

    nutrition: {
      calories: 320,
      protein: "8g",
      carbs: "18g",
      fat: "24g",
    },
  },

  {
    id: 2,
    title: "Falafel Bowl",
    slug: "falafel-bowl",
    description:
      "A nourishing bowl with crispy falafel, fresh vegetables, and Mediterranean flavors.",
    image: "/images/recipes/falafel-bowl.jpg",

    category: "Vegetarian",

    prepTime: "20",
    cookTime: "15",
    servings: 2,
    difficulty: "Medium",

    ingredients: [
      "Falafel",
      "Mixed greens",
      "Tomatoes",
      "Hummus",
      "Tahini sauce",
    ],

    instructions: [
      "Prepare fresh vegetables.",
      "Cook or warm falafel.",
      "Arrange ingredients in a bowl.",
      "Add tahini sauce and serve.",
    ],

    nutrition: {
      calories: 450,
      protein: "16g",
      carbs: "52g",
      fat: "20g",
    },
  },

  {
    id: 3,
    title: "Chicken Shawarma",
    slug: "chicken-shawarma",
    description:
      "Tender Mediterranean chicken with spices, fresh vegetables, and warm bread.",
    image: "/images/recipes/chicken-shawarma.jpg",

    category: "Main Dishes",

    prepTime: "25",
    cookTime: "20",
    servings: 4,
    difficulty: "Medium",

    ingredients: [
      "Chicken",
      "Garlic",
      "Mediterranean spices",
      "Yogurt sauce",
      "Flatbread",
    ],

    instructions: [
      "Marinate chicken with spices.",
      "Cook until tender.",
      "Prepare fresh toppings.",
      "Serve with bread and sauce.",
    ],

    nutrition: {
      calories: 520,
      protein: "35g",
      carbs: "40g",
      fat: "22g",
    },
  },

  {
    id: 4,
    title: "Lentil Soup",
    slug: "lentil-soup",
    description:
      "A comforting Mediterranean soup made with lentils, vegetables, and warming spices.",
    image: "/images/recipes/lentil-soup.jpg",

    category: "Soups",

    prepTime: "15",
    cookTime: "35",
    servings: 6,
    difficulty: "Easy",

    ingredients: [
      "Red lentils",
      "Carrots",
      "Onion",
      "Garlic",
      "Mediterranean spices",
    ],

    instructions: [
      "Prepare vegetables.",
      "Cook lentils with spices.",
      "Blend or serve chunky.",
      "Enjoy warm.",
    ],

    nutrition: {
      calories: 280,
      protein: "18g",
      carbs: "45g",
      fat: "6g",
    },
  },
];