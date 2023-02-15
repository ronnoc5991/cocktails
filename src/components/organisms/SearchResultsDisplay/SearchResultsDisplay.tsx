import { Drink } from "../../../types/Drink";
import DrinkCard from "../DrinkCard/DrinkCard";
import "./styles.css";

type Props = {
  results: { drinks: Array<Drink> | null };
};

function SearchResultsDisplay({ results }: Props) {
  return (
    <div className="SearchResultsDisplay">
      {results.drinks === null ? (
        <>No Results Found</>
      ) : (
        results.drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))
      )}
    </div>
  );
}

export default SearchResultsDisplay;
