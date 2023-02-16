import { useParams } from "react-router-dom";
import classNames from "classnames";
import { LookupByIdResponse } from "../../types/apiResponses";
import { BaseProps } from "../../types/BaseProps";
import useData from "../../hooks/useData";
import { getIngredientList } from "./utils/getIngredientList";
import Image from "../../components/atoms/Image/Image";
import Heading from "../../components/atoms/Heading/Heading";
import Text from "../../components/atoms/Text/Text";
import "./styles.css";

// need a wrapper around the image?
// to control the space that is taken up?
// position everything in the viewport

// TODO: Should we create an object that contains different image sizes?
// could store the property name of the Drink, along with the size of the image it returns?
// use those when using the images?

type Props = BaseProps & {};

function DrinkDetail({ className }: Props) {
  const { idDrink } = useParams();
  const data = useData<LookupByIdResponse>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );

  const drink = data?.drinks?.[0];

  return (
    <div className={classNames("DrinkDetail", className)}>
      {drink && (
        <>
          <Image
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            height={700}
            width={700}
          />
          <Heading as="h1" size="medium" variant="bold">
            {drink.strDrink}
          </Heading>
          <Text as="span">{drink.strAlcoholic}</Text>
          <Text as="span">{drink.strCategory}</Text>
          <Text as="span">{drink.strGlass}</Text>
          <ul>
            {getIngredientList(drink).map((ingredient, index) => {
              return (
                <li key={`ingredient-${index}`}>
                  <Text as="span">
                    {ingredient.name}{" "}
                    {ingredient.measurement && <>- {ingredient.measurement}</>}
                  </Text>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default DrinkDetail;
