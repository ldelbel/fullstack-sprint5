import styled from "styled-components";

export const StyledProduct = styled.div`
  height: 100%;
  padding: 1rem 4.5rem;
  font-family: "Open Sans", sans-serif;

  .content {
    display: flex;
    padding-left: 6rem;

    > div {
      width: 50%;
    }

    .img {
      display: flex;
      justify-content: center;
    }

    &__image {
      width: 80%;
      filter: contrast(120%); // será?
    }

    &__description {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #121212;
      }

      .sizes {
        p {
          font-weight: 400;
          font-size: 0.9rem;

          span {
            font-weight: bold;
            font-size: 1rem;
            color: #555;
          }
        }
      }
    }
  }
`;
