import React, { ReactElement, useContext } from "react";
import { FiTruck } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import MessageContext from "../../../../contexts/MessageContext";
import { StyledShopCard } from "./styled";

interface ShopCardProps {
  price: string;
}

export function ShopCard({ price }: ShopCardProps): ReactElement<React.FC> {
  const { setMessage } = useContext(MessageContext);
  const history = useHistory();

  const installment = () => {
    const valueDot = Number(price.replace(",", ".")) / 3;
    return valueDot.toFixed(2).replace(".", ",");
  };

  function handleAddToCart() {
    setMessage("Produto adicionado à sacola");
    setTimeout(() => {
      history.push("/");
    }, 1200);
  }

  return (
    <StyledShopCard>
      <p>
        Vendido e entregue por <span>RCHLO</span>
      </p>

      <div className="prices">
        <strong>R$ {price}</strong>
        <div>
          <span>Cartão de crédito 1x de R$ {price}</span>
          <span>Cartão de crédito 3x de R$ {installment()}</span>
        </div>
      </div>

      <button className="addBtn" onClick={() => handleAddToCart()}>
        ADICIONAR À SACOLA
      </button>

      <div className="deliver">
        <div className="deliver__info">
          <FiTruck size={20} color="#333" />
          <span>Consulte o frete</span>
          <input
            name="CEP"
            id="CEP"
            required
            pattern="\d{5}-\d{3}"
            placeholder="______-___"
          />
          <button>OK</button>
        </div>
        <p>Não sei meu cep</p>
      </div>
    </StyledShopCard>
  );
}
