import React from "react";
import Product from "../Product/Product";
import * as S from "./style";

const ProductList = () => {
  return (
    <S.List>
        <Product />
        <Product />
    </S.List>
  );
};

export default ProductList;
