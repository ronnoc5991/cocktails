import { useEffect, useState } from "react";

export default function useFetch<Response>(url: string): {
  data: Response | undefined;
} {
  const [data, setData] = useState<Response>();

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error(error.status);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { data };
}
