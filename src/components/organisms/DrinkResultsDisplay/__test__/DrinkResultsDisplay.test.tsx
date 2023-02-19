import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import mockDrink from "../../../../mockData/mockDrink";
import DrinkResultsDisplay from "../DrinkResultsDisplay";

describe("The DrinkResultsDisplay component", () => {
  test("renders a link for each drink", () => {
    render(<DrinkResultsDisplay drinks={[mockDrink]} />, {
      wrapper: BrowserRouter,
    });
    const linkElement = screen.getByRole("link") as HTMLAnchorElement;
    expect(linkElement).toHaveAttribute("href", `/drinks/${mockDrink.idDrink}`);
  });
});
