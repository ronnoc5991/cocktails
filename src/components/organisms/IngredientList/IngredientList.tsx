import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Ingredient } from "../../../types/Ingredient";
import Heading from "../../atoms/Heading/Heading";
import IngredientListItem from "./IngredientListItem/IngredientListItem";
import "./styles.css";

type Props = BaseProps & {
  items: Array<Ingredient>;
};

function IngredientList({ items, className }: Props) {
  return (
    <div className={classNames("IngredientList", className)}>
      <Heading as="h2" size="medium" variant="bold" className="heading">
        Ingredients
      </Heading>
      <ul>
        {items.map((item, index) => {
          return <IngredientListItem key={index} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default IngredientList;
