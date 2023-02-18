import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import ListItem from "../ListItem";

it("should render an li", () => {
  render(<ListItem />);
  const element = screen.getByRole("listitem");
  expect(element).toBeInTheDocument();
});

it("should render children", () => {
  const child = "Testing";
  render(<ListItem>{child}</ListItem>);
  const foundChild = screen.getByText(child);
  expect(foundChild).toBeInTheDocument();
});
