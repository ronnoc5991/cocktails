import { useEffect, useState } from "react";
import classNames from "classnames";
import { BaseProps } from "../../../types/BaseProps";
import { Drink } from "../../../types/Drink";
import DrinkCardDisplay from "../DrinkCardDisplay/DrinkCardDisplay";

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
    <div className={classNames(className)}>
      <DrinkCardDisplay drinks={randomDrinks} />
    </div>
  );
}

export default RandomDrinkDisplay;
