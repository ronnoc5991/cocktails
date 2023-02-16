import { useParams } from "react-router-dom";
import classNames from "classnames";
import { LookupByIdResponse } from "../../types/apiResponses";
import { BaseProps } from "../../types/BaseProps";
import useData from "../../hooks/useData";
import { getIngredientList } from "./utils/getIngredientList";
import Image from "../../components/atoms/Image/Image";
import "./styles.css";
import DrinkDetails from "../../components/molecules/DrinkDetails/DrinkDetails";
import IngredientList from "../../components/organisms/IngredientList/IngredientList";

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
            className="image"
          />
          <DrinkDetails drink={drink} variant="large" className="details" />
          <IngredientList items={getIngredientList(drink)} />
        </>
      )}
    </div>
  );
}

export default DrinkDetail;
