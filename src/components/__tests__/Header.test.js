import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import FilterContext from "../../contexts/FilterContext";
import Menu from "../Menu";

jest.mock("../Menu");

beforeEach(() => {
  Menu.mockImplementation(() => <div>Menu</div>);
});

let filter = "";
const setFilter = (f) => (filter = f);

describe("Header component", () => {
  it("should render categories", () => {
    const { getByText } = render(
      <FilterContext.Provider value={{ setFilter }}>
        <Header />
      </FilterContext.Provider>
    );
    expect(getByText("Menu")).toBeInTheDocument();
  });

  it("should update filter value based on input value on change", () => {
    render(
      <FilterContext.Provider value={{ setFilter }}>
        <Header />
      </FilterContext.Provider>
    );

    const input = screen.getByPlaceholderText(/O que você está procurando?/i);

    fireEvent.change(input, { target: { value: "test value" } });

    expect(input.value).toBe("test value");
    expect(filter).toBe("test value");
  });

  it("should match snapshot", () => {
    const header = render(
      <FilterContext.Provider value={{ setFilter }}>
        <Header />
      </FilterContext.Provider>
    );
    expect(header).toMatchSnapshot();
  });
});
