import { useEffect, useState } from "react";

// TODO: Look over this

export default function useFetch<ResponseType>(
  url: string | null,
  onData: (data: ResponseType | null) => void
): { isLoading: boolean } {
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
        onData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        onData(null); // TODO: think about this
        if (abortController.signal.aborted) return;
        console.error(error.status);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { isLoading };
}
