import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: .5rem;
    min-width: 19rem;

    p {
        font-size: .9rem;
        line-height: 1.5rem;

        @media screen and (max-width: 600px) {
            font-size: .75rem;
        }
    }
`