export async function getRecipeTranslation(slug: string, locale: "en" | "ar") {
  if (locale === "en") {
    return null;
  }

  try {
    return (await import(`@/translations/${locale}/recipes/${slug}`)).default;
  } catch {
    return null;
  }
}
