import { Category } from "@/types/category";

export const cuisines = ["Egyptian", "Lebanese"] as const;

export const difficulties = ["Easy", "Medium", "Hard"] as const;

export const maxPrepTimes = [15, 30, 45, 60] as const;

export const categories: Category[] = [
  {
    id: 1,
    name: "Breakfast",
    slug: "breakfast",
    description: "Healthy Mediterranean breakfasts to start your day.",
    image: "/images/categories/breakfast.webp",
    icon: "🍳",
  },
  {
    id: 2,
    name: "Salads",
    slug: "salads",
    description: "Fresh vegetables, herbs, and Mediterranean flavors.",
    image: "/images/categories/salads.webp",
    icon: "🥗",
  },
  {
    id: 3,
    name: "Soups",
    slug: "soups",
    description: "Comforting soups packed with vegetables and legumes.",
    image: "/images/categories/soups.webp",
    icon: "🍲",
  },
  {
    id: 4,
    name: "Main Dishes",
    slug: "main-dishes",
    description: "Healthy Mediterranean meals made with wholesome ingredients.",
    image: "/images/categories/main-dishes.webp",
    icon: "🍽️",
  },
  {
    id: 5,
    name: "Vegetarian",
    slug: "vegetarian",
    description: "Plant-based recipes full of flavor and nutrition.",
    image: "/images/categories/vegetarian.webp",
    icon: "🥬",
  },
  {
    id: 6,
    name: "Vegan",
    slug: "vegan",
    description: "Healthy vegan recipes inspired by Mediterranean traditions.",
    image: "/images/categories/vegan.webp",
    icon: "🌱",
  },
  {
    id: 7,
    name: "Sandwiches & Wraps",
    slug: "sandwiches-wraps",
    description: "Fresh wraps and sandwiches perfect for healthy meals.",
    image: "/images/categories/wraps.webp",
    icon: "🌯",
  },
  {
    id: 8,
    name: "Snack",
    slug: "snack",
    description: "Healthy Mediterranean snacks and light bites.",
    image: "/images/categories/snacks.webp",
    icon: "🥜",
  },
  {
    id: 9,
    name: "Mezze",
    slug: "mezze",
    description: "Traditional Mediterranean appetizers and sharing plates.",
    image: "/images/categories/mezze.webp",
    icon: "🧆",
  },
  {
    id: 10,
    name: "Drinks",
    slug: "drinks",
    description: "Refreshing traditional Egyptian and Lebanese beverages.",
    image: "/images/categories/drinks.webp",
    icon: "🥤",
  },
  {
    id: 11,
    name: "Desserts",
    slug: "desserts",
    description: "Healthier Mediterranean-inspired desserts.",
    image: "/images/categories/desserts.webp",
    icon: "🍰",
  },
  {
    id: 12,
    name: "Dips & Sauces",
    slug: "dips-sauces",
    description: "Classic Mediterranean dips and flavorful sauces.",
    image: "/images/categories/dips.webp",
    icon: "🥣",
  },
];