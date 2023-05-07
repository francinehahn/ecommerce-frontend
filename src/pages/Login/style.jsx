import styled from "styled-components"


export const Container = styled.section `
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8rem;
        margin-top: 8rem;

        div {
            display: flex;
            flex-direction: column;

            span {
                font-size: .875rem;
                color: red;
            }
        }

        p {
            font-size: .875rem;
            color: red;
        }

        button {
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 1rem;
            border-radius: 3px;
            width: 25rem;
            padding: .7rem 0;

            @media screen and (max-width: 800px) {
                width: 20rem;
            }
        }
    }

    #recover-pass {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
    }

    div {
        display: flex;
        justify-content: center;
        gap: .3rem;
        p, a {
            margin-top: 1rem;
        }
    }
`