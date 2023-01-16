import styled from "styled-components"


export const FormContainer = styled.form `
    height: 79vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    padding: 0 5vw;
    h3 {
        margin-bottom: 5vh;
        text-align: center;
        @media screen and (min-width: 800px) {
            font-size: 28px;
        }
        @media screen and (max-width: 800px) {
            font-size: 24px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        gap: .5vh;
        input {
            font-size: 16px;
            padding: 1vh .5vw;
            :focus {
                outline: none;
            }
            @media screen and (min-width: 1100px) {
                width: 30vw;
            }
            @media screen and (min-width: 900px) and (max-width: 1100px) {
                width: 35vw;
            }
            @media screen and (min-width: 700px) and (max-width: 900px) {
                width: 50vw;
            }
            @media screen and (min-width: 500px) and (max-width: 700px) {
                width: 70vw;
            }
            @media screen and (max-width: 500px) {
                width: 85vw;
            }
        }
        p {
            font-size: 14px;
            color: red;
        }
    }
    button {
        border: none;
        border-radius: 5px;
        background-color: rgb(39, 0, 130);
        color: white;
        font-size: 16px;
        margin-top: 1vh;
        :hover {
            opacity: .8;
            cursor: pointer;
        }
        @media screen and (min-width: 1000px) {
            padding: 1.4vh 1vw;   
        }
        @media screen and (max-width: 1000px) {
            padding: 1.4vh 1.8vw;   
        }
    }
    p {
        color: green;
    }
`