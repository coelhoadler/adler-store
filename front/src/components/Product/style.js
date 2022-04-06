import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 180px;
  display: flex;
  background-color: white;
  border-top: 1px solid #e6e6e6;
  &:first-child {
    border-top: none;
  }

  min-width: 420px;
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const ProductImage = styled.img`
  min-height: 150px;
  width: 140px;
  border-radius: 5px;
  padding: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 15px;
`;

export const PriceLabel = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const DescriptionLabel = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const StateLabel = styled.label`
  color: #c8c8c8;
  position: absolute;
  right: 40px;
`;
