import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import Card from "../Card/Card";
import ContentSection from "../../molecules/ContentSection/ContentSection";

type Props = BaseProps & { drink: Drink };

function DrinkCard({ drink, className }: Props) {
  const { strDrink, strDrinkThumb, strCategory, strAlcoholic } = drink;

  const image = (
    <Image src={strDrinkThumb} alt={strDrink} height={700} width={700} />
  );

  const content = (
    <ContentSection
      title={
        <Heading as="h1" size="small" variant="bold">
          {strDrink}
        </Heading>
      }
      body={
        <>
          <Text as="span" variant="normal-italic">
            {strCategory}
          </Text>
          <Text as="span" variant="normal-italic">
            {strAlcoholic}
          </Text>
        </>
      }
      className={classNames(className)}
    />
  );

  return (
    <Card image={image} content={content} className={classNames(className)} />
  );
}

export default DrinkCard;
