import React from "react";
import * as S from "./style";

const Product = () => {
  return (
    <S.Wrapper>
      <S.ProductImage src="https://http2.mlstatic.com/D_752561-MLA32731813778_112019-I.jpg" alt="" />
      <S.Info>
        <S.PriceLabel>$ 1.980</S.PriceLabel>
        <S.DescriptionLabel>Sony Playstation 4 Slim 1tb Standard Color Negro Azabache</S.DescriptionLabel>
        <S.StateLabel>Capital Federal</S.StateLabel>
      </S.Info>
    </S.Wrapper>
  );
};

export default Product;
