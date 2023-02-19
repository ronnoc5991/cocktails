import { useEffect, useState } from "react";

// TODO: Look over this

export default function useFetch<ResponseType>(url: string | null): {
  data: ResponseType | null;
  isLoading: boolean;
} {
  const [data, setData] = useState<ResponseType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setData(null);
        if (abortController.signal.aborted) return;
        console.error(error.status);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isLoading };
}
