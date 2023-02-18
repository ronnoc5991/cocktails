import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import SearchBar from "../SearchBar";

describe("The SearchBar component", () => {
  test("passes query to parent when submit button is clicked", () => {
    let query = "";
    render(
      <SearchBar
        onSearch={(newQuery) => {
          query = newQuery;
        }}
      />
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "updated query" } });

    const submitButton = screen.getByRole("button") as HTMLButtonElement;
    fireEvent.click(submitButton);
    expect(query).toBe("updated query");
  });
});
