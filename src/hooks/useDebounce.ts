import { useEffect } from "react";

// TODO!

export default function useDebounce(callback: () => void, debounce: number) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback();
    }, debounce);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  // what is the thing we are debouncing?
}
