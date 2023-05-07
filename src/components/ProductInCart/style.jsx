import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: .5rem 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid grey;
    gap: 2rem;
    width: 90vw;

    img {
        border-radius: 1px;
        width: 5rem;
    }

    svg {
        width: 1.4rem;
        height: 1.4rem;
        cursor: pointer;
        :hover {
            opacity: .5;
        }
    }
`

export const Units = styled.div `
    display: flex;
    border: 0.5px solid grey;
    height: 2.2rem;

    button {
        font-size: 1.1rem;
        padding: 0 .7rem;
        border: none;
        cursor: pointer;
    }

    p {
        font-size: 1rem;
        padding: .5rem;
    }
`