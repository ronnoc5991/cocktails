import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Image from "../../atoms/Image/Image";
import DrinkBasicInfo from "../DrinkBasicInfo/DrinkBasicInfo";
import Card from "../Card/Card";

type Props = BaseProps & { drink: Drink };

function DrinkCard({ drink, className }: Props) {
  const image = (
    <Image
      src={drink.strDrinkThumb}
      alt={drink.strDrink}
      height={700}
      width={700}
    />
  );

  const content = (
    <DrinkBasicInfo
      name={drink.strDrink}
      category={drink.strCategory}
      alcoholic={drink.strAlcoholic}
      nameAs="h1"
    />
  );

  return (
    <Card image={image} content={content} className={classNames(className)} />
  );
}

export default DrinkCard;
