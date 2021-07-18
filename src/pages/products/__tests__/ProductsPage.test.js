import React from "react";
import { render, screen } from "@testing-library/react";
import ProductsPage from "../ProductsPage";
import Breadcrumbs from "../components/Breadcrumbs";
import Filters from "../components/Filters";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import ProductsService from "../../../services/ProductsService";
import { mock, appMock } from "../_mock";
import { AppContext } from "../../../contexts/AppContext";

jest.mock("../components/Breadcrumbs");
jest.mock("../components/Filters");
jest.mock("../../../services/ProductsService");

beforeEach(() => {
  Breadcrumbs.mockImplementation(() => <div>Breadcrumbs</div>);
  Filters.mockImplementation(() => <div>Filters</div>);
});

describe("ProductsPage component", () => {
  it("should render without crashing when fetching products", async () => {
    ProductsService.get.mockImplementation(() => Promise.resolve(mock.data));

    await act(async () =>
      render(
        <MemoryRouter>
          <AppContext values={appMock.withoutFilter}>
            <ProductsPage product={mock.product} />
          </AppContext>
        </MemoryRouter>
      )
    );

    expect(screen.getByTestId("wrap")).toHaveClass("main__products products");
  });

  it("should render filtered data when filter is not empty", async () => {
    ProductsService.get.mockImplementation(() => Promise.resolve(mock.data));

    await act(async () =>
      render(
        <MemoryRouter>
          <AppContext values={appMock.withFilter}>
            <ProductsPage product={mock.product} />
          </AppContext>
        </MemoryRouter>
      )
    );

    expect(screen.getByText(/Jaqueta/i)).toBeInTheDocument();
    expect(screen.queryByText(/Camisa/i)).toBeNull();
  });

  it("should render without crashing when fetch failed", async () => {
    ProductsService.get.mockImplementation(() => Promise.reject());

    await act(async () =>
      render(
        <MemoryRouter>
          <AppContext values={appMock.withoutFilter}>
            <ProductsPage product={mock.product} />
          </AppContext>
        </MemoryRouter>
      )
    );

    expect(screen.getByTestId("wrap")).toHaveClass("main__products products");
  });

  it("should match snapshot", async () => {
    ProductsService.get.mockImplementation(() => Promise.resolve(mock.data));

    await act(async () =>
      render(
        <MemoryRouter>
          <AppContext values={appMock.withoutFilter}>
            <ProductsPage product={mock.product} />
          </AppContext>
        </MemoryRouter>
      )
    );

    expect(screen).toMatchSnapshot();
  });
});
