import React, { ReactElement, useContext } from "react";
import LoadingContext from "../contexts/LoadingContext";
import { ILoadingContext } from "../types/interfaces";
import "./Spinner.css";

function Spinner(): ReactElement<React.FC> {
  const { isLoading } = useContext<ILoadingContext>(LoadingContext);

  return isLoading() ? <div className="loading"></div> : <div></div>;
}

export default Spinner;
