import styled from "styled-components"


export const Product = styled.div `
    display: grid;
    grid-template-columns: 35% 55% 10%;
    border: 1px solid grey;
    border-radius: 3px;
    min-width: 17.5rem;
    max-width: 25rem;

    img {
        border-radius: 3px 0 0 3px;
        width: 100%;
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1vw;

        h4 {
            font-size: 1rem;
            line-height: 2rem;
        }

        p {
            font-size: .9rem;
            text-align: left;
        }
    }

    svg {
        margin: auto 0;
        height: 1.1rem;
        width: 1.1rem;
        display: block;
        :hover {
            opacity: .5;
            cursor: pointer;
        }
    }
`