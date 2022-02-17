import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { store } from './redux/app/store';
import { Provider } from 'react-redux';
import Layout from './pages/Layout';

const GlobalStyle = createGlobalStyle<{bg:string}>`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: ${props => props.bg};
    }   
`;

const ColorTheme = {
  darkGray: '#212121',
  gray: '#5A5A5A',
  lightGray: '#969191',
  light: '#EAEAEA',
  black: '#000',
  white: '#fff',
  green: '#3BCE69'
} as const;

type ThemeType = typeof ColorTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
};

ReactDOM.render(
    <ThemeProvider theme={ColorTheme}>
        <Provider store={store}>
            <GlobalStyle bg={ColorTheme.darkGray} />
            <Layout />
        </Provider>
    </ ThemeProvider >
    ,
    document.getElementById('root')
);
