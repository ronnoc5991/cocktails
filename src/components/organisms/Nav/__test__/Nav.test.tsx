import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect } from "vitest";
import Nav, { NavProps } from "../Nav";

const mockItems: NavProps["items"] = [
  { path: "https://www.path1.com/", icon: "icon1", iconAlt: "" },
  { path: "https://www.path2.com/", icon: "icon2", iconAlt: "" },
];

describe("The Nav component", () => {
  test("renders each link we pass to it", () => {
    render(<Nav items={mockItems} />, { wrapper: BrowserRouter });

    const links = screen.getAllByRole<HTMLAnchorElement>("link");

    mockItems.forEach((item, index) => {
      const link = links[index];
      expect(link.href).toBe(item.path);
    });
  });
});
