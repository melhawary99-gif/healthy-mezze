"use client";

import { useEffect, useState } from "react";

interface FavoriteButtonProps {
  slug: string;
}

const STORAGE_KEY = "healthy-mezze-favorites";

export default function FavoriteButton({
  slug,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? "[]"
      ) as string[];

      setIsFavorite(favorites.includes(slug));
    } catch {
      setIsFavorite(false);
    }
  }, [slug]);

  const toggleFavorite = () => {
    try {
      const favorites = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? "[]"
      ) as string[];

      const updated = favorites.includes(slug)
        ? favorites.filter((item) => item !== slug)
        : [...favorites, slug];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updated)
      );

      setIsFavorite(updated.includes(slug));
    } catch (error) {
      console.error("Unable to update favorites:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleFavorite}
      aria-label={
        isFavorite
          ? "Remove from favorites"
          : "Add to favorites"
      }
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
        isFavorite
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <span className="text-lg">
        {isFavorite ? "❤️" : "🤍"}
      </span>

      {isFavorite ? "Saved" : "Save"}
    </button>
  );
}