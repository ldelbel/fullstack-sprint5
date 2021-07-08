import { useContext } from "react";
import CategoriesContext from "../../../contexts/CategoriesContext";
import { ICategoriesContext } from "../../../types/interfaces";

interface IBreadcrumbItem {
  link: string;
  name: string;
}

function BreadcrumbItem({ link, name }: IBreadcrumbItem) {
  return (
    <li className="breadcrumbs__item">
      {link ? (
        <>
          <a className="breadcrumbs__link" href={link}>
            {name}
          </a>
          <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
        </>
      ) : (
        <span className="breadcrumbs__link">{name}</span>
      )}
    </li>
  );
}

function Breadcrumbs() {
  const { categories } = useContext<ICategoriesContext>(CategoriesContext);

  return (
    <section className="main__breadcrumbs breadcrumbs">
      <nav>
        <ol className="breadcrumbs__list">
          {categories.current &&
            categories.current.map((c) => (
              <BreadcrumbItem key={c.id} link={c.link} name={c.name} />
            ))}
        </ol>
      </nav>
    </section>
  );
}

export default Breadcrumbs;
