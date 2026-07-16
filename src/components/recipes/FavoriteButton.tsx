"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "healthy-mezze-favorites";

interface FavoriteButtonProps {
  recipeId: number;
}

function readFavorites(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as number[];
    return [];
  } catch {
    return [];
  }
}

function writeFavorites(list: number[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export default function FavoriteButton({ recipeId }: FavoriteButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const favs = readFavorites();
    setSaved(favs.includes(recipeId));
  }, [recipeId]);

  function toggle() {
    const favs = readFavorites();
    const exists = favs.includes(recipeId);

    let next: number[];
    if (exists) {
      next = favs.filter((id) => id !== recipeId);
    } else {
      next = [...favs, recipeId];
    }

    writeFavorites(next);
    setSaved(!exists);
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 ${
        saved
          ? "bg-green-700 text-white hover:bg-green-800"
          : "bg-white text-green-700 border border-green-200 hover:bg-green-50"
      }`}
    >
      <span className="text-lg leading-none">{saved ? "♥" : "♡"}</span>
      <span>{saved ? "Saved" : "Save Recipe"}</span>
    </button>
  );
}
