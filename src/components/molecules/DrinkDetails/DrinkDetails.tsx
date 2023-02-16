import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import "./styles.css";

type Props = BaseProps & {
  drink: Drink;
  variant: "small" | "large";
};

// TODO: think about the ternary below?

function DrinkDetails({ drink, variant, className }: Props) {
  return (
    <div className={classNames("DrinkDetails", className)}>
      {variant === "large" ? (
        <Heading as="h1" size="large" variant="bold" className="name">
          {drink.strDrink}
        </Heading>
      ) : (
        <Text as="span" size="large" variant="bold" className="name">
          {drink.strDrink}
        </Text>
      )}
      <Text as="span" variant="normal-italic" className="detail">
        {drink.strCategory}
      </Text>
      <Text as="span" variant="normal-italic" className="detail">
        {drink.strAlcoholic}
      </Text>
    </div>
  );
}

export default DrinkDetails;
