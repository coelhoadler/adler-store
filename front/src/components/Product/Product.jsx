import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { formatToARS } from "../../utils/currencyHelper";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <S.Link onClick={() => navigate(`/items/${product.id}`)}>
      <S.Wrapper>
        <S.ProductImage src={product.picture} alt={product.title} />
        <S.Info>
          <S.PriceLabel>
            {formatToARS(product.price.amount)}
            {product.free_shipping ? (
              <S.FreeShipping
                src="free-shipping.png"
                title="Free Shipping"
                alt="Free Shipping"
                height={25}
              />
            ) : (
              ""
            )}
          </S.PriceLabel>
          <S.DescriptionLabel>{product.title}</S.DescriptionLabel>
          <S.StateLabel>Capital Federal</S.StateLabel>
        </S.Info>
      </S.Wrapper>
    </S.Link>
  );
};

export default Product;
