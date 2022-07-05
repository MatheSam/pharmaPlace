import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #fff;
    --primary: #2E3192;
    --secundary: #4357AC;
    --terciary: #597DC6;
    --fourth: #6EA2DF;
    --fifth: #83C8F9;
    --orange: #E64727;
    --green: #4FC646;

    --main-font: 'Roboto', sans-serif;
    --second-font: 'Poppins', sans-serif;
}

body{
    background-color: var(--white);
}

input, button{
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
}

h1, h2, h3, h4, h5, h6 {
 font-family: var(--second-font);
 font-weight: 700;
} 

button{
 cursor: pointer;
 opacity: 0.6;
 transition: all ease 0.3s;

 &:hover{
    opacity: 1;
 }
}

a{
    text-decoration: none;
}

li, ul {
    list-style: none;
}
`;
