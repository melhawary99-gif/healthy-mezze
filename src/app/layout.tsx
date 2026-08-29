import type { Metadata, Viewport } from "next";
import { Cairo, Inter, Poppins } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.healthymezze.com"),

  title: {
    default: "Healthy Mezze | Fresh Mediterranean Recipes",
    template: "%s | Healthy Mezze",
  },

  description:
    "Discover healthy Mediterranean recipes inspired by Egyptian, Lebanese, Greek, Turkish, Syrian, Jordanian, and Palestinian cuisines. Enjoy nutritious salads, soups, wraps, breakfasts, desserts, and wholesome family meals.",

  applicationName: "Healthy Mezze",

  keywords: [
    "Mediterranean recipes",
    "Healthy Mediterranean food",
    "Egyptian recipes",
    "Lebanese recipes",
    "Greek recipes",
    "Turkish recipes",
    "Syrian recipes",
    "Jordanian recipes",
    "Palestinian recipes",
    "Healthy meals",
    "Vegetarian recipes",
    "Vegan recipes",
    "Mediterranean diet",
    "Healthy cooking",
    "Easy recipes",
  ],

  authors: [
    {
      name: "Healthy Mezze",
    },
  ],

  creator: "Healthy Mezze",
  publisher: "Healthy Mezze",
  category: "Food",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.healthymezze.com",
    siteName: "Healthy Mezze",

    title: "Healthy Mezze | Fresh Mediterranean Recipes",

    description:
      "Healthy Mediterranean recipes inspired by Egyptian, Lebanese, Greek, Turkish, Syrian, Jordanian, and Palestinian cuisine.",

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

    title: "Healthy Mezze | Fresh Mediterranean Recipes",

    description: "Healthy Mediterranean recipes inspired by traditional regional cuisine.",

    images: ["/images/og-image.jpg"],
  },

  alternates: {
    // Canonical URLs are defined by the localized route metadata.
  },

  other: {
    "p:domain_verify": "9c5313b6f5c1e891bac29d42d647f84e",
    "google-adsense-account": "ca-pub-2945001903757081",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Healthy Mezze",

  url: "https://www.healthymezze.com",

  logo: "https://www.healthymezze.com/logo.png",

  description:
    "Healthy Mediterranean recipes inspired by Egyptian, Lebanese, Greek, Turkish, Syrian, Jordanian, and Palestinian cuisines.",

  sameAs: [
    "https://www.facebook.com/profile.php?id=61592169398824",
    "https://www.instagram.com/healthymezze/",
    "https://ca.pinterest.com/healthymezze/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: "Healthy Mezze",

  url: "https://www.healthymezze.com",

  publisher: {
    "@type": "Organization",
    name: "Healthy Mezze",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable}
          ${poppins.variable}
          ${cairo.variable}
          bg-[#FAFAF7]
          text-gray-900
          antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
