import React from "react";
import { render } from "@testing-library/react";
import Breadcrumbs from "../Breadcrumbs";
import CategoriesContext from "../../../../contexts/CategoriesContext";

const categories = {
  current: [
    {
      id: 1,
      link: "#home",
      name: "Home",
    },
    {
      id: 2,
      link: "#home",
      name: "Infantil",
    },
  ],
};

describe("Breadcrumbs component", () => {
  it("should render breadcrumbs", () => {
    const { getByRole } = render(
      <CategoriesContext.Provider value={{ categories }}>
        <Breadcrumbs />
      </CategoriesContext.Provider>
    );
    expect(getByRole("list")).toHaveClass("breadcrumbs__list");
  });

  it("should match snapshot", () => {
    const { container } = render(
      <CategoriesContext.Provider value={{ categories }}>
        <Breadcrumbs />
      </CategoriesContext.Provider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
