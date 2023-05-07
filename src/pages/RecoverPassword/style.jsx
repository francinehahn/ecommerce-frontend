import styled from "styled-components"


export const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 2rem;
    gap: 1rem;

    @media screen and (max-width: 640px) {
        align-items: flex-start;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;

        button {
            border: none;
            border-radius: 3px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 1rem;
            padding: 0 1rem;

            @media screen and (max-width: 570px) {
                padding: .7rem 1rem;
            }

            :hover {
                opacity: .8;
                cursor: pointer;
            }
        }
    }

    #error {
        color: red;
        margin-top: .5rem;
        font-size: .875rem;
    }

    #success {
        color: green;
        margin-top: .5rem;
        font-size: .875rem;
    }
`