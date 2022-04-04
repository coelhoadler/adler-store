import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const Header = styled.header`
  width: 100vw;
  background-color: ${colors.header.background};
  height: 60px;
  padding: 0 140px;

  display: flex;
  align-items: center;
`;

export const Logo = styled.a`
  background-image: url("logo__small.png");
  background-repeat: no-repeat;
  width: 44px;
  height: 32px;
  text-indent: -9999px;
`;
