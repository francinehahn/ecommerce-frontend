import styled from "styled-components"

export const Container = styled.section `
    min-height: 73vh;
    margin-bottom: 8vh;
`

export const PersonalInfo = styled.section `
    span {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 2vw;
        margin: 0 2vw;

        h2 {
            text-align: center;
            margin: 8vh 0 4vh 0;
        }
        
        svg {
            width: 20px;
            height: 20px;
            :hover {
                opacity: .5;
                cursor: pointer;
            }
        }
    }

    div {
        display: flex;
        justify-content: center;
        gap: .5vw;
        p {
            text-align: center;
            line-height: 4vh;
        }
    }
`

export const PurchasesAndSales = styled.section `
    margin: 0 5vw;
    display: flex;
    flex-direction: column;

    h3 {
        text-align: center;
        margin: 6vh 0 2vh 0;
        line-height: 4vh;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2vw;
        margin-top: 5vh;
        h3 {
            text-align: center;
            margin: 4vh 0 2vh 0;
            line-height: 4vh;
        }
        svg {
            width: 30px;
            height: 30px;
            margin-top: 2vh;
            color: green;
            :hover {
                opacity: .5;
                cursor: pointer;
            }
        }
    }

    section {
        display: flex;
        padding-bottom: 1vh;
        overflow-x: auto;
        @media screen and (min-width: 1000px) {
            gap: 1vw;
        }
        @media screen and (max-width: 1000px) {
            gap: 4vw;
        }

        ::-webkit-scrollbar {
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #E2E2E2;
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #c2c2c2;
            border-radius: 20px;
        }
    }

    p {
        text-align: center;
    }
`
