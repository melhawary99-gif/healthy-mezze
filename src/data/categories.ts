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
    nameKey: "CategoriesData.soups.name",
    slug: "soups",
    descriptionKey: "CategoriesData.soups.description",
    image: "/images/categories/soups.webp",
    icon: "🍲",
  },
  {
    id: 4,
    nameKey: "CategoriesData.mainDishes.name",
    slug: "main-dishes",
    descriptionKey: "CategoriesData.mainDishes.description",
    image: "/images/categories/main-dishes.webp",
    icon: "🍽️",
  },
  {
    id: 5,
    nameKey: "CategoriesData.vegetarian.name",
    slug: "vegetarian",
    descriptionKey: "CategoriesData.vegetarian.description",
    image: "/images/categories/vegetarian.webp",
    icon: "🥬",
  },
  {
    id: 6,
    nameKey: "CategoriesData.vegan.name",
    slug: "vegan",
    descriptionKey: "CategoriesData.vegan.description",
    image: "/images/categories/vegan.webp",
    icon: "🌱",
  },
  {
    id: 7,
    nameKey: "CategoriesData.sandwichesWraps.name",
    slug: "sandwiches-wraps",
    descriptionKey: "CategoriesData.sandwichesWraps.description",
    image: "/images/categories/wraps.webp",
    icon: "🌯",
  },
  {
    id: 8,
    nameKey: "CategoriesData.snack.name",
    slug: "snack",
    descriptionKey: "CategoriesData.snack.description",
    image: "/images/categories/snacks.webp",
    icon: "🥜",
  },
  {
    id: 9,
    nameKey: "CategoriesData.mezze.name",
    slug: "mezze",
    descriptionKey: "CategoriesData.mezze.description",
    image: "/images/categories/mezze.webp",
    icon: "🧆",
  },
  {
    id: 10,
    nameKey: "CategoriesData.drinks.name",
    slug: "drinks",
    descriptionKey: "CategoriesData.drinks.description",
    image: "/images/categories/drinks.webp",
    icon: "🥤",
  },
  {
    id: 11,
    nameKey: "CategoriesData.desserts.name",
    slug: "desserts",
    descriptionKey: "CategoriesData.desserts.description",
    image: "/images/categories/desserts.webp",
    icon: "🍰",
  },
  {
    id: 12,
    nameKey: "CategoriesData.dipsSauces.name",
    slug: "dips-sauces",
    descriptionKey: "CategoriesData.dipsSauces.description",
    image: "/images/categories/dips.webp",
    icon: "🥣",
  },
];
