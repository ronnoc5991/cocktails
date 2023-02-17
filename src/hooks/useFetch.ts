import { useEffect } from "react";

export default function useFetch<ResponseType>(
  url: string | null,
  onDataReceived: (data: ResponseType) => void
) {
  useEffect(() => {
    if (!url) return;

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => onDataReceived(data))
      .catch((error) => {
        if (abortController.signal.aborted) return;
        console.error(error.status);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);
}
