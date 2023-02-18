import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import mockDrink from "../../../../mocks/mockDrink";
import DrinkCardDisplay from "../DrinkCardDisplay";

describe("The DrinkCardDisplay component", () => {
  test("renders a link for each drink", () => {
    render(<DrinkCardDisplay drinks={[mockDrink]} />, {
      wrapper: BrowserRouter,
    });
    const linkElement = screen.getByRole("link") as HTMLAnchorElement;
    expect(linkElement).toHaveAttribute("href", `/drinks/${mockDrink.idDrink}`);
  });
});
