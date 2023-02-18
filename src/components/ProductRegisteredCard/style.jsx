import styled from "styled-components"


export const Product = styled.div `
    display: grid;
    grid-template-columns: 35% 55% 10%;
    border: 1px solid grey;
    border-radius: 5px;
    min-width: 280px;
    max-width: 400px;

    img {
        border-radius: 5px 0 0 5px;
        width: 100%;
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1vw;
        h4 {
            font-size: 16px;
            line-height: 4vh;
        }
        p {
            font-size: 16px;
            text-align: left;
        }
    }

    svg {
        margin: auto 1vw auto 0;
        height: 18px;
        width: 18px;
        display: block;
        :hover {
            opacity: .5;
            cursor: pointer;
        }
    }
`