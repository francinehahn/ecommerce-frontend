import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", "sans serif";
    }

    body {
        ::-webkit-scrollbar {
            width: 12px;
            background-color: #ffffff;
        }
        ::-webkit-scrollbar-track {
            background: #d7d7d7;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #acacac;
            border-radius: 20px;
        }

        input {
            width: 25vw;
            font-size: 16px;
            padding: 1vh .5vw;

            :focus {
                outline: none;
            }

            @media screen and (min-width: 1200px) {
                width: 30vw;
            }
            @media screen and (min-width: 1000px) and (max-width: 1200px) {
                width: 35vw;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                width: 45vw;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: 60vw;
            }
            @media screen and (max-width: 600px) {
                width: 80vw;
            }
        }

        button {
            border: none;
            :hover {
                opacity: .8;
                cursor: pointer;
            }
        }
    }
`