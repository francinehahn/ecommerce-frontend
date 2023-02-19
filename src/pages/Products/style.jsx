import styled from "styled-components"

export const Container = styled.main `
    min-height: 71vh;
    
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5vw;
        padding: 0 2vw;

        @media screen and (min-width: 700px) {
            margin-top: 8vh;
        }
        @media screen and (max-width: 700px) {
            margin-top: 6vh;
        }

        input {
            padding: 1vh 1vw;
            :focus {
                outline: none;
            }
            @media screen and (min-width: 1280px) {
                width: 35vw;
            }
            @media screen and (min-width: 900px) and (max-width: 1280px) {
                width: 45vw;
            }
            @media screen and (min-width: 600px) and (max-width: 900px) {
                width: 55vw;
            }
            @media screen and (max-width: 600px) {
                width: 85vw;
            }
        }

        select {
            :focus {
                outline: none;
            }
        }

        div {
            display: flex;
            align-items: center;
            gap: 1vw;
            label {
                font-size: 16px;
            }
            select {
                padding: 1vh 1.1vw;
            }
        }
    }

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        @media screen and (min-width: 700px) {
            margin: 8vh 4vw 6vh 4vw;
            gap: 3vw;
        }
        @media screen and (max-width: 700px) {
            margin: 4vh 4vw 4vh 4vw;
            gap: 6vw;
        }
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 6vh;
        gap: 1vw;
        p {
            font-size: 18px;
        }
        svg {
            width: 20px;
            min-height: 20px;
            :hover {
                opacity: .5;
                cursor: pointer;
            }
        }
    }
`