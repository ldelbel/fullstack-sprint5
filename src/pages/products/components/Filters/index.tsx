import { ReactElement } from "react";
import { Filter } from "../../../../types";
import { FilterItem } from "./FilterItem";
import { StyledFilters } from "./styled";

interface IFilters {
  filters: Filter[];
}

function Filters({ filters }: IFilters): ReactElement<React.FC> {
  return (
    <StyledFilters>
      <ul className="filters__list">
        {filters.map((f) => (
          <FilterItem key={f.id} label={f.label} />
        ))}
      </ul>
    </StyledFilters>
  );
}

export default Filters;
