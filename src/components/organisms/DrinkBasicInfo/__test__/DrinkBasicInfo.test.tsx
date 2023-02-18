import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import DrinkBasicInfo, { DrinkBasicInfoProps } from "../DrinkBasicInfo";

const mockDrink: DrinkBasicInfoProps = {
  name: "Name",
  category: "Category",
  alcoholic: "Alcoholic",
  nameAs: "h1",
};

describe("The DrinkBasicInfo component", () => {
  test("renders the drink name", () => {
    render(<DrinkBasicInfo {...mockDrink} />);
    expect(screen.getByText(mockDrink.name)).toBeInTheDocument();
  });

  test("renders the drink name as the correct tag", () => {
    render(<DrinkBasicInfo {...mockDrink} nameAs="h1" />);
    const element = screen.getByRole("heading", { level: 1 });
    expect(element).toHaveTextContent(mockDrink.name);
  });

  test("renders the drink category", () => {
    render(<DrinkBasicInfo {...mockDrink} />);
    expect(screen.getByText(mockDrink.category)).toBeInTheDocument();
  });

  test("renders the drink alcoholic status", () => {
    render(<DrinkBasicInfo {...mockDrink} />);
    expect(screen.getByText(mockDrink.alcoholic)).toBeInTheDocument();
  });
});
