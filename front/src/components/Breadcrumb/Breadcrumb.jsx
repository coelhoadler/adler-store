import React  from 'react';
import * as S from './style';

export const Breadcrumb = ({ categories }) => {

    return(
        <S.Wrapper>
            { categories.join(' > ') }
        </S.Wrapper>
    );

}

export default Breadcrumb;