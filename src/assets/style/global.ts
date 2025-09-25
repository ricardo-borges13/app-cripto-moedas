import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";


export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #18171c;        
        width: 100%;
        /* max-width: 1080px; */
        margin: 0 auto;
        font-family: sans-serif;
        font-size: 16px;
        color: white;
    }

    button{
      cursor: pointer;
      border: 0;
    }

    
`