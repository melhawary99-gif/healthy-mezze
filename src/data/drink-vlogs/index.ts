import { strawberryIceMatchaLatte } from "./strawberry-ice-matcha-latte";

export const drinkVlogs = [
  strawberryIceMatchaLatte,
];

export function getDrinkVlogBySlug(slug: string) {
  return drinkVlogs.find((drink) => drink.slug === slug);
}

export function getLatestDrinkVlog() {
  return [...drinkVlogs].sort((a, b) => b.episode - a.episode)[0];
}
