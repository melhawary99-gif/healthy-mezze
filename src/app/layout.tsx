import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Healthy Mezze | Fresh Mediterranean Recipes",
  description:
    "Discover fresh Mediterranean recipes including healthy salads, vegetarian meals, vegan dishes, soups, wraps, and traditional favorites made with wholesome ingredients.",
  keywords: [
    "Mediterranean recipes",
    "healthy recipes",
    "Greek recipes",
    "vegetarian recipes",
    "vegan recipes",
    "healthy meals",
    "Mediterranean diet",
    "easy recipes",
  ],
  openGraph: {
    title: "Healthy Mezze | Fresh Mediterranean Recipes",
    description: "Fresh, healthy Mediterranean recipes made simple.",
    type: "website",
    siteName: "Healthy Mezze",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Mezze | Fresh Mediterranean Recipes",
    description: "Fresh, healthy Mediterranean recipes made simple.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-[#FAFAF7] text-gray-900 antialiased`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}