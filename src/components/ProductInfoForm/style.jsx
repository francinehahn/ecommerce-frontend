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
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .3rem;

        input {
            border: none;
            border-radius: 3px;
            font-size: 1rem;
            padding: .5rem;
            
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

    span {
        display: flex;
        gap: 2rem;
        margin-top: -.5rem;

        button {
            border: none;
            border-radius: 3px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 1rem;
            padding: .5rem 1rem;

            :hover {
                opacity: .8;
                cursor: pointer;
            }
        }
    }
`