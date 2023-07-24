import styled from "styled-components"


export const Product = styled.div `
    display: grid;
    grid-template-columns: 35% 55% 10%;
    gap: 1rem;
    border: 1px solid lightgrey;
    border-radius: 3px;
    min-width: 20rem;
    height: 6rem;
    padding-right: 2rem;

    img {
        border-radius: 3px 0 0 3px;
        width: 6rem;
        height: 6rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
            font-size: .9rem;
            line-height: 1.3rem;

            @media screen and (max-width: 600px) {
                font-size: .8rem;
            }
        }

        p {
            font-size: .9rem;
            line-height: 2rem;
            text-align: left;

            @media screen and (max-width: 600px) {
                font-size: .8rem;
            }
        }
    }

    svg {
        margin: auto 0;
        height: 1rem;
        width: 1rem;
        display: block;
        :hover {
            opacity: .5;
            cursor: pointer;
        }
    }
`