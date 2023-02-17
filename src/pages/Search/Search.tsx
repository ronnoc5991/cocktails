import { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../types/BaseProps";
import SearchBox from "../../components/molecules/SearchBox/SearchBox";
import "./styles.css";

type Props<ResponseType> = BaseProps & {
  baseUrl: string;
  ResultsDisplay: FunctionComponent<ResponseType>;
};

function Search<ResponseType>({
  baseUrl,
  ResultsDisplay,
  className,
}: Props<ResponseType>) {
  const [data, setData] = useState<ResponseType>();

  return (
    <div className={classNames("Search", className)}>
      <SearchBox
        baseUrl={baseUrl}
        onDataReceived={setData}
        className="search-box"
      />
      {data && <ResultsDisplay {...data} />}
    </div>
  );
}

export default Search;
