import classNames from "classnames";
import { BaseProps } from "../../../../types/BaseProps";
import { Ingredient } from "../../../../types/Ingredient";
import Text from "../../../atoms/Text/Text";
import "./styles.css";

type Props = BaseProps & {
  item: Ingredient;
};

function IngredientListItem({ item, className }: Props) {
  return (
    <li className={classNames("IngredientListItem", className)}>
      <Text as="span" size="small">
        {item.name}
      </Text>
      {item.measurement && (
        <Text as="span" size="small" variant="normal-italic">
          - {item.measurement}
        </Text>
      )}
    </li>
  );
}

export default IngredientListItem;
