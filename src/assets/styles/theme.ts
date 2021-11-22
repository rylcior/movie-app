import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            [key: string]: string;
        };
        fontSize: {
            [key: string]: string;
        };
    }
}

export const theme: DefaultTheme = {
    colors: {
        white: '#FFFFFF',
        black: '#111111',
        success: '#8FCB81',
        error: '#FF8383',
        yellow: '#E1D888',
        cream: '#fefbe9',
        darkCream: '#fefbd1',
    },
    fontSize: {
        xxl: '34px',
        xl: '24px',
        l: '17px',
        m: '12px',
        s: '11px',
    },
};
