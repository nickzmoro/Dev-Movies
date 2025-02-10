import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;
        color: #fff;
    }

    body {
        background-color: rgb(20, 21, 23);
    }
`