import { Category } from "@/types/category";

export const cuisines = ["Egyptian", "Lebanese"] as const;

export const difficulties = ["Easy", "Medium", "Hard"] as const;

export const maxPrepTimes = [15, 30, 45, 60] as const;

export const categories: Category[] = [
  {
    id: 1,
    nameKey: "CategoriesData.breakfast.name",
    slug: "breakfast",
    descriptionKey: "CategoriesData.breakfast.description",
    image: "/images/categories/breakfast.webp",
    icon: "🍳",
  },
  {
    id: 2,
    nameKey: "CategoriesData.salads.name",
    slug: "salads",
    descriptionKey: "CategoriesData.salads.description",
    image: "/images/categories/salads.webp",
    icon: "🥗",
  },
  {
    id: 3,
    nameKey: "CategoriesData.Soups.name",
    slug: "soups",
    descriptionKey: "CategoriesData.Soups.description",
    image: "/images/categories/soups.webp",
    icon: "🍲",
  },
  {
    id: 4,
    nameKey: "CategoriesData.Main Dishes.name",
    slug: "main-dishes",
    descriptionKey: "CategoriesData.Main Dishes.description",
    image: "/images/categories/main-dishes.webp",
    icon: "🍽️",
  },
  {
    id: 5,
    nameKey: "CategoriesData.Vegetarian.name",
    slug: "vegetarian",
    descriptionKey: "CategoriesData.Vegetarian.description",
    image: "/images/categories/vegetarian.webp",
    icon: "🥬",
  },
  {
    id: 6,
    nameKey: "CategoriesData.Vegan.name",
    slug: "vegan",
    descriptionKey: "CategoriesData.Vegan.description",
    image: "/images/categories/vegan.webp",
    icon: "🌱",
  },
  {
    id: 7,
    nameKey: "CategoriesData.Sandwiches & Wraps.name",
    slug: "sandwiches-wraps",
    descriptionKey: "CategoriesData.Sandwiches & Wraps.description",
    image: "/images/categories/wraps.webp",
    icon: "🌯",
  },
  {
    id: 8,
    nameKey: "CategoriesData.SNACK.name",
    slug: "snack",
    descriptionKey: "CategoriesData.SNACK.description",
    image: "/images/categories/snacks.webp",
    icon: "🥜",
  },
  {
    id: 9,
    nameKey: "CategoriesData.Mezze.name",
    slug: "mezze",
    descriptionKey: "CategoriesData.Mezze.description",
    image: "/images/categories/mezze.webp",
    icon: "🧆",
  },
  {
    id: 10,
    nameKey: "CategoriesData.Drinks.name",
    slug: "drinks",
    descriptionKey: "CategoriesData.Drinks.description",
    image: "/images/categories/drinks.webp",
    icon: "🥤",
  },
  {
    id: 11,
    nameKey: "CategoriesData.Desserts.name",
    slug: "desserts",
    descriptionKey: "CategoriesData.Desserts.description",
    image: "/images/categories/desserts.webp",
    icon: "🍰",
  },
  {
    id: 12,
    nameKey: "CategoriesData.Dips & Sauces.name",
    slug: "dips-sauces",
    descriptionKey: "CategoriesData.Dips & Sauces.description",
    image: "/images/categories/dips.webp",
    icon: "🥣",
  },
];
