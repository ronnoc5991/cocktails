import { Drink } from "./Drink";

type APIBaseResponse<T> = { drinks: Array<T> | null };

export type RandomDrinkResponse = APIBaseResponse<Drink>;

export type LookupByIdResponse = APIBaseResponse<Drink>;

export type LookupByNameResponse = APIBaseResponse<Drink>;
