import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'views/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import dotenv from 'dotenv';
import 'assets/styles/fonts.css';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
