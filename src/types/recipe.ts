export interface Recipe {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category:
    | "Salads"
    | "Main Dishes"
    | "Soups"
    | "Vegetarian"
    | "Vegan"
    | "Sandwiches & Wraps";
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
}