import styled from "styled-components"


export const FormContainer = styled.form `
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #f1f1f1;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5vh;
        input {
            border: none;
            border-radius: 5px;
            font-size: 16px;
            padding: 1vh 0 1vh .5vw;
            @media screen and (min-width: 1200px) {
                width: 35vw;
            }
            @media screen and (min-width: 1000px) and (max-width: 1200px) {
                width: 40vw;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                width: 60vw;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: 70vw;
            }
            @media screen and (min-width: 200px) and (max-width: 600px) {
                width: 80vw;
            }
            :focus {
                outline: none;
            }
        }
    }

    p {
        font-size: 16px;
        color: green;
        text-align: center;
    }
    span {
        display: flex;
        gap: 1vw;
        margin-top: 2vh;
        button {
            border: none;
            border-radius: 5px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 16px;
            margin-top: 2vh;
            @media screen and (min-width: 1000px) {
                padding: 1.4vh 1.2vw;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                padding: 1.4vh 2.5vw;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                padding: 1.4vh 3vw;
            }
            @media screen and (max-width: 600px) {
                padding: 1.4vh 3.5vw;
            }
            :hover {
                opacity: .8;
                cursor: pointer;
            }
        }
    }
`