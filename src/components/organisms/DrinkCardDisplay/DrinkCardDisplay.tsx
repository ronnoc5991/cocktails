import classNames from "classnames";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import CardDisplay from "../CardDisplay/CardDisplay";
import DrinkCard from "../DrinkCard/DrinkCard";

type Props = BaseProps & { drinks: Array<Drink> };

function DrinkCardDisplay({ drinks, className }: Props) {
  return (
    <CardDisplay className={classNames(className)}>
      {drinks.map((drink) => (
        <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink}>
          <DrinkCard drink={drink} />
        </Link>
      ))}
    </CardDisplay>
  );
}

export default DrinkCardDisplay;
