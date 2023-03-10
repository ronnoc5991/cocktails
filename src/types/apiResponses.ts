import { Drink } from "./Drink";

type APIBaseResponse<T> = { drinks: Array<T> | null };

export type RandomDrinkResponse = APIBaseResponse<Drink>;

export type DrinkLookupByIdResponse = APIBaseResponse<Drink>;

export type DrinkSearchByNameResponse = APIBaseResponse<Drink>;
