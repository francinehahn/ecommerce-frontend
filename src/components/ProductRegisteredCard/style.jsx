import styled from "styled-components"


export const Product = styled.div `
    display: grid;
    grid-template-columns: 35% 55% 10%;
    gap: 1rem;
    border: 1px solid grey;
    border-radius: 3px;
    min-width: 22rem;
    min-height: 7rem;
    padding-right: 2rem;

    img {
        border-radius: 3px 0 0 3px;
        width: 100%;
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
            font-size: 1rem;
            line-height: 1.3rem;
        }

        p {
            font-size: .9rem;
            line-height: 2rem;
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