import type { DrinkVlog } from "@/types/drinkVlog";
import { strawberryIceMatchaLatte } from "./strawberry-ice-matcha-latte";
import { oreoIcedLatte } from "./oreo-iced-latte";
import { blueCuracaoLemonIcedTea } from "./blue-curacao-lemon-iced-tea";

export const drinkVlogs: DrinkVlog[] = [
  strawberryIceMatchaLatte,
  oreoIcedLatte,
  blueCuracaoLemonIcedTea,
];

export function getDrinkVlogBySlug(slug: string) {
  return drinkVlogs.find((drink) => drink.slug === slug);
}

export function getLatestDrinkVlog() {
  return [...drinkVlogs].sort((a, b) => b.episode - a.episode)[0];
}
