import { useParams } from "react-router-dom";
import endpoints from "../../api/endpoints";
import useFetch from "../../hooks/useFetch";
import { Drink } from "../../types/Drink";
import "./styles.css";

function DrinkDetail() {
  const { idDrink } = useParams();
  const { data } = useFetch<{ drinks: Array<Drink> }>(
    `${endpoints.lookupById}${idDrink}`
  );

  return <div className="DrinkDetail">{data && data.drinks[0].strDrink}</div>;
}

export default DrinkDetail;
