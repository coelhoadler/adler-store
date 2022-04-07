import React from "react";
import ReactLoader from "react-loader";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Product from "../Product/Product";
import * as S from "./style";

const ProductList = ({ products }) => {
  if (products && products.items) {
    return (
      <>
        <Breadcrumb />
        <S.List>
          {products.items.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </S.List>
      </>
    );
  } else {
    return <ReactLoader />
  }
};

export default ProductList;
