import styled from 'styled-components';

export const Conditions = styled.span`
    text-transform: capitalize;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const PriceLabel = styled.p`
    font-size: 48px;
    margin-bottom: 50px;
`;

export const Button = styled.button`
    width: 100%;
    height: 48px;
    color: white;
    background-color: #3483fa;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color .2s ease-in;
    &:hover {
        background-color: #2968c8;
    }
`;