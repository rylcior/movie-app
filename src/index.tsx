import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'views/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
