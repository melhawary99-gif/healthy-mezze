export interface DrinkVlogFAQ {
  question: string;
  answer: string;
}

export interface DrinkVlogHealthBenefit {
  number: string;
  title: string;
  text: string;
}

export interface DrinkVlogTranslation {
  title: string;
  description: string;

  ingredients: string[];
  equipment: string[];
  instructions: string[];

  story?: string;
  culturalContext?: string;

  healthBenefits: DrinkVlogHealthBenefit[];
  healthBenefitsIntro: string;
  healthBenefitsNote: string;

  serving: {
    title: string;
    text: string;
  };

  servingSuggestions?: string[];

  keywords: string[];
  tags?: string[];

  faq: DrinkVlogFAQ[];
}
