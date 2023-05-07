import styled from "styled-components"


export const FormContainer = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    h3 {
        font-size: 1.75rem;
        text-align: center;
        
        @media screen and (max-width: 800px) {
            font-size: 1.5rem;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: .4rem;

        div {
            display: flex;
            flex-direction: column;
            gap: .2rem;

            p {
                font-size: .875rem;
                color: red;
                width: 25rem;

                @media screen and (max-width: 800px) {
                    width: 20rem;
                }
            }
        }

        p {
            color: green;
        }

        button {
            border: none;
            border-radius: 3px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 1rem;
            padding: .7rem 0;
            width: 25rem;

            @media screen and (max-width: 800px) {
                width: 20rem;
            }
        }
    }
`