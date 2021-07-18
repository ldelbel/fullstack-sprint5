import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { NotFound } from "../NotFound";
import { MemoryRouter, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";

let testLocation;

describe("NotFound component", () => {
  it("should render without crashing", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/invalid"]}>
        <NotFound />
      </MemoryRouter>
    );

    expect(getByText("Ops! Página não Encontrada")).toBeInTheDocument();
  });

  it("should get from /invalid to home on click", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/invalid"]}>
        <NotFound />
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );

    expect(testLocation.pathname).toBe("/invalid");

    act(() => {
      fireEvent.click(getByRole("link"));
    });

    expect(testLocation.pathname).toBe("/");
  });

  it("should match snapshot", () => {
    const notFound = render(
      <MemoryRouter initialEntries={["/404"]}>
        <NotFound />
      </MemoryRouter>
    );

    expect(notFound).toMatchSnapshot();
  });
});
