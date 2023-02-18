import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Heading from "../Heading";

it("should render an h1 element", () => {
  render(<Heading as="h1" />);
  const element = screen.getByRole("heading", { level: 1 });
  expect(element).toBeInTheDocument();
});

it("should render an h2 element", () => {
  render(<Heading as="h2" />);
  const element = screen.getByRole("heading", { level: 2 });
  expect(element).toBeInTheDocument();
});

it("should render an h3 element", () => {
  render(<Heading as="h3" />);
  const element = screen.getByRole("heading", { level: 3 });
  expect(element).toBeInTheDocument();
});

it("should render an h4 element", () => {
  render(<Heading as="h4" />);
  const element = screen.getByRole("heading", { level: 4 });
  expect(element).toBeInTheDocument();
});

it("should render an h5 element", () => {
  render(<Heading as="h5" />);
  const element = screen.getByRole("heading", { level: 5 });
  expect(element).toBeInTheDocument();
});

it("should render an h6 element", () => {
  render(<Heading as="h6" />);
  const element = screen.getByRole("heading", { level: 6 });
  expect(element).toBeInTheDocument();
});

it("should render children", () => {
  const child = "Testing";
  render(<Heading as="h1">{child}</Heading>);
  const element = screen.getByText(child);
  expect(element).toBeInTheDocument();
});
