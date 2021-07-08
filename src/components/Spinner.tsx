import React, { useContext } from "react";
import LoadingContext from "../contexts/LoadingContext";
import { ILoadingContext } from "../types/interfaces";
import "./Spinner.css";

function Spinner() {
  const { isLoading } = useContext<ILoadingContext>(LoadingContext);

  return isLoading() ? <div className="loading"></div> : <div></div>;
}

export default Spinner;
