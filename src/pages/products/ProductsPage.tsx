import React, { useContext, useEffect, useState } from "react";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";
import { Link } from "react-router-dom";
import { Filter, TProduct } from "../../types";

interface IProduct {
  product: TProduct;
}

function Product({ product }: IProduct) {
  const { image, name, price } = product;
  const slug = name.toLowerCase().split(" ").join("-");
  const newTo = { pathname: `/product/${slug}`, state: product };

  return (
    <li className="products__card card">
      <Link to={newTo}>
        <div className="card">
          <img className="card__img" src={image} alt="" />
          <p className="card__description">{name}</p>
          <p className="card__price">R$ {price}</p>
        </div>
      </Link>
    </li>
  );
}

function ProductsPage() {
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
    <main className="main">
      <Breadcrumbs></Breadcrumbs>
      <Filters filters={filters}></Filters>
      <section className="main__products products">
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
    </main>
  );
}

export default ProductsPage;
