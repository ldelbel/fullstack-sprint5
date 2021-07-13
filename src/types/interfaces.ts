import { Dispatch, SetStateAction } from "react";
import { Breadcrumb, Categorie, Filter, TProduct } from ".";

interface ICategoriesContext {
  categories: ICategoriesState;
}

interface ICategoriesState {
  all: Categorie[];
  current: Breadcrumb[];
}

interface IFilterContext {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

interface IMessageContext {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

interface ILoadingContext {
  addRequest: () => void;
  removeRequest: () => void;
  isLoading: () => boolean;
}

type ILoadingState = ILoadingContext;

interface IProductsRequest {
  products: TProduct[];
  filters: Filter[];
}

export type {
  ICategoriesContext,
  ICategoriesState,
  ILoadingContext,
  ILoadingState,
  IFilterContext,
  IMessageContext,
  IProductsRequest,
};
