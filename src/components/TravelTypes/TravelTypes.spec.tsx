import { TravelTypes } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";

describe("TravelTypes component", () => {
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
        <TravelTypes />
      </ChakraProvider>
    );

    expect(screen.getByText("vida noturna")).toBeInTheDocument();
    expect(screen.getByText("praia")).toBeInTheDocument();
    expect(screen.getByText("moderno")).toBeInTheDocument();
    expect(screen.getByText("clássico")).toBeInTheDocument();
    expect(screen.getByText("e mais...")).toBeInTheDocument();
  });
});
