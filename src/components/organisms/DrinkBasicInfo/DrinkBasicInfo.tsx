import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Heading, { HeadingProps } from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import ContentSection from "../../molecules/ContentSection/ContentSection";

type Props = BaseProps & {
  drink: Drink;
  nameAs: HeadingProps["as"];
};

function DrinkBasicInfo({ drink, nameAs, className }: Props) {
  const title = (
    <Heading as={nameAs} size="large" variant="bold">
      {drink.strDrink}
    </Heading>
  );

  const body = (
    <>
      <Text as="span" variant="normal-italic">
        {drink.strCategory}
      </Text>
      <Text as="span" variant="normal-italic">
        {drink.strAlcoholic}
      </Text>
    </>
  );

  return (
    <ContentSection
      title={title}
      body={body}
      className={classNames(className)}
    />
  );
}

export default DrinkBasicInfo;
