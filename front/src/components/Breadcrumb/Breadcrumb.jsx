import React from "react";
import * as S from "./style";

export const Breadcrumb = () => {

  const categories = JSON.parse(localStorage.getItem('products')).categories;

  return (
    <S.Wrapper>
      <S.UL>
        {categories.map((category, index) => {
          return <S.LI key={index}> {category.name} { index === (categories.length - 1) ? '' : '>'} </S.LI>;
        })}
      </S.UL>
    </S.Wrapper>
  );
};

export default Breadcrumb;
