export type NewsArticle = {
  slug: string;
  category: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
  en: {
    title: string;
    excerpt: string;
    content: string[];
  };
  ar: {
    title: string;
    excerpt: string;
    content: string[];
  };
  relatedRecipes?: string[];
};

export const newsArticles: NewsArticle[] = [];
