import { IProductsRequest } from "../types/interfaces";
import ServiceUtils from "./ServiceUtils";

const ProductsService = {
  get(): Promise<IProductsRequest> {
    const url = "/data/products.json";
    return ServiceUtils.handleResponse(fetch(url));
  },
};

export default ProductsService;
