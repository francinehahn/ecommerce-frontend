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

        p {
            font-size: 14px;
            color: red;
            @media screen and (max-width: 600px) {
                width: 80vw;
            }
        }
    }

    button {
        border: none;
        border-radius: 5px;
        background-color: rgb(39, 0, 130);
        color: white;
        font-size: 16px;
        margin-top: 1vh;
        
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