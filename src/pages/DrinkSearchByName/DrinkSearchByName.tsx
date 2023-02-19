import classNames from "classnames";
import { BaseProps } from "../../types/BaseProps";
import { DrinkSearchByNameResponse } from "../../types/apiResponses";
import DrinkResultsDisplay from "../../components/organisms/DrinkResultsDisplay/DrinkResultsDisplay";
import Search from "../../templates/Search/Search";

type Props = BaseProps;

function DrinkSearchByName({ className }: Props) {
  return (
    <Search<DrinkSearchByNameResponse>
      baseUrl="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      ResultsDisplay={DrinkResultsDisplay}
      className={classNames(className)}
    />
  );
}

export default DrinkSearchByName;
