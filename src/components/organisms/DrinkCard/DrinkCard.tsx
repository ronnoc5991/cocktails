import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import Image from "../../atoms/Image/Image";
import DrinkBasicInfo from "../DrinkBasicInfo/DrinkBasicInfo";
import Card from "../Card/Card";

type Props = BaseProps & { drink: Drink };

function DrinkCard({ drink, className }: Props) {
  const { strDrink, strDrinkThumb, strCategory, strAlcoholic } = drink;

  const image = (
    <Image src={strDrinkThumb} alt={strDrink} height={700} width={700} />
  );

  const content = (
    <DrinkBasicInfo
      name={strDrink}
      category={strCategory}
      alcoholic={strAlcoholic}
      nameAs="h1"
    />
  );

  return (
    <Card image={image} content={content} className={classNames(className)} />
  );
}

export default DrinkCard;
