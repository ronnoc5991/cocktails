import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Image from "../../atoms/Image/Image";
import DrinkDetails from "../../molecules/DrinkDetails/DrinkDetails";
import "./styles.css";

type Props = BaseProps & { drink: Drink };

// TODO: if a card image is loading, pulse gray the other stuff?

function DrinkCard({ drink, className }: Props) {
  return (
    <div className={classNames("DrinkCard", className)}>
      <Image
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        height={700}
        width={700}
        className="image"
      />
      <DrinkDetails drink={drink} variant="small" />
    </div>
  );
}

export default DrinkCard;
