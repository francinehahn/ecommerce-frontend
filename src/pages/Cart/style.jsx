import styled from "styled-components"

export const Container = styled.section `
    margin-top: 6vh;

    @media screen and (min-width: 1000px) {
        min-height: 58vh;
    }
    @media screen and (max-width: 1000px) {
        min-height: 54vh;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .8vw;

        @media screen and (min-width: 1000px) {
            padding: 30vh 0 37vh 0;
        }
        @media screen and (max-width: 1000px) {
            padding: 28vh 0 35vh 0;
        }

        p {
            font-size: 20px;
        }
        
        svg {
            height: 40px;
            width: 40px;
        }
    }

    p {
        text-align: center;
    }

    #totalPrice {
        color: red;
        font-size: 18px;
        font-weight: 500;
    }
`

export const Button = styled.button `
    display: block;
    margin: 5vh auto 4vh auto;
    background-color: rgb(39, 0, 130);
    font-size: 16px;
    color: white;
    padding: 1.5vh;
    border: none;
    border-radius: 2px;
    :hover {
        opacity: 0.85;
        cursor: pointer;
    }
`