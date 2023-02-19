import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import mockDrink from "../../../../mockData/mockDrink";
import { getIngredients } from "../../../../pages/DrinkDetail/utils/getIngredients";
import IngredientList from "../IngredientList";

const ingredients = getIngredients(mockDrink);

describe("The IngredientList component", () => {
  test("renders a drink's ingredients", () => {
    render(<IngredientList ingredients={ingredients} />);
    ingredients.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
