import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { Travel } from ".";
import Surf from "../../../public/assets/surf.svg";

describe("Travel component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should render responsive component", () => {
    render(
      <ChakraProvider>
        <Travel image={Surf.src} text="praia" />
      </ChakraProvider>
    );

    expect(screen.getByText("•")).toBeInTheDocument();
    expect(screen.getByText("praia")).toBeInTheDocument();
  });
});
