import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Ingredient } from "../../../types/Ingredient";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import ListItem from "../../atoms/ListItem/ListItem";
import List from "../../molecules/List/List";
import ContentSection from "../../molecules/ContentSection/ContentSection";

type Props = BaseProps & {
  ingredients: Array<Ingredient>;
};

function IngredientList({ ingredients, className }: Props) {
  const title = (
    <Heading as="h2" variant="bold" className="heading">
      Ingredients
    </Heading>
  );

  const body = (
    <List as="ul">
      {ingredients.map((ingredients, index) => {
        return (
          <ListItem key={index}>
            <Text as="span">{ingredients.name}</Text>
            {ingredients.measurement && (
              <Text as="span" variant="normal-italic">
                - {ingredients.measurement}
              </Text>
            )}
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <ContentSection
      title={title}
      body={body}
      className={classNames(className)}
    />
  );
}

export default IngredientList;
