import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import List from "../List";

describe("The List component", () => {
  test("can render a ul element", () => {
    render(<List as="ul"></List>);
    const element = screen.getByRole("list") as HTMLUListElement;
    expect(element.tagName).toBe("UL");
  });

  test("can render a ol element", () => {
    render(<List as="ol"></List>);
    const element = screen.getByRole("list") as HTMLOListElement;
    expect(element.tagName).toBe("OL");
  });

  test("renders child elements", () => {
    const childContent = ["One", "Two", "Three"];

    render(
      <List as="ol">
        {childContent.map((child) => (
          <p key={child}>{child}</p>
        ))}
      </List>
    );
    expect(screen.getByText(childContent[0])).toBeInTheDocument();
    expect(screen.getByText(childContent[1])).toBeInTheDocument();
    expect(screen.getByText(childContent[2])).toBeInTheDocument();
  });
});
