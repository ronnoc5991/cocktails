import { Drink } from "../../../types/Drink";
import { Ingredient } from "../../../types/Ingredient";

export function getIngredients(drink: Drink): Array<Ingredient> {
  const list: Array<Ingredient> = [];

  // Drinks can have up to 15 ingredients and corresponding measurements (numbered 1 through 15)
  // following the naming convention "strIngredient[number]" and "strMeasure[number]"
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
