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
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #000;
        overflow-x: hidden;
    }

    ::selection {
        background-color: rgba(256, 0, 0, 0.5);
        color: #fff;
    }

    ::-webkit-scrollbar {
        background-color: rgba(0, 0, 0, 0);
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(256, 0, 0, 0.5);
        border-radius: 50px;
    }
`