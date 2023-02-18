import { render, screen } from "@testing-library/react";
import Image from "../Image";

describe("The image component", () => {
  test("src contains correct value", () => {
    render(<Image src="https://www.example.com/image-large.png" alt="" />);
    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image.src).toBe("https://www.example.com/image-large.png");
  });

  test("alt contains correct value", () => {
    render(<Image src="" alt="Test alt" />);
    const image = screen.getByRole("img") as HTMLImageElement;
    expect(image.alt).toContain("Test alt");
  });
});
