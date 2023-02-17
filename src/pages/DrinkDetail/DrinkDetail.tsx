import { useParams } from "react-router-dom";
import classNames from "classnames";
import { LookupByIdResponse } from "../../types/apiResponses";
import { BaseProps } from "../../types/BaseProps";
import useData from "../../hooks/useData";
import { getIngredients } from "./utils/getIngredients";
import Image from "../../components/atoms/Image/Image";
import DrinkBasicInfo from "../../components/organisms/DrinkBasicInfo/DrinkBasicInfo";
import IngredientList from "../../components/organisms/IngredientList/IngredientList";
import DrinkInstructions from "../../components/organisms/DrinkInstructions/DrinkInstructions";
import "./styles.css";

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
          <DrinkBasicInfo drink={drink} nameAs="h1" className="section" />
          <IngredientList
            ingredients={getIngredients(drink)}
            className="section"
          />
          <DrinkInstructions
            instructions={drink.strInstructions}
            className="section"
          />
        </>
      )}
    </div>
  );
}

export default DrinkDetail;
