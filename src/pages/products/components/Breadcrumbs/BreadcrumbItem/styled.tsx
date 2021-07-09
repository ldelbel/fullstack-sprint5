import styled from "styled-components";

export const StyledBreadcrumbItem = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #585858;

  @media (max-width: 1200px) {
    display: none;
  }

  &:not(:last-child):hover {
    text-decoration: underline;
  }

  &--active {
    color: #261e1e;
  }

  @media (max-width: 1200px) {
    &--active {
      display: block;
      text-align: center;
      font-size: 1.4375rem;
      font-weight: 400;
      text-transform: uppercase;
    }
  }

  .breadcrumbs__separator {
    margin-left: 8px;
    margin-right: 8px;
    user-select: none;
  }
`;
