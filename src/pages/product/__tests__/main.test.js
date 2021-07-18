import React from "react";
import { render } from "@testing-library/react";
import { ProductInfo } from "../[slug]";
import { useLocation, MemoryRouter, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Breadcrumbs from "../../products/components/Breadcrumbs";

jest.mock("../../products/components/Breadcrumbs");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

beforeEach(() => {
  Breadcrumbs.mockImplementation(() => <div>Breadcrumbs</div>);
});

const state = {
  sku: 1,
  image: "assets/c1.webp",
  name: "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
  price: "199,90",
};

describe("ProductInfo component", () => {
  it("should render without crashing", () => {
    useLocation.mockImplementation(() => ({
      state,
    }));

    const { getByText } = render(
      <MemoryRouter initialEntries={["/jaqueta"]}>
        <ProductInfo />
      </MemoryRouter>
    );

    expect(getByText("Selecione um tamanho:")).toBeInTheDocument();
    useLocation.mockClear();
  });

  it("should get from /invalid to home on click", async () => {
    useLocation.mockImplementation(() => ({}));

    let testLocation;

    await act(async () => {
      render(
        <MemoryRouter initialEntries={["/jaqueta"]}>
          <ProductInfo />
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

    expect(testLocation.pathname).toBe("/404");
  });

  it("should match snapshot", () => {
    useLocation.mockImplementation(() => ({
      state,
    }));

    const { container } = render(
      <MemoryRouter initialEntries={["/jaqueta"]}>
        <ProductInfo />
      </MemoryRouter>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
