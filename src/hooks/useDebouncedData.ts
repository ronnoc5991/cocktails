import { useEffect, useState } from "react";
import useData from "./useData";

export default function useDebouncedData<ResponseType>(
  url: string | null,
  debounce: number
): ResponseType | null {
  const [debouncedUrl, setDebouncedUrl] = useState(url);
  const data = useData<ResponseType>(debouncedUrl);

  useEffect(() => {
    let timeoutId: number;

    if (url !== debouncedUrl) {
      timeoutId = window.setTimeout(() => {
        setDebouncedUrl(url);
      }, debounce);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [url]);

  return data;
}
