import { useContext } from "react";
import CategoriesContext from "../../../../contexts/CategoriesContext";
import { ICategoriesContext } from "../../../../types/interfaces";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { StyledBreadcrumbs } from "./styled";

function Breadcrumbs() {
  const { categories } = useContext<ICategoriesContext>(CategoriesContext);

  return (
    <StyledBreadcrumbs>
      <nav>
        <ol className="breadcrumbs__list">
          {categories.current &&
            categories.current.map((c) => (
              <BreadcrumbItem key={c.id} link={c.link} name={c.name} />
            ))}
        </ol>
      </nav>
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
