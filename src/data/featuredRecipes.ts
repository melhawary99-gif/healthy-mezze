export interface FeaturedRecipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: string;
}

export const featuredRecipes: FeaturedRecipe[] = [
  {
    id: 1,
    title: "Greek Salad",
    description: "Fresh vegetables, feta cheese, olives and herbs.",
    image: "/images/greek-salad.jpg",
    prepTime: "15 min",
  },
  {
    id: 2,
    title: "Falafel Bowl",
    description: "Crispy falafel served with fresh vegetables.",
    image: "/images/falafel-bowl.jpg",
    prepTime: "25 min",
  },
  {
    id: 3,
    title: "Chicken Shawarma",
    description: "Tender chicken with Mediterranean spices.",
    image: "/images/chicken-shawarma.jpg",
    prepTime: "35 min",
  },
  {
    id: 4,
    title: "Hummus Platter",
    description: "Creamy hummus with warm pita bread.",
    image: "/images/hummus-platter.jpg",
    prepTime: "10 min",
  },
];