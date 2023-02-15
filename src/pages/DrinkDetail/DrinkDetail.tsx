import { useParams } from "react-router-dom";
import { LookupByIdResponse } from "../../types/apiResponses";
import useData from "../../hooks/useData";
import "./styles.css";

function DrinkDetail() {
  const { idDrink } = useParams();
  const data = useData<LookupByIdResponse>(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );

  return (
    <div className="DrinkDetail">{data?.drinks && data.drinks[0].strDrink}</div>
  );
}

export default DrinkDetail;
