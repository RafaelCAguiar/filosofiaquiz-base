import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * { // as mudanças do New styles começaram aqui 
  box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New Styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({theme}) => theme.colors.contrastText};
    }
html, body{
  min-height: 100vh;
}
#_next {
  flex: 1;
  display: flex;
  flex-direction: column
}
`

const theme = db.theme;

export default function App({ Component , pageProps}) {
  return (
    <>
    <Head>
     <link rel="preconnect" href="https://fonts.gstatic.com"/>
     <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
    </Head>  
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  ); /// colocou o GlobalStyle abaixo do ThemeProvider 
}