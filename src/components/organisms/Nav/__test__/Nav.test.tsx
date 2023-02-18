import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import Nav, { NavProps } from "../Nav";

const mockItems: NavProps["items"] = [
  { path: "https://www.path1.com/", label: "path1" },
  { path: "https://www.path2.com/", label: "path2" },
];

describe("The Nav component", () => {
  test("renders each link we pass to it", () => {
    render(<Nav items={mockItems} />, { wrapper: BrowserRouter });

    const links = screen.getAllByRole<HTMLAnchorElement>("link");

    mockItems.forEach((item, index) => {
      const link = links[index];
      expect(link.href).toBe(item.path);
      expect(link.innerHTML.includes(item.label)).toBeTruthy();
    });
  });
});
