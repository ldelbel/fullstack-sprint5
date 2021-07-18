import styled from "styled-components";

export const StyledBreadcrumbs = styled.section`
  margin-bottom: 16px;

  nav {
    max-width: 1200px;
    margin: 0 auto;
  }

  .breadcrumbs__list {
    display: flex;
  }

  @media (max-width: 1200px) {
    .breadcrumbs__list {
      justify-content: center;
    }
  }
`;
