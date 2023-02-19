import { useParams } from "react-router-dom";
import classNames from "classnames";
import { DrinkLookupByIdResponse } from "../../types/apiResponses";
import { BaseProps } from "../../types/BaseProps";
import useFetch from "../../hooks/useFetch";
import { getIngredients } from "./utils/getIngredients";
import Heading from "../../components/atoms/Heading/Heading";
import Text from "../../components/atoms/Text/Text";
import Image from "../../components/atoms/Image/Image";
import IngredientList from "../../components/organisms/IngredientList/IngredientList";
import ContentSection from "../../components/molecules/ContentSection/ContentSection";
import "./styles.scss";

type Props = BaseProps & {};

function DrinkDetail({ className }: Props) {
  const { idDrink } = useParams();
  const { data } = useFetch<DrinkLookupByIdResponse>(
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
          <Heading as="h1" size="large" variant="bold" className="name">
            {drink.strDrink}
          </Heading>
          <div className="details-wrapper">
            <IngredientList ingredients={getIngredients(drink)} />
            <ContentSection
              title={
                <Heading as="h2" variant="bold" className="heading">
                  Instructions
                </Heading>
              }
              body={<Text as="p">{drink.strInstructions}</Text>}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default DrinkDetail;
