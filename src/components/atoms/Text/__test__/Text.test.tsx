import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Text from "../Text";

it("should render children", () => {
  const child = "Testing";
  render(<Text as="p">{child}</Text>);
  const foundChild = screen.getByText(child);
  expect(foundChild).toBeInTheDocument();
});
