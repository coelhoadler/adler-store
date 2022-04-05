import React from "react";
import * as S from "./style";

const Product = ({product}) => {
  return (
    <S.Wrapper>
      <S.ProductImage src={product.picture} alt={product.title} />
      <S.Info>
        <S.PriceLabel>$ {product.price.amount}</S.PriceLabel>
        <S.DescriptionLabel>{product.title}</S.DescriptionLabel>
        <S.StateLabel>Capital Federal</S.StateLabel>
      </S.Info>
    </S.Wrapper>
  );
};

export default Product;
