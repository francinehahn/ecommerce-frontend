import styled from "styled-components"


export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
        align-items: flex-start;
        gap: .3rem;

        input {
            border: none;
            font-size: 1rem;
            padding: .6rem;
            :focus {
                outline: none;
            }
        }
    }

    p {
        font-size: 1rem;
        color: green;
        text-align: center;
    }
   
    button {
        padding: .6rem 1rem;
        border: none;
        border-radius: 3px;
        background-color: rgb(39, 0, 130);
        color: white;
        font-size: 1rem;

        :hover {
            opacity: .8;
            cursor: pointer;
        }
    }
`
