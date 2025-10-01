import Header from "../Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it('should render the "Next Todos" heading', () => {
    render(<Header title="Next Todos" />); // ARRANGE

    // ACT
    const headers = screen.getAllByRole("heading", { name: "Next Todos" });
    const firstHeader = headers[0]; // أول عنصر

    // ASSERT
    expect(firstHeader).toBeInTheDocument();
  });

  it('should render "Dave" as a heading', async () => {
    render(<Header title="Dave" />); // ARRANGE

    // ACT
    const header = screen.getByRole("heading", { name: "Dave" });

    expect(header).toBeInTheDocument(); // ASSERT
  });
});
