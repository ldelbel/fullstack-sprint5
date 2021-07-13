import styled from "styled-components";

export const StyledFooterContact = styled.section`
  .contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contact__info {
    height: 50px;
    line-height: 50px;
    text-transform: uppercase;
    font-size: 0.8125rem;
  }

  .contact__input {
    height: 24px;
    line-height: 24px;
    border: 0px;
    border-bottom: 1px solid rgba(38, 30, 30, 0.42);
    outline: none;
    width: 300px;
    font-size: 0.9375rem;
    font-weight: 600;
    color: #000;
  }

  .contact__input:hover {
    border-bottom: 2px solid #261e1e;
  }

  .contact__input:focus-within {
    border-bottom: 2px solid #261e1e;
  }

  .contact__input::placeholder {
    font-style: italic;
    opacity: 42%;
    font-weight: 600;
  }

  .contact__btn {
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.26);
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    border: none;
    padding: 10px 20px 10px 20px;
  }

  .contact__btn__txt {
    font-size: 0.8125rem;
    text-transform: uppercase;
  }

  .contact__msg-app {
    font-size: 0.9375rem;
    height: 50px;
    line-height: 50px;
    text-transform: uppercase;
  }

  .contact .apps__img {
    width: 110px;
    margin-left: 8px;
  }
`;
