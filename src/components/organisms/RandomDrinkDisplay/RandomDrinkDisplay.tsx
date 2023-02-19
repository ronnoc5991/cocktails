import { useEffect, useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import DrinkResultsDisplay from "../DrinkResultsDisplay/DrinkResultsDisplay";

type Props = BaseProps & {
  count: number;
};

function RandomDrinkDisplay({ count, className }: Props) {
  const [randomDrinks, setRandomDrinks] = useState<Array<Drink>>([]);

  useEffect(() => {
    const abortControllers = Array.from({ length: count }).map(
      () => new AbortController()
    );

    Promise.all(
      abortControllers.map((controller) => {
        return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {
          signal: controller.signal,
        }).then((response) => {
          if (response.ok) return response.json();
          return Promise.reject(response);
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
    <DrinkResultsDisplay
      drinks={randomDrinks}
      className={classNames(className)}
    />
  );
}

export default RandomDrinkDisplay;
