import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Button from "../Button";

describe("The Button component", () => {
  test("renders a button", () => {
    render(<Button type="button" onClick={() => null} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("renders a submit button", () => {
    render(<Button type="submit" onClick={() => null} />);
    const button = screen.getByRole("button") as HTMLButtonElement;
    expect(button.type).toBe("submit");
  });

  test("renders its children", () => {
    render(
      <Button type="submit" onClick={() => null}>
        Child
      </Button>
    );
    expect(screen.getByText("Child")).toBeInTheDocument();
  });

  test("executes its callback on click", () => {
    let count = 0;
    render(<Button type="submit" onClick={() => count++} />);
    const button = screen.getByRole("button") as HTMLButtonElement;
    fireEvent.click(button);
    expect(count).toBe(1);
  });
});
