import { useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import useDebouncedFetch from "../../../hooks/useDebouncedFetch";
import Input from "../../atoms/Input/Input";

type SearchBoxProps<ResponseType> = BaseProps & {
  baseUrl: string;
  onDataReceived: (data: ResponseType) => void;
};

function SearchBox<ResponseType>({
  baseUrl,
  onDataReceived,
  className,
}: SearchBoxProps<ResponseType>) {
  const [query, setQuery] = useState("");

  const concatenatedUrl: string | null = query ? `${baseUrl}${query}` : null;

  useDebouncedFetch<ResponseType>(concatenatedUrl, onDataReceived, 300);

  return (
    <Input
      type="text"
      value={query}
      onChange={(newQuery: string) => setQuery(newQuery)}
      className={classNames(className)}
    />
  );
}

export default SearchBox;
