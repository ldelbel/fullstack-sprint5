import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";
import FilterContext from "../../contexts/FilterContext";
import Menu from "../Menu";

jest.mock('../Menu')

const mockSetFilter = () => {};

describe("Header component", () => {
  it("should render categories", () => {

    Menu.mockImplementation( () => <div>Menu</div>)

    const { getByText } = render(
      <FilterContext.Provider value={{ mockSetFilter }}>
        <Header />
      </FilterContext.Provider>
    );
    expect(getByText("Menu")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    Menu.mockImplementation( () => <div>Menu</div>)
    const header = render(
      <FilterContext.Provider value={{ mockSetFilter }}>
        <Header />
      </FilterContext.Provider>
    );
    expect(header).toMatchSnapshot();
  });
});
