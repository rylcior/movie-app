import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    min-height: 100vh;
    min-width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
  }
  
  a, button {
    font-family: 'Poppins', sans-serif;
  }
`;
