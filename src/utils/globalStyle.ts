//Imports
import { createGlobalStyle } from "styled-components";

//Global styles
export default createGlobalStyle`
    * {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        color: #2C3E50;
    }
    html {
        text-align: center;
    }
    .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
    }
    .bg-dark {
        background-color: #12002b;
    }
    h1 {
        font-size: 2em;
    }
    input{
        padding: 5px;
        font-size: 1.2rem;
    }
    button {
        background-color: #00bc77;
        border: none;
        color: #fff;
        font-weight: bold;
        padding: 8px;
        font-size: 1.1rem;
        margin-top: 1rem;
        :hover {
            cursor: pointer;
        }
    }
`;
