import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Input from "../Input";

const onChange = () => null;

describe("The Input component", () => {
  test("can render a text input", () => {
    render(<Input type="text" value="" onChange={onChange} />);
    const element = screen.getByRole("textbox") as HTMLInputElement;
    expect(element.type).toBe("text");
  });

  test("should contain the correct initial value", () => {
    render(<Input type="text" value="initial value" onChange={onChange} />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });

  test("passes its updated value to its parent on change", () => {
    let value = "";
    const updatedValue = "Hello, World";
    render(
      <Input
        type="text"
        value={value}
        onChange={(newValue) => (value = newValue)}
      />
    );
    const element = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(element, { target: { value: updatedValue } });
    expect(value).toBe(updatedValue);
  });

  test("keeps its value in sync with its props from its parent", () => {
    const initialValue = "Initial Value";
    const { rerender } = render(
      <Input type="text" value={initialValue} onChange={onChange} />
    );
    const element = screen.getByRole("textbox") as HTMLInputElement;
    expect(element.value).toBe(initialValue);

    const updatedValue = "Updated Value";
    rerender(<Input type="text" value={updatedValue} onChange={onChange} />);
    const updatedElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(updatedElement.value).toBe(updatedValue);
  });
});
