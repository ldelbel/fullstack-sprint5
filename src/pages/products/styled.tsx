import styled from "styled-components";

export const StyledProductsPage = styled.main`
  margin: 0 auto;
  width: 80%;
  max-width: 1100px;
  padding: 16px;

  .main__filters {
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }

  @media (max-width: 1200px) {
    .main__filters {
      display: none;
    }
  }

  .main__filters .filters__list {
    display: flex;
  }

  .main__filters .filters__item {
    display: flex;
    align-items: center;
    padding: 12px 14px;
  }

  .main__filters .filters__item:hover {
    cursor: pointer;
    background-color: rgba(38, 30, 30, 0.04);
  }

  .main__filters .filters__label {
    text-transform: uppercase;
    font-size: 0.6875rem;
    font-weight: 400;
    color: #261e1e;
  }

  .main__filters .filters__img {
    height: 20px;
    margin-left: 8px;
  }

  .main__products {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .main__products .products__row {
    margin: 8px;
  }

  .main__products .products__list {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    .main__products .products__list {
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1201px) {
    .main__products .products__list {
      flex-wrap: wrap;
    }
  }
`;
