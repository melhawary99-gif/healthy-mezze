import type { DrinkVlog } from "@/types/drinkVlog";
import { strawberryIceMatchaLatte } from "./strawberry-ice-matcha-latte";
import { oreoIcedLatte } from "./oreo-iced-latte";
import { blueCuracaoLemonIcedTea } from "./blue-curacao-lemon-iced-tea";
import { caramelIceLatte } from "./caramel-ice-latte";
import { passionFruitChocoSmoothie } from "./passion-fruit-choco-smoothie";
import { blueMatchaLatteButterflyPeaFlower } from "./blue-matcha-latte-butterfly-pea-flower";

export const drinkVlogs: DrinkVlog[] = [
  strawberryIceMatchaLatte,
  oreoIcedLatte,
  blueCuracaoLemonIcedTea,
  caramelIceLatte,
  passionFruitChocoSmoothie,
  blueMatchaLatteButterflyPeaFlower,
];

export function getDrinkVlogBySlug(slug: string) {
  return drinkVlogs.find((drink) => drink.slug === slug);
}

export function getLatestDrinkVlog() {
  return [...drinkVlogs].sort((a, b) => b.episode - a.episode)[0];
}
