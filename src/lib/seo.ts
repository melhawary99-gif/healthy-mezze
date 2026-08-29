import type { Metadata } from "next";

export const SITE_URL = "https://www.healthymezze.com";

export const LOCALES = ["en", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export function getLocalizedUrl(locale: Locale, path = "") {
  const cleanPath = path ? `/${path.replace(/^\/+/, "")}` : "";
  return `${SITE_URL}/${locale}${cleanPath}`;
}

export function getLanguageAlternates(path = "") {
  return {
    en: getLocalizedUrl("en", path),
    ar: getLocalizedUrl("ar", path),
    "x-default": getLocalizedUrl("en", path),
  };
}

export function localizedAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  return {
    canonical: getLocalizedUrl(locale, path),
    languages: getLanguageAlternates(path),
  };
}

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/images/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "Healthy Mezze",
};
