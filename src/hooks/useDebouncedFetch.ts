import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useDebouncedFetch<ResponseType>(
  url: string | null,
  onDataReceived: (data: ResponseType) => void,
  debounce: number
) {
  const [debouncedUrl, setDebouncedUrl] = useState(url);

  useFetch(debouncedUrl, onDataReceived);

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
}
