import React, { ReactElement, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TProduct } from "../../types";
import Breadcrumbs from "../products/components/Breadcrumbs";
import { ShopCard } from "./components/ShopCard";
import { SizeOption } from "./components/SizeOption";
import { StyledProduct } from "./styled";

export function ProductInfo(): ReactElement<React.FC> {
  const { state } = useLocation<TProduct>();
  const { push } = useHistory();
  const [sizes, setSizes] = useState<number[]>([]);
  const [selectedSize, setSelectedSize] = useState<number>();

  function defineSizes() {
    const array = state.name.split(" ").map((e) => Number(e));
    const filtered = array.filter((e) => !isNaN(e));
    const dif = filtered[1] - filtered[0];
    let i = 2;
    while (i < dif) {
      filtered.push(filtered[0] + i);
      i += 2;
    }
    setSizes(filtered.sort((a, b) => a - b));
  }

  useEffect(() => {
    if (!state) {
      push("/404");
      return;
    }
    defineSizes();

    // eslint-disable-next-line
  }, []);

  return state ? (
    <StyledProduct>
      <Breadcrumbs />
      <div className="content">
        <div className="img">
          <img src={`/${state.image}`} alt="" className="content__image" />
        </div>

        <div className="content__description">
          <h2>{state.name}</h2>

          <div className="sizes">
            <p>
              Selecione um tamanho: <span>{selectedSize}</span>
            </p>

            <div className="sizes__options">
              {sizes &&
                sizes.map((size) => (
                  <SizeOption
                    key={size}
                    size={size}
                    selected={selectedSize}
                    setSize={setSelectedSize}
                  />
                ))}
            </div>
          </div>
          <ShopCard price={state.price} />
        </div>
      </div>
    </StyledProduct>
  ) : (
    <div className="loading"></div>
  );
}
