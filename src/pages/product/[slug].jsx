import { useEffect, useState } from "react";
import Breadcrumbs from "../products/components/Breadcrumbs";
import { Shopcard } from "./components/ShopCard";
import { SizeOption } from "./components/SizeOption";
import { StyledProduct } from './styled';

export function ProductInfo({ location }) {
  const { image, name, price } = location.state;
  const [sizes, setSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState();

  function defineSizes() {
    const array = name.split(' ').map(e => Number(e));
    const filtered = array.filter(e => !isNaN(e));
    const dif = filtered[1] - filtered[0];
    let i = 2;
    while(i < dif) {
      filtered.push(filtered[0] + i);
      i += 2;
    }
    setSizes(filtered.sort((a,b) => a - b))
  }

  useEffect(() => defineSizes(), []);

  return (
    <StyledProduct>
      <Breadcrumbs />
      <div className='content'>
        <div className="img">
          <img src={`/${image}`} alt="" className="content__image" />
        </div>
        
        <div className="content__description">

          <h2>
            {name}
          </h2>

          <div className="sizes">

            <p>Selecione um tamanho: <span>{selectedSize}</span></p>

            <div className="sizes__options">
              {sizes && sizes.map(size => (
                <SizeOption size={size} selected={selectedSize} setSize={setSelectedSize} />
              ))}
            </div>

          </div>
          <Shopcard price={price} />

        </div>

      </div>
    </StyledProduct>
  )
}