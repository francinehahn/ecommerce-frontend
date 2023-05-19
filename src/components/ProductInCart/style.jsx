import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: .5rem 10rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid lightgrey;
    width: 75vw;

    @media screen and (max-width: 1380px) {
        padding: .5rem 5rem;
    }

    @media screen and (max-width: 1100px) {
        padding: .5rem 3rem;
        width: 85vw;
    }

    @media screen and (max-width: 850px) {
        padding: .5rem 1rem;
        width: 95vw;
    }

    img {
        border-radius: 3px;
        width: 10rem;

        @media screen and (max-width: 550px) {
            width: 8.5rem;
        }
    }

    svg {
        width: 1.2rem;
        height: 1.2rem;
        color: #686868;
        cursor: pointer;
        :hover {
            opacity: .5;
        }
    }
`

export const Price = styled.p `
    font-weight: 600;

    @media screen and (max-width: 500px) {
        margin: 1rem auto;
    }
`

export const ProductInfo = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    width: 20rem;

    @media screen and (max-width: 680px) {
        width: 13rem;
    }

    @media screen and (max-width: 480px) {
        width: 11rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
`

export const Units = styled.span `
    display: flex;
    align-items: center;
    gap: .5rem;
    border: 0.5px solid lightgrey;
    border-radius: 3px;
    height: 1.9rem;

    button {
        font-size: 1.1rem;
        height: 100%;
        width: 1.7rem;
        border: none;
        cursor: pointer;
    }

    p {
        font-size: .8rem;

        @media screen and (max-width: 550px) {
            font-size: .7rem;
        }
    }
`