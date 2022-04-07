import React from "react";
import * as S from "./style";

const SearchInput = () => {
  return (
    <S.InputWrapper>
      <S.Input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar produtos, marcas e muito mais…"
        autoComplete="off"
      />
      <S.Button type="submit"></S.Button>
    </S.InputWrapper>
  );
};

export default SearchInput;
