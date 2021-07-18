import { ReactElement, ReactNode } from "react";
import {
  ICategoriesContext,
  IFilterContext,
  ILoadingContext,
  IMessageContext,
} from "../types/interfaces";
import CategoriesContext from "./CategoriesContext";
import FilterContext from "./FilterContext";
import LoadingContext from "./LoadingContext";
import MessageContext from "./MessageContext";

interface IAppContext {
  children: ReactNode[];
  values: {
    filterValue: IFilterContext;
    loadingValue: ILoadingContext;
    messageValue: IMessageContext;
    categoriesValue: ICategoriesContext;
  };
}

export function AppContext({
  children,
  values,
}: IAppContext): ReactElement<React.FC> {
  const { filterValue, loadingValue, messageValue, categoriesValue } = values;

  return (
    <FilterContext.Provider value={filterValue}>
      <LoadingContext.Provider value={loadingValue}>
        <MessageContext.Provider value={messageValue}>
          <CategoriesContext.Provider value={categoriesValue}>
            {children}
          </CategoriesContext.Provider>
        </MessageContext.Provider>
      </LoadingContext.Provider>
    </FilterContext.Provider>
  );
}
