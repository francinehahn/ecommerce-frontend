import styled from "styled-components";

export const Container = styled.div `
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 4rem;
    padding: 0 1rem;

    ::-webkit-scrollbar{
        background-color: transparent;
    }

    @media screen and (max-width: 680px) {
        margin-top: 3rem;
    }
`

export const ScrollableArea = styled.div `
    display: flex;
    justify-content: center;
    min-width: 100vw;

    @media screen and (max-width: 1000px) {
        justify-content: flex-start;
    }

    span {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: 1rem;
        min-height: 3rem;
        min-width: 18rem;

        @media screen and (max-width: 1300px) {
            min-height: 3rem;
            min-width: 15rem;
        }

        svg {
            height: 2.5rem;
            width: 2.5rem;
            color: #009a2c;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: .5rem;

            h4 {
                font-size: 1.2rem;
                @media screen and (max-width: 1300px) {
                    font-size: 1rem;
                }
            }
            p {
                font-size: 1rem;
                @media screen and (max-width: 1300px) {
                    font-size: .875rem;
                }
            }
        }
    }
`