import { Banner } from "@/components";
import { render, screen } from "@testing-library/react";

describe("Banner component", () => {
  it("should render component", () => {
    render(<Banner />);

    expect(
      screen.getByText("5 Continentes, infinitas possibilidades.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Chegou a hora de tirar do papel a viagem que você sempre sonhou."
      )
    ).toBeInTheDocument();
  });
});
