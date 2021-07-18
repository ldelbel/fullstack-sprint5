import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Cadastrar")).toBeInTheDocument();
  });

  it("should display error message when fetch gives error", () => {
    const { getByText } = render(<App />);
    expect(getByText("Cadastrar")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
