import { RecipeStorage } from "@/types/recipeTranslation";
import { useTranslations } from "next-intl";

interface RecipeStorageSectionProps {
  storage: RecipeStorage;
}

export default function RecipeStorageSection({ storage }: RecipeStorageSectionProps) {
  const t = useTranslations("Recipe");

  return (
    <section className="rounded-[2rem] border border-blue-100 bg-blue-50/50 p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
        {t("storageLabel")}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">🥡 {t("storageTitle")}</h2>

      <div className="mt-6 space-y-4">
        {storage.instructions.map((instruction) => (
          <p key={instruction} className="leading-7 text-gray-700">
            {instruction}
          </p>
        ))}
      </div>

      {(storage.duration || storage.container) && (
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {storage.duration && (
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-gray-500">{t("storageDuration")}</p>

              <p className="mt-2 font-medium text-gray-900">{storage.duration}</p>
            </div>
          )}

          {storage.container && (
            <div className="rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-gray-500">{t("storageContainer")}</p>

              <p className="mt-2 font-medium text-gray-900">{storage.container}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
