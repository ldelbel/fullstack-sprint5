import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductsPage from './pages/products/ProductsPage';
import { ProductInfo } from './pages/product/[slug]';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductsPage} />
        <Route path="/product/:slug" component={ProductInfo} />
      </Switch>
    </Router>
  )
}