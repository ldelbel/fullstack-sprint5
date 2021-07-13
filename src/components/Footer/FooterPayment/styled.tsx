import styled from "styled-components";

export const StyledFooterPayment = styled.section`
  margin-top: 25px;
  margin-bottom: 25px;

  .payment {
    display: flex;
  }

  .payment__title {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .payment__alternatives {
    width: 50%;
  }

  .payment__img {
    margin: 2px;
    width: auto;
  }

  .payment__social {
    flex-grow: 1;
  }

  .payment__social .social__icons {
    display: flex;
  }

  .payment__social .social__icon {
    width: 50px;
  }

  .payment__social .social__icon .icon__img {
    display: block;
    margin: auto;
  }

  .payment__social .social__icon .icon__text {
    padding-top: 4px;
    font-size: 0.6875rem;
    font-weight: 300;
    text-align: center;
  }

  .payment__accessibility {
    flex-grow: 1;
  }
`;
