import React from 'react';
import * as S from './style';

export const ProductDescription = ({ product }) => {
    return (
        <>
            <img src={product.picture} alt={product.title} />
            <S.DescriptionLabel>Descripción del producto</S.DescriptionLabel>
            <S.Description>{product.description}</S.Description>
        </>
    )
}

export default ProductDescription;