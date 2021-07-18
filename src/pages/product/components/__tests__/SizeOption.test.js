import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SizeOption } from "../SizeOption";

let selected = 6;
const setSize = (n) => (selected = n);

describe("SizeOption component", () => {
  it("should render without crashing when selected", () => {
    render(<SizeOption size={6} selected={selected} setSize={setSize} />);

    const option = screen.getByTestId("option");

    expect(option).toBeInTheDocument();
    expect(option).toHaveTextContent(6);
  });

  it("should render without crashing when not selected", () => {
    render(<SizeOption size={8} selected={selected} setSize={setSize} />);

    const option = screen.getByTestId("option");

    expect(option).toBeInTheDocument();
    expect(option).toHaveTextContent(8);
  });

  it("should change selected when clicked", async () => {
    render(<SizeOption size={10} selected={8} setSize={setSize} />);

    const option = screen.getByTestId("option");

    expect(option).toHaveTextContent(10);
    expect(selected).toBe(6);

    fireEvent.click(option);

    expect(selected).toBe(10);
  });

  it("should match snapshot", () => {
    const { container } = render(
      <SizeOption size={6} selected={8} setSize={setSize} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
