import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      border: none;
      margin: 0;
      padding: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${colors.body.background};
        min-width: 320px;
    }

    ul,
    ol {
      list-style: none;
    }
    
    html,
    body {
      height: 100%;
    }	    
`;
