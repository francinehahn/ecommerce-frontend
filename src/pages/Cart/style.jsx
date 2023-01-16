import styled from "styled-components"

export const Container = styled.section `
    min-height: 58vh;
    margin-top: 6vh;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .8vw;
        min-height: 56vh;
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
    cursor: pointer;
    :hover {
        opacity: 0.85;
    }
`