import React, { ReactElement, useContext } from "react";
import FilterContext from "../../contexts/FilterContext";
import { IFilterContext } from "../../types/interfaces";
import Menu from "../Menu";
import { StyledHeader } from "./styled";

function Header(): ReactElement<React.FC> {
  const { setFilter } = useContext<IFilterContext>(FilterContext);

  return (
    <StyledHeader>
      <div className="header__container">
        <div className="header__mobile">
          <div className="header__drawer menu header__drawer--active">
            <img className="menu__img" src="assets/menu.svg" alt="menu" />
            <p className="menu__title">menu</p>
          </div>
          <div className="header__drawer close">
            <img src="assets/close.svg" alt="fechar menu" />
            <p className="close__title">fechar</p>
          </div>
          <h1 className="header__logo">
            <img className="header__img" src="assets/rchlo.svg" alt="Logo" />
          </h1>
        </div>
        <div className="header__desktop">
          <h1 className="header__logo">
            <img
              className="header__img"
              src="assets/riachuelo.svg"
              alt="Logo"
            />
          </h1>
        </div>
        <div className="header__search">
          <img className="header__icon" src="assets/search.svg" alt="lupa" />
          <input
            className="header__input"
            type="search"
            placeholder="O que você está procurando?"
            onChange={(event) => setFilter(event.target.value)}
          />
        </div>

        <Menu />
      </div>
    </StyledHeader>
  );
}

export default Header;
