import { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../types/BaseProps";
import SearchBar from "../../components/organisms/SearchBar/SearchBar";
import Text from "../../components/atoms/Text/Text";
import useData from "../../hooks/useData";
import "./styles.scss";

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

  const { data, isLoading } = useData<ResponseType>(concatenatedUrl);

  return (
    <div className={classNames("Search", className)}>
      <SearchBar
        onSearch={(query) => setConcatenatedUrl(concatenateUrl(query))}
        className="search-bar"
      />
      {isLoading && (
        <Text as="span" size="large" variant="normal-italic">
          Loading...
        </Text>
      )}
      {!isLoading && data && concatenatedUrl && <ResultsDisplay {...data} />}
    </div>
  );
}

export default Search;
