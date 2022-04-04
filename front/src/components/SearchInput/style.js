import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const InputWrapper = styled.div`
    width: 100%;
    padding-left: 30px;

    display: flex;
    position: relative;
`;

export const Input = styled.input`
    height: 45px;
    width: 100%;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.header.input};
    padding-left: 15px;
    outline: none;

    &::placeholder {
        color: ${colors.header.input};
    }
`;

export const Button = styled.button`
    background-image: url("search.svg");
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    width: 50px;
`
