import React from "react";
import { ICategoriesContext } from "../types/interfaces";

const CategoriesContext = React.createContext<ICategoriesContext>({} as ICategoriesContext);

export default CategoriesContext;
