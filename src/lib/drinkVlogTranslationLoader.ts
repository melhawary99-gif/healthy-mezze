import { getDrinkVlogTranslation as getStoredDrinkVlogTranslation } from "@/data/drink-vlog-translations";

export function getDrinkVlogTranslation(
  slug: string,
  locale: "en" | "ar",
) {
  return getStoredDrinkVlogTranslation(slug, locale);
}
