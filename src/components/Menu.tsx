import React, { useContext } from "react";
import CategoriesContext from "../contexts/CategoriesContext";
import { ICategoriesContext } from "../types/interfaces";

interface IMenuItem {
  label: string;
}

function MenuItem({ label }: IMenuItem) {
  return (
    <li className="menu__item">
      <a className="menu__link" href="#home">
        <span>{label}</span>
      </a>
    </li>
  );
}

function Menu() {
  const { categories } = useContext<ICategoriesContext>(CategoriesContext);

  return (
    <nav className="header__menu menu">
      <ul className="menu__list">
        {categories.all &&
          categories.all.map((m) => <MenuItem key={m.id} label={m.label} />)}
      </ul>
    </nav>
  );
}

export default Menu;
