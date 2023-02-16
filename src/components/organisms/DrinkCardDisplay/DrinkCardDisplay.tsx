import classNames from "classnames";
import { Link } from "react-router-dom";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import DrinkCard from "../DrinkCard/DrinkCard";
import "./styles.css";

type Props = BaseProps & { drinks: Array<Drink> };

function DrinkCardDisplay({ drinks, className }: Props) {
  return (
    <div className={classNames("DrinkCardDisplay", className)}>
      {drinks.map((drink) => (
        <Link
          to={`/drink/${drink.idDrink}`}
          key={drink.idDrink}
          className="link"
        >
          <DrinkCard drink={drink} />
        </Link>
      ))}
    </div>
  );
}

export default DrinkCardDisplay;
