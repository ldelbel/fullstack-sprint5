import { Dispatch, SetStateAction } from "react";
import { Breadcrumb, Categorie } from ".";

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

interface ILoadingState extends ILoadingContext {}

export type {
  ICategoriesContext,
  ICategoriesState,
  ILoadingContext,
  ILoadingState,
  IFilterContext,
  IMessageContext,
};
