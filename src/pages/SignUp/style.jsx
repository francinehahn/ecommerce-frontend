import styled from "styled-components"


export const Container = styled.section `
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .7rem;
        margin-top: 5rem;

        div {
            display: flex;
            flex-direction: column;
            gap: .3rem;

            p {
                font-size: .875rem;
                color: red;
                width: 25rem;

                @media screen and (max-width: 800px) {
                    width: 20rem;
                }
            }
        }

        button {
            font-size: 1rem;
            border: none;
            border-radius: 3px;
            background-color: rgb(39, 0, 130);
            color: white;
            width: 25rem;
            padding: .7rem 0;

            @media screen and (max-width: 800px) {
                width: 20rem;
            }
        }

        #successMessage {
            color: green;
        }

        #axiosError {
            color: red;
        }
    }
`