import React, { ReactElement, useContext, useEffect, useState } from "react";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";
import { Filter, TProduct } from "../../types";
import { Product } from "./components/Product";
import { StyledProductsPage } from "./styled";

function ProductsPage(): ReactElement<React.FC> {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [filters, setFilters] = useState<Filter[]>([]);

  const { filter } = useContext(FilterContext);
  const { addRequest, removeRequest } = useContext(LoadingContext);
  const { setMessage } = useContext(MessageContext);

  // eslint-disable-next-line
  useEffect(() => loadProducts(), []);

  function loadProducts() {
    addRequest();
    ProductsService.get()
      .then((r) => {
        setProducts(r.products);
        setFilters(r.filters);
      })
      .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
      .finally(() => removeRequest());
  }

  return (
    <StyledProductsPage>
      <Breadcrumbs></Breadcrumbs>
      <Filters filters={filters}></Filters>
      <section data-testid="wrap" className="main__products products">
        <div className="products__row">
          <ol className="products__list">
            {products
              .filter((p) =>
                filter
                  ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1
                  : true
              )
              .map((p) => (
                <Product key={p.sku} product={p} />
              ))}
          </ol>
        </div>
        <div className="products__row">
          <ol className="products__list"></ol>
        </div>
      </section>
    </StyledProductsPage>
  );
}

export default ProductsPage;
