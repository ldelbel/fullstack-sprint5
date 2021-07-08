import { Filter, TProduct } from '../types';
import ServiceUtils from './ServiceUtils';

interface IProductsRequest { 
    products: TProduct[];
    filters: Filter[];
}

const ProductsService = {
    get(): Promise<IProductsRequest> {
        const url = '/data/products.json';
        return ServiceUtils.handleResponse(fetch(url));
    },
};

export default ProductsService;