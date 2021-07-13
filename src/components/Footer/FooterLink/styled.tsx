import styled from "styled-components";

export const StyledFooterLink = styled.section`
  background-color: #f6f6f6;
  margin-top: 40px;

  .links {
    display: flex;
  }

  .links__contacts {
    width: 30%;
    display: flex;
  }

  .links__contacts .col {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .links__contacts .contact-icon {
    text-align: center;
  }

  .links__contacts .contact-icon__img {
    display: block;
    margin: auto;
    width: 25px;
  }

  .links__contacts .contact-icon__text {
    padding: 8px;
    font-size: 0.8125rem;
    white-space: pre-line;
  }

  .links__separator {
    width: 1px;
    border: none;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .links__companies {
    display: flex;
    width: 60%;
    padding: 50px;
  }

  .links__companies .company-links {
    flex-grow: 1;
    margin-left: 8px;
    margin-right: 8px;
  }

  .links__companies .company-links__item {
    padding-top: 8px;
  }

  .links__companies .company-links__title {
    text-transform: uppercase;
    font-size: 0.875rem;
  }

  .links__companies .company-links__text {
    line-height: 25px;
    font-size: 0.6875rem;
    font-weight: 400;
    color: black;
  }

  .links__companies .company-links__text:hover {
    text-decoration: underline;
  }
`;
