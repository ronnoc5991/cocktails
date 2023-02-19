import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Heading from "../../../atoms/Heading/Heading";
import CardDisplay from "../CardDisplay";

describe("The CardDisplay component", () => {
  test("renders child elements", () => {
    const childContent = ["One", "Two", "Three"];
    const childElements = childContent.map((content) => (
      <Heading as="h1">{content}</Heading>
    ));

    render(<CardDisplay>{...childElements}</CardDisplay>);
    expect(screen.getByText(childContent[0])).toBeInTheDocument();
    expect(screen.getByText(childContent[1])).toBeInTheDocument();
    expect(screen.getByText(childContent[2])).toBeInTheDocument();
  });
});
