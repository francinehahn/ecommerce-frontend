import styled from "styled-components";


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
            width: 35vw;
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
            padding: 1.4vh 1.2vw;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 16px;
            margin-top: 2vh;
            :hover {
                opacity: .8;
                cursor: pointer;
            }
        }
    }
`