import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "../components/Products";

describe("Products component", () => {
  it("renders 10 elements", async () => {
    render(<Products />);
    const items = await screen.findAllByRole("heading");
    expect(items.length).toBe(10);
    expect(items[0].textContent).toMatch(
      /Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i
    );
  });
});
