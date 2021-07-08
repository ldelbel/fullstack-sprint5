import { Filter } from "../../../types";

interface IFilterItem {
  label: string;
}

interface IFilters {
  filters: Filter[];
}

function FilterItem({ label }: IFilterItem) {
  return (
    <li className="filters__item">
      <span className="filters__label">{label}</span>
      <img className="filters__img" src="assets/filter.svg" alt="filtro" />
    </li>
  );
}

function Filters({ filters }: IFilters) {
  return (
    <section className="main__filters filters">
      <ul className="filters__list">
        {filters.map((f) => (
          <FilterItem key={f.id} label={f.label} />
        ))}
      </ul>
    </section>
  );
}

export default Filters;
