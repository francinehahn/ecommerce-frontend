import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

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

        form {
            width: 25rem;
            
            @media screen and (max-width: 800px) {
                width: 20rem;
            }
        }

        input {
            width: 25rem;
            font-size: 1rem;
            padding: .5rem;
            
            :focus {
                outline: none;
            }

            @media screen and (max-width: 800px) {
                width: 20rem;
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

export const PasswordInput = styled.span `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid grey;
    border-radius: 2px;
    width: 25rem;
    
    @media screen and (max-width: 800px) {
        width: 20rem;
    }
    
    input {
        border: none;
    }

    svg {
        color: #515151;
        height: 1.25rem;
        width: 1.25rem;
        margin: .5rem;

        :hover {
            opacity: .7;
            cursor: pointer;
        }
    }
`