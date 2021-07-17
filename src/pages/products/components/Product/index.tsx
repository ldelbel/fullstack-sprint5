import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { TProduct } from "../../../../types";
import { StyledProduct } from "./styled";

interface IProduct {
  product: TProduct;
}

export function Product({ product }: IProduct): ReactElement<React.FC> {
  const { image, name, price } = product;
  const slug = name.toLowerCase().split(" ").join("-");
  const newTo = { pathname: `/${slug}`, state: product };

  return (
    <StyledProduct>
      <Link to={newTo}>
        <div className="card">
          <img className="card__img" src={image} alt="" />
          <p className="card__description">{name}</p>
          <p className="card__price">R$ {price}</p>
        </div>
      </Link>
    </StyledProduct>
  );
}
