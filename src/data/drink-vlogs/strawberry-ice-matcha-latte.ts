export type DrinkVlog = {
  slug: string;
  episode: number;

  title: string;
  description: string;

  image: string;
  youtubeUrl: string;

  ingredients: string[];
  instructions: string[];

  story: string;
  culturalContext?: string;

  healthBenefits?: string[];
  servingSuggestions?: string[];

  keywords?: string[];
  tags?: string[];

  faq?: {
    question: string;
    answer: string;
  }[];
};

export const strawberryIceMatchaLatte: DrinkVlog = {
  slug: "strawberry-ice-matcha-latte",
  episode: 1,

  title: "Strawberry Ice Matcha Latte",
  description: "A creamy iced matcha latte layered with sweet strawberry flavor, vibrant matcha, and plenty of ice for a refreshing drink that is as beautiful as it is delicious.",

  image: "/images/drink-vlog/example-drink.webp",
  youtubeUrl: "https://www.youtube.com/shorts/ARaeeUyUfs8",

  ingredients: [
    "Ingredient one",
    "Ingredient two",
  ],

  instructions: [
    "Prepare the ingredients.",
    "Mix and serve.",
  ],

  story:
    "This placeholder story will be replaced with the real story of the drink.",

  culturalContext:
    "This placeholder cultural context will be replaced with real information when the first episode is added.",

  healthBenefits: [
    "Placeholder health benefit.",
  ],

  servingSuggestions: [
    "Serve chilled.",
  ],

  keywords: [
    "healthy drink",
    "Mediterranean drink",
  ],

  tags: [
    "Drink Vlog",
    "Healthy Drinks",
  ],

  faq: [
    {
      question: "How do you make this drink?",
      answer:
        "The placeholder instructions above will be replaced with the actual preparation method.",
    },
  ],
};
