import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import Breadcrumbs from "../products/components/Breadcrumbs";
import { Shopcard } from "./components/ShopCard";
import { SizeOption } from "./components/SizeOption";
import { StyledProduct } from "./styled";

interface ILocation {
    image: string;
    name: string;
    price: string;
}

export function ProductInfo() {
  const { state } = useLocation<ILocation>();
  const { push } = useHistory();
  const [sizes, setSizes] = useState<number[]>([]);
  const [selectedSize, setSelectedSize] = useState<number>();
  const { image, name, price } = state;

  function defineSizes() {
    const array = name.split(" ").map((e) => Number(e));
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
    }
    defineSizes();
  }, []);

  return state ? (
    <StyledProduct>
      <Breadcrumbs />
      <div className="content">
        <div className="img">
          <img src={`/${image}`} alt="" className="content__image" />
        </div>

        <div className="content__description">
          <h2>{name}</h2>

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
          <Shopcard price={price} />
        </div>
      </div>
    </StyledProduct>
  ) : (
    <Redirect to="/404" />
  );

  // return (
  //   <StyledProduct>
  //     <Breadcrumbs />
  //     <div className="content">
  //       <div className="img">
  //         <img src={`/${image}`} alt="" className="content__image" />
  //       </div>

  //       <div className="content__description">
  //         <h2>{name}</h2>

  //         <div className="sizes">
  //           <p>
  //             Selecione um tamanho: <span>{selectedSize}</span>
  //           </p>

  //           <div className="sizes__options">
  //             {sizes &&
  //               sizes.map((size) => (
  //                 <SizeOption
  //                   key={size}
  //                   size={size}
  //                   selected={selectedSize}
  //                   setSize={setSelectedSize}
  //                 />
  //               ))}
  //           </div>
  //         </div>
  //         <Shopcard price={price} />
  //       </div>
  //     </div>
  //   </StyledProduct>
  // );
}
