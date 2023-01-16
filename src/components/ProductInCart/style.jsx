import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
    border-bottom: 1px solid grey;
    margin-bottom: 5vh;

    @media screen and (min-width: 750px) {
        gap: 5vw;
        padding: 0 5vw;
    }
    @media screen and (min-width: 630px) and (max-width: 750px) {
        gap: 5vw;
        padding: 0 4vw;
    }
    @media screen and (max-width: 630px) {
        gap: 3vw;
        padding: 0 4vw;
    }

    img {
        margin-bottom: 1vh;
        border-radius: 1px;
        @media screen and (min-width: 1200px) {
            width: 5%;
        }
        @media screen and (min-width: 850px) and (max-width: 1200px) {
            width: 7%;
        }
        @media screen and (min-width: 680px) and (max-width: 850px) {
            width: 10%;
        }
        @media screen and (min-width: 500px) and (max-width: 680px) {
            width: 15%;
        }
        @media screen and (max-width: 500px) {
            width: 20%;
        }
    }

    p {
        margin-bottom: 1vh;
    }

    svg {
        width: 25px;
        height: 25px;
        margin-bottom: 1vh;
        cursor: pointer;
        :hover {
            opacity: .5;
        }
    }
`

export const Units = styled.div `
    display: flex;
    border: 0.5px solid grey;
    margin-bottom: 1vh;
    
    @media screen and (min-width: 1000px) {
        height: 5vh;
    }
    @media screen and (max-width: 1000px) {
        height: 4vh;
    }

    button {
        font-size: 18px;
        padding: 0 13px;
        border: none;
        cursor: pointer;
    }

    p {
        font-size: 16px;
        padding: 7px 11px;
        margin-bottom: 1vh;
    }
`