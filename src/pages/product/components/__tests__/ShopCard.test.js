import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ShopCard } from "../ShopCard";
import { MemoryRouter, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MessageContext from "../../../../contexts/MessageContext";

const setMessage = () => ({});

describe("ShopCard component", () => {
  it("should render without crashing", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/product"]}>
        <MessageContext.Provider value={{ setMessage }}>
          <ShopCard price="300" />
        </MessageContext.Provider>
      </MemoryRouter>
    );

    expect(getByText("ADICIONAR À SACOLA")).toBeInTheDocument();
  });

  it("should get back to home when clicking on add to cart", async () => {
    let testLocation;

    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/jaqueta"]}>
          <MessageContext.Provider value={{ setMessage }}>
            <ShopCard price="300" />
          </MessageContext.Provider>
          <Route
            path="*"
            render={({ location }) => {
              testLocation = location;
              return null;
            }}
          />
        </MemoryRouter>
      );
    });

    expect(testLocation.pathname).toBe("/jaqueta");

    fireEvent.click(screen.getByText("ADICIONAR À SACOLA"));

    await new Promise((r) => setTimeout(r, 2000));

    expect(testLocation.pathname).toBe("/");
  });

  it("should match snapshot", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/product"]}>
        <MessageContext.Provider value={{ setMessage }}>
          <ShopCard price="300" />
        </MessageContext.Provider>
      </MemoryRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
