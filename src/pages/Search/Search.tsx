import { useState } from "react";
import { LookupByNameResponse } from "../../types/apiResponses";
import useData from "../../hooks/useData";
import Input from "../../components/atoms/Input/Input";
import SearchResultsDisplay from "../../components/organisms/SearchResultsDisplay/SearchResultsDisplay";
import "./styles.css";

function Search() {
  const [query, setQuery] = useState("");

  const url: string | null = query
    ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    : null;

  const data = useData<LookupByNameResponse>(url);

  console.log(data);

  return (
    <div className="Search">
      <Input
        value={query}
        type="text"
        onChange={(newQuery) => setQuery(newQuery)}
      />
      {!data ? (
        <>Please enter a search term</>
      ) : (
        <SearchResultsDisplay results={data} />
      )}
    </div>
  );
}

export default Search;
