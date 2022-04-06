import React from "react";
import ReactLoader from "react-loader";
import Product from "../Product/Product";
import * as S from "./style";

const ProductList = ({ products }) => {
  if (products && products.items) {
    return (
      <S.List>
        {products.items.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </S.List>
    );
  } else {
    return <ReactLoader />
  }
};

export default ProductList;
