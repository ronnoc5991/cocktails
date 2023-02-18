import classNames from "classnames";
import { useState } from "react";
import { BaseProps } from "../../../types/BaseProps";
import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import Button from "../../molecules/Button/Button";
import "./styles.scss";

type Props = BaseProps & {
  onSearch: (query: string) => void;
};

function SearchBar({ onSearch, className }: Props) {
  const [query, setQuery] = useState("");

  return (
    <form
      className={classNames("SearchBar", className)}
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(query);
      }}
    >
      <Input
        type="text"
        value={query}
        onChange={(newQuery) => setQuery(newQuery)}
      />
      <Button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          onSearch(query);
        }}
      >
        <Text as="span">Search</Text>
      </Button>
    </form>
  );
}

export default SearchBar;
