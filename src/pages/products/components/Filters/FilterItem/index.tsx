import { ReactElement } from "react";
import { StyledFilterItem } from "./styled";

interface IFilterItem {
  label: string;
}

export function FilterItem({ label }: IFilterItem): ReactElement<React.FC> {
  return (
    <StyledFilterItem>
      <span className="filters__label">{label}</span>
      <img className="filters__img" src="assets/filter.svg" alt="filtro" />
    </StyledFilterItem>
  );
}
