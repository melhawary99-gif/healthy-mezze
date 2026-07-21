"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { Ingredient } from "@/types/recipe";

interface IngredientChecklistProps {
  ingredients: Ingredient[];
}

export default function IngredientChecklist({
  ingredients,
}: IngredientChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  function toggleItem(index: number) {
    setCheckedItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  }

  return (
    <ul className="space-y-3">
      {ingredients.map((ingredient, index) => {
        const checked = checkedItems.includes(index);

        return (
          <li
            key={`${index}-${ingredient.name}`}
            onClick={() => toggleItem(index)}
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:shadow-md ${
              checked
                ? "border-green-600 bg-green-50"
                : "border-gray-200 bg-white hover:border-green-300"
            }`}
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                checked
                  ? "border-green-600 bg-green-600"
                  : "border-gray-300 bg-white"
              }`}
            >
              {checked && <Check className="h-4 w-4 text-white" />}
            </div>

            <span
              className={`transition-all ${
                checked
                  ? "text-gray-400 line-through"
                  : "text-gray-700"
              }`}
            >
              <strong>{ingredient.amount}</strong>{" "}
              {ingredient.unit} {ingredient.name}
              {ingredient.note ? ` (${ingredient.note})` : ""}
            </span>
          </li>
        );
      })}
    </ul>
  );
}