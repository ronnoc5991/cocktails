import classNames from "classnames";
import { BaseProps } from "../../types/BaseProps";
import { LookupByNameResponse } from "../../types/apiResponses";
import DrinkCardDisplay from "../../components/organisms/DrinkCardDisplay/DrinkCardDisplay";
import Search from "../../templates/Search/Search";

type Props = BaseProps;

function DrinkSearch({ className }: Props) {
  return (
    <Search<LookupByNameResponse>
      baseUrl="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      ResultsDisplay={DrinkCardDisplay}
      className={classNames(className)}
    />
  );
}

export default DrinkSearch;
