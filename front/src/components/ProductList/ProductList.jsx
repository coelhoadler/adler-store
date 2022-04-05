import React from "react";
import Product from "../Product/Product";
import * as S from "./style";

const ProductList = ({ products }) => {
  console.log("recebendo", products);
  if (products && products.items) {
    return (
      <S.List>
        {products.items.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </S.List>
    );
  }
};

export default ProductList;
