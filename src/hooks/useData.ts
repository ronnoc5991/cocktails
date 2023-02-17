import { useState } from "react";
import useFetch from "./useFetch";

export default function useData<ResponseType>(
  url: string | null
): ResponseType | null {
  const [data, setData] = useState<ResponseType | null>(null);

  useFetch(url, setData);

  return data;
}
