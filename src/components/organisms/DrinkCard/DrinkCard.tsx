import { Drink } from "../../../types/Drink";
import "./styles.css";

type Props = { drink: Drink };

function DrinkCard({ drink }: Props) {
  return (
    <div className="DrinkCard">
      {drink.strDrink} - {drink.idDrink}
    </div>
  );
}

export default DrinkCard;
