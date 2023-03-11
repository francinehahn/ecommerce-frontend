import styled from "styled-components"

export const Container = styled.main `
    min-height: 71vh;
    overflow-x: hidden;
    
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5vw;
        padding: 0 2vw;

        @media screen and (min-width: 700px) {
            margin-top: 6vh;
        }
        @media screen and (max-width: 700px) {
            margin-top: 4vh;
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

    #banner_desktop {
        @media screen and (min-width: 850px) {
            width: 100vw;
            margin-top: 5vh;
        }
        @media screen and (max-width: 850px) {
            display: none;
        }
    }

    #banner_mobile {
        @media screen and (min-width: 850px) {
            display: none;
        }
        @media screen and (max-width: 850px) {
            width: 100vw;
            margin-top: 4vh;
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