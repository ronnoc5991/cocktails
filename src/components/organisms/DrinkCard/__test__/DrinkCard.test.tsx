import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import mockDrink from "../../../../mockData/mockDrink";
import DrinkCard from "../DrinkCard";

describe("The DrinkCard component", () => {
  test("renders our drink's Image", () => {
    render(<DrinkCard drink={mockDrink} />);
    const imageElement = screen.getByRole("img") as HTMLImageElement;
    expect(imageElement.src).toBe(mockDrink.strDrinkThumb);
  });

  test("renders our drink's name", () => {
    render(<DrinkCard drink={mockDrink} />);
    const element = screen.getByText(mockDrink.strDrink);
    expect(element).toBeInTheDocument();
  });

  test("renders our drink's category", () => {
    render(<DrinkCard drink={mockDrink} />);
    const element = screen.getByText(mockDrink.strCategory);
    expect(element).toBeInTheDocument();
  });

  test("renders our drink's alcoholic status", () => {
    render(<DrinkCard drink={mockDrink} />);
    const element = screen.getByText(mockDrink.strAlcoholic);
    expect(element).toBeInTheDocument();
  });
});
