import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import mockDrink from "../../../../mocks/mockDrink";
import DrinkInstructions from "../DrinkInstructions";

describe("The DrinkInstructions component", () => {
  test("renders a drink's instructions", () => {
    render(<DrinkInstructions instructions={mockDrink.strInstructions} />);
    expect(screen.getByText(mockDrink.strInstructions)).toBeInTheDocument();
  });
});
