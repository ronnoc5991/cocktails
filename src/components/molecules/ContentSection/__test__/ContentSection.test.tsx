import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import ContentSection from "../ContentSection";

const testTitle = "Test Title";
const testBody = "Test Body";

const testTitleElement = <>{testTitle}</>;
const testBodyElement = <>{testBody}</>;

describe("The ContentSection component", () => {
  test("renders its title prop", () => {
    render(<ContentSection title={testTitleElement} body={testBodyElement} />);
    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  test("renders its body prop", () => {
    render(<ContentSection title={testTitleElement} body={testBodyElement} />);
    expect(screen.getByText(testBody)).toBeInTheDocument();
  });
});
