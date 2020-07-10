import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;

    ::-webkit-scrollbar {
      width: 2px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    
    ::-webkit-scrollbar-thumb {
      background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }

  html, body {
    background-color: #18202e;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
