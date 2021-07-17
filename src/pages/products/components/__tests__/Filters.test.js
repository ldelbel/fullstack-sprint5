import React from "react";
import { render } from "@testing-library/react";
import Filters from "../Filters";

const filters = [
  {
    id: "size",
    label: "Tamanho",
  },
  {
    id: "color",
    label: "Cor",
  },
];

describe("Filters component", () => {

  it("should render filters", () => {
    const { getByRole } = render(<Filters filters={filters} />);
    expect(getByRole("list")).toHaveClass("filters__list");
  });

  it("should match snapshot", () => {
    const { container } = render(<Filters filters={filters} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  
});
