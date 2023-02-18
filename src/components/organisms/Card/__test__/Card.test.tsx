import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import Image from "../../../atoms/Image/Image";
import Text from "../../../atoms/Text/Text";
import Card from "../Card";

const mockImageSrc = "https://www.mocksrc.com/";
const mockImage = <Image src={mockImageSrc} alt="test" />;
const mockContentString = "Test";
const mockContent = <Text as="p">{mockContentString}</Text>;

describe("The Card component", () => {
  test("renders our image", () => {
    render(<Card image={mockImage} content={mockContent} />);
    const imageElement = screen.getByRole("img") as HTMLImageElement;
    expect(imageElement.src).toBe(mockImageSrc);
  });

  test("renders our content", () => {
    render(<Card image={mockImage} content={mockContent} />);
    const element = screen.getByText(mockContentString);
    expect(element).toBeInTheDocument();
  });
});
