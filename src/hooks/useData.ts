import { useEffect, useState } from "react";

export default function useData<ResponseType>(
  url: string | null
): ResponseType | null {
  const [data, setData] = useState<ResponseType | null>(null);

  useEffect(() => {
    if (!url) {
      setData(null); // is this a common wish?
      return;
    }

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (abortController.signal.aborted) return;
        console.error(error.status);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return data;
}
