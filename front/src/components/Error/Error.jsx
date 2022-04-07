import axios from "axios";
import * as S from './style';

export const Error = ({ error }) => {
    return (
        <S.Wrapper>
            Ocorreu um problema ao <strong>carregar os produtos</strong>, tente novamente mais tarde!
        </S.Wrapper>
    )
};

export default Error;