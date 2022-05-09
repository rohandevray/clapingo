import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    //for adding style to whole website just like in css *
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
       
    }
    html{
        @media (max-width:1500px){
            font-size:80% ;
        }
        @media (max-width:1400px){
            font-size:76% ;
        }
        @media (max-width:1000px){
            font-size:70% ;
        }
        @media (max-width:856px){
            font-size: 68%;
        }
       
    }
    body{
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
