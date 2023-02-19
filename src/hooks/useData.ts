import { useState } from "react";
import useFetch from "./useFetch";

export default function useData<ResponseType>(url: string | null): {
  data: ResponseType | null;
  isLoading: boolean;
} {
  const [data, setData] = useState<ResponseType | null>(null);

  const { isLoading } = useFetch(url, setData);

  return { data, isLoading };
}
