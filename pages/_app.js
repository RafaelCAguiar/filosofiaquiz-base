import { createGlobalStyle, ThemeProvider } from 'styled-components'
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
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  ) /// colocou o GlobalStyle abaixo do ThemeProvider 
}