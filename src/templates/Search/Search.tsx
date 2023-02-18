import { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../types/BaseProps";
import SearchBar from "../../components/organisms/SearchBar/SearchBar";
import "./styles.scss";
import useData from "../../hooks/useData";

type Props<ResponseType> = BaseProps & {
  baseUrl: string;
  ResultsDisplay: FunctionComponent<ResponseType>;
};

function Search<ResponseType>({
  baseUrl,
  ResultsDisplay,
  className,
}: Props<ResponseType>) {
  const [concatenatedUrl, setConcatenatedUrl] = useState<string | null>(null);

  const concatenateUrl = (query: string) =>
    query ? `${baseUrl}${query}` : null;

  const data = useData<ResponseType>(concatenatedUrl);

  return (
    <div className={classNames("Search", className)}>
      <SearchBar
        onSearch={(query) => setConcatenatedUrl(concatenateUrl(query))}
        className="search-bar"
      />
      {data && <ResultsDisplay {...data} />}
    </div>
  );
}

export default Search;
