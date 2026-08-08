import type { Metadata } from "next";

type RecipesLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

const SITE_URL = "https://healthymezze.com";

export async function generateMetadata({ params }: RecipesLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale = locale === "ar" ? "ar" : "en";

  const title =
    safeLocale === "ar"
      ? "وصفات البحر الأبيض المتوسط الصحية | Healthy Mezze"
      : "Healthy Mediterranean Recipes | Healthy Mezze";

  const description =
    safeLocale === "ar"
      ? "اكتشف وصفات صحية ولذيذة من مطبخ البحر الأبيض المتوسط، بما في ذلك السلطات والشوربات واللفائف والأطباق الرئيسية والوصفات النباتية."
      : "Discover healthy Mediterranean recipes including fresh salads, nourishing soups, wraps, main dishes, vegetarian meals, and more.";

  const url = `${SITE_URL}/${safeLocale}/recipes`;

  return {
    title,
    description,

    keywords:
      safeLocale === "ar"
        ? [
            "وصفات صحية",
            "وصفات البحر الأبيض المتوسط",
            "أكلات متوسطية",
            "سلطات صحية",
            "شوربات صحية",
            "وصفات نباتية",
            "وصفات نباتية صرف",
            "لفائف",
            "أطباق متوسطية",
          ]
        : [
            "healthy Mediterranean recipes",
            "Mediterranean recipes",
            "healthy recipes",
            "Mediterranean food",
            "healthy salads",
            "healthy soups",
            "vegetarian recipes",
            "vegan recipes",
            "Mediterranean meals",
            "healthy wraps",
          ],

    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en/recipes`,
        ar: `${SITE_URL}/ar/recipes`,
        "x-default": `${SITE_URL}/en/recipes`,
      },
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: safeLocale === "ar" ? "ar_SA" : "en_US",
      url,
      siteName: "Healthy Mezze",
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 512,
          height: 512,
          alt: "Healthy Mezze",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/logo.png`],
    },

    authors: [
      {
        name: "Healthy Mezze",
      },
    ],

    creator: "Healthy Mezze",
    publisher: "Healthy Mezze",
  };
}

export default function RecipesLayout({ children }: RecipesLayoutProps) {
  return children;
}
