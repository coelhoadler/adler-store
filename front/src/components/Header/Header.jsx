import React from "react";
import SearchInput from "../SearchInput/Input";
import * as S from "./style";

const Header = () => {
  return (
    <form name="formSearch" action="items">
      <S.Header>
        <S.Logo href="//www.mercadolivre.com.br">
          Mercado Livre Brasil - Onde comprar e vender de Tudo
        </S.Logo>

        <SearchInput />
      </S.Header>
    </form>
  );
};

export default Header;
