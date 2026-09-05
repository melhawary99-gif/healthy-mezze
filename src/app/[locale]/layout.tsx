import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AuthSessionProvider from "@/components/auth/AuthSessionProvider";

import { routing } from "@/i18n/routing";
import { SITE_URL, getLanguageAlternates } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const safeLocale = locale === "ar" ? "ar" : "en";

  const isArabic = safeLocale === "ar";

  const title = isArabic
    ? "Healthy Mezze | وصفات صحية من البحر الأبيض المتوسط"
    : "Healthy Mezze | Healthy Mediterranean Recipes";

  const description = isArabic
    ? "اكتشف وصفات صحية ولذيذة من مطبخ البحر الأبيض المتوسط، مستوحاة من المطبخ المصري واللبناني واليوناني والتركي والسوري والأردني والفلسطيني."
    : "Discover healthy and delicious Mediterranean recipes inspired by Egyptian, Lebanese, Greek, Turkish, Syrian, Jordanian, and Palestinian cuisine.";

  const localizedUrl = `${SITE_URL}/${safeLocale}`;

  const keywords = isArabic
    ? [
        "وصفات صحية",
        "وصفات البحر الأبيض المتوسط",
        "أكلات متوسطية",
        "وصفات مصرية",
        "وصفات لبنانية",
        "وصفات يونانية",
        "وصفات تركية",
        "وصفات سورية",
        "وصفات أردنية",
        "وصفات فلسطينية",
        "وصفات نباتية",
        "وصفات نباتية صرف",
      ]
    : [
        "healthy Mediterranean recipes",
        "Mediterranean recipes",
        "healthy recipes",
        "Mediterranean food",
        "Egyptian recipes",
        "Lebanese recipes",
        "Greek recipes",
        "Turkish recipes",
        "Syrian recipes",
        "Jordanian recipes",
        "Palestinian recipes",
        "vegetarian recipes",
        "vegan recipes",
      ];

  return {
    metadataBase: new URL(SITE_URL),

    title,

    description,

    keywords,

    alternates: {
      canonical: localizedUrl,

      languages: getLanguageAlternates(),
    },

    robots: {
      index: true,
      follow: true,
    },

    authors: [
      {
        name: "Healthy Mezze",
      },
    ],

    creator: "Healthy Mezze",

    publisher: "Healthy Mezze",

    openGraph: {
      type: "website",

      locale: isArabic ? "ar_AR" : "en_US",

      alternateLocale: isArabic ? ["en_US"] : ["ar_AR"],

      siteName: "Healthy Mezze",

      title,

      description,

      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Healthy Mezze",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: ["/images/og-image.jpg"],
    },

    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const safeLocale = locale as "en" | "ar";

  setRequestLocale(safeLocale);

  const messages = (await import(`@/messages/${safeLocale}.json`)).default;

  return (
    <AuthSessionProvider>
      <NextIntlClientProvider locale={safeLocale} messages={messages}>
        <div dir={safeLocale === "ar" ? "rtl" : "ltr"}>
          <Header />

          <main>{children}</main>

          <Footer />
        </div>
      </NextIntlClientProvider>
    </AuthSessionProvider>
  );
}
