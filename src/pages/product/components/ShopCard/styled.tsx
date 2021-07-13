import styled from "styled-components";

export const StyledShopCard = styled.div`
  width: 470px;
  height: 255px;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  padding: 2rem 1.5rem;

  > p {
    text-align: center;
    color: #666;
    font-weight: 400;
    margin-bottom: 1.8rem;

    span {
      font-weight: bold;
      color: #4581a8;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .prices {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.7rem;

    strong {
      font-size: 1.6rem;
      color: #d0403a;
      display: flex;
      align-items: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      color: #666;
      font-weight: 400;
      font-size: 0.7rem;

      span + span {
        margin-top: 0.4rem;
      }
    }
  }

  .addBtn {
    background: #008844;
    border: none;
    border-radius: 4px;
    width: 100%;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0.8rem 0;

    &:hover {
      cursor: pointer;
      box-shadow: 0 2px 4px #3b2e2e60;
    }
  }

  .deliver {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    &__info {
      display: flex;
      align-items: center;
      height: 2rem;

      span {
        font-size: 0.7rem;
        font-weight: 400;
        color: #333;
        margin-left: 0.5rem;

        &:hover {
          cursor: default;
        }
      }

      input {
        width: 31%;
        font-size: 1rem;
        padding: 0 0.5rem;
        height: 100%;
        border: 1px solid #bbbbbb;
        border-radius: 2px;
        margin-left: 0.5rem;

        &:hover {
          border: 1px solid #585858;
        }
      }

      button {
        height: 100%;
        border: 1px solid #bbbbbb;
        border-radius: 2px;
        background: #fff;
        margin-left: 0.5rem;
        color: #585858;

        &:hover {
          border: 1px solid #585858;
          cursor: pointer;
        }
      }
    }

    p {
      font-size: 0.6rem;
      white-space: nowrap;
      display: flex;
      align-items: center;
      color: #777;
      font-weight: 400;
      text-decoration: underline;

      &:hover {
        cursor: pointer;
        color: #555;
      }
    }
  }
`;
