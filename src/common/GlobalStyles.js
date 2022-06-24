import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --white: #fff;
    --lightGrey: #efefef;
    --medGrey: #5b5b5b;
    --black: #333;
    --accent: #d73e42;
    --accentDark: rgb(180, 30, 30);

    --maxPageWidth: 1300px;
  }

  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    height: auto;
  }
  html {
   position: relative;
   overflow-y: auto;
  }
  body {
    margin: 0;
    font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
    background-color: var(--lightGrey);
  }

  a { 
    text-decoration: none;
  }
`;
