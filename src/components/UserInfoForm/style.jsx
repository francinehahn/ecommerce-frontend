import styled from "styled-components"


export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4vh;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f1f1f1;
    z-index: 5000;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;

        span {
            display: flex;
            input {
                border: none;
                font-size: 16px;
                padding: 1.5vh;
                :focus {
                    outline: none;
                }
                @media screen and (min-width: 1200px) {
                    width: 25vw;
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
        }
    }

    p {
        font-size: 16px;
        color: green;
        text-align: center;
    }
   
    button {
        border: none;
        border-radius: 5px;
        background-color: rgb(39, 0, 130);
        color: white;
        font-size: 16px;
        margin-top: 2vh;
        width: 85px;
        :hover {
            opacity: .8;
            cursor: pointer;
        }
        @media screen and (min-width: 1200px) {
            padding: 1.4vh 1.2vw;
        }
        @media screen and (min-width: 900px) and (max-width: 1200px) {
            padding: 1.4vh 1.5vw;
        }
        @media screen and (min-width: 600px) and (max-width: 900px) {
            padding: 1.4vh 2.5vw;
        }
        @media screen and (max-width: 600px) {
            padding: 1.4vh 3.5vw;
        }
    }
`
