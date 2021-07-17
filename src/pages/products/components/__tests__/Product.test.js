import React from "react";
import { render } from "@testing-library/react";
import { Product } from "../Product";
import { MemoryRouter } from "react-router-dom";

const product = {
  sku: 1,
  image: "assets/c1.webp",
  name: "Jaqueta Puffer Juvenil Com Capuz Super Mario Branco Tam 10 a 18",
  price: "199,90",
};

describe("Product component", () => {

  it("should render filters", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Product product={product} />
      </MemoryRouter>
    );
    expect(getByRole("link")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Product product={product} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});
