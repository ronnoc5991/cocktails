import { useState } from "react";
import classNames from "classnames";
import { LookupByNameResponse } from "../../types/apiResponses";
import { BaseProps } from "../../types/BaseProps";
import useDebouncedData from "../../hooks/useDebouncedData";
import DrinkCardDisplay from "../../components/organisms/DrinkCardDisplay/DrinkCardDisplay";
import Input from "../../components/atoms/Input/Input";
import "./styles.css";

// TODO: get rid of nested ternary in the render here

type Props = BaseProps & {};

function Search({ className }: Props) {
  const [query, setQuery] = useState("");

  const url: string | null = query
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    : null;

  const data = useDebouncedData<LookupByNameResponse>(url, 300);

  return (
    <div className={classNames("Search", className)}>
      <Input
        value={query}
        type="text"
        onChange={(newQuery) => setQuery(newQuery)}
      />
      {!data ? (
        <>Please enter a search term</>
      ) : data.drinks ? (
        <DrinkCardDisplay drinks={data.drinks} />
      ) : (
        <>No Results Found</>
      )}
    </div>
  );
}

export default Search;
