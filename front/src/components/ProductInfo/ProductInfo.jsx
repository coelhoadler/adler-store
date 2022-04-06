import React from 'react';
import * as S from './style';

const ProductInfo = ({ product }) => {
    return (
        <>
            <S.Conditions>{product.condition} - {product.sold_quantity} vendidos</S.Conditions>
            <S.Title>{product.title}</S.Title>
            <S.PriceLabel>$ {product.price.amount}</S.PriceLabel>
            <S.Button>Comprar</S.Button>
        </>
    );
}

export default ProductInfo;