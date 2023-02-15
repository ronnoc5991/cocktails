import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Drink } from "../../types/Drink";
import "./styles.css";

const RANDOM_DRINK_COUNT = 10;

function Home() {
  const [randomDrinks, setRandomDrinks] = useState<Array<Drink>>([]);

  useEffect(() => {
    const abortControllers = Array.from({ length: RANDOM_DRINK_COUNT }).map(
      () => new AbortController()
    );

    Promise.all(
      abortControllers.map((controller) => {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
          signal: controller.signal,
        })
          .then((response) => {
            if (response.ok) return response.json();
            return Promise.reject(response);
          })
          .catch((error) => {
            if (controller.signal.aborted) return;
            console.error(error.status);
          });
      })
    )
      .then((data) => {
        const drinks = data.reduce((accumulator, currentValue) => {
          return [...accumulator, ...currentValue.drinks];
        }, []);
        setRandomDrinks(drinks);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      abortControllers.forEach((controller) => controller.abort());
    };
  }, []);

  return (
    <div className="Home">
      {randomDrinks.map((drink) => (
        <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink}>
          {drink.strDrink}
        </Link>
      ))}
    </div>
  );
}

export default Home;
