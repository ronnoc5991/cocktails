import { Drink } from "../../../types/Drink";

type Ingredient = { name: string; measurement: string | null };

type IngredientList = Array<Ingredient>;

export function getIngredientList(drink: Drink): IngredientList {
  const list: IngredientList = [];

  // TODO: leave a comment here explaining these numbers?
  for (let i = 1; i <= 15; i++) {
    const nameKey = `strIngredient${i}` as keyof Drink;
    const name = drink[nameKey];

    if (name === null) continue;

    const measurementKey = `strMeasure${i}` as keyof Drink;
    const measurement = drink[measurementKey];

    list.push({ name, measurement });
  }

  return list;
}
