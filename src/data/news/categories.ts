export type NewsCategory = {
  slug: string;
  nameKey:
    | "newsIngredientBenefits"
    | "newsKitchenEquipment"
    | "newsCookingTips"
    | "newsCultureHeritage";
};

export const newsCategories: NewsCategory[] = [
  {
    slug: "ingredient-benefits",
    nameKey: "newsIngredientBenefits",
  },
  {
    slug: "kitchen-equipment",
    nameKey: "newsKitchenEquipment",
  },
  {
    slug: "cooking-tips",
    nameKey: "newsCookingTips",
  },
  {
    slug: "culture-heritage",
    nameKey: "newsCultureHeritage",
  },
];
