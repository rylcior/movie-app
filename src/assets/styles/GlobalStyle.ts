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
    margin: 0 auto;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
    max-width: 1300px;
    background-color: ${({ theme }) => theme.colors.black};
  }
  
  a, button {
    font-family: 'Poppins', sans-serif;
  }
`;
