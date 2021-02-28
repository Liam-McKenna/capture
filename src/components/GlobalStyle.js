import { createGlobalStyle } from "styled-components";
import svgimage from "../img/topography.svg";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
    @media (max-width: 800px){
        font-size: 55%;
    }
    
}


body{
    //background: #1b1b1b;
    background: url(${svgimage});
    background-color: #0F1113;
    font-family: 'inter', sans-serif;
    overflow-x: hidden;
}

.phoneCall{
margin: 1rem;
text-decoration: none;
font-weight:bold;
font-size: 1.1rem;
cursor: cursor;
padding: 1rem 2rem;
border: 3px solid #d9235a;
background:transparent;
color:white;
transition: all .3s ease;
font-family: 'inter', sans-serif;

&:hover{
    background-color: #d9235a;
    color:white;
    }
    
&:active {
    outline: none;
   
}
}


h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color:white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
    color: #d9235a;
}
span{
    font-weight:bold;
    color: #d9235a;

}
a{
    font-size:1.1rem;
}
p{
    padding: 3rem 0rem;
    color: #b2becd;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle;
