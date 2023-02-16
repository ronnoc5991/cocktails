import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import "./styles.css";

type Props = BaseProps & { drink: Drink };

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
      <Text as="span" size="large" variant="bold" className="text">
        {drink.strDrink}
      </Text>
      <Text as="span" variant="normal-italic" className="text">
        {drink.strCategory}
      </Text>
      <Text as="span" variant="normal-italic" className="text">
        {drink.strAlcoholic}
      </Text>
    </div>
  );
}

export default DrinkCard;
