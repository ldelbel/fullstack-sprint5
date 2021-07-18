import React from "react";
import { IFilterContext } from "../types/interfaces";

const FilterContext = React.createContext<IFilterContext>({} as IFilterContext);

export default FilterContext;
