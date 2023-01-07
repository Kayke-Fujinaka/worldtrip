import { Header } from "@/components";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Logo from "../../../public/assets/logo.svg";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    asPath: "/",
  })),
}));

describe("Header component", () => {
  it('should have src="/logo.svg" and alt="worldtrip logo"', () => {
    render(<Header />);

    const image = screen.getByRole("img");

    expect(image.getAttribute("src")).toBe(Logo.src);
    expect(image.getAttribute("alt")).toBe("worldtrip logo");
  });

  it('should have test id "back-to-home" when\'t on the home page', () => {
    const asPath = "/continent";

    (useRouter as jest.Mock).mockImplementation(() => ({
      asPath,
    }));

    render(<Header />);

    expect(screen.getByTestId("back-to-home")).toBeInTheDocument();
  });
});
