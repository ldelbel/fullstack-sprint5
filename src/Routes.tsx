import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductsPage from "./pages/products/ProductsPage";
import { ProductInfo } from "./pages/product/[slug]";
import { NotFound } from "./components/NotFound";

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductsPage} />
        <Route path="/404" component={NotFound} />
        <Route
          path="/:slug"
          render={(routeProps) =>
            routeProps.location.state ? <ProductInfo /> : <Redirect to="/404" />
          }
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
