import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; 
    }

    body {
        font-size: 1.6rem; 
        background-color: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.bright}
    }


`;

export default GlobalStyle;