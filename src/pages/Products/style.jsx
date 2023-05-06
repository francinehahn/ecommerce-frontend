import styled from "styled-components"

export const Container = styled.main `
    min-height: 71vh;
    overflow-x: hidden;
    margin: 2rem 0;
    
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5rem;
        padding: 0 2rem;
        margin-bottom: 2rem;

        @media screen and (max-width: 1000px) {
            gap: 2rem;
        }
        @media screen and (max-width: 700px) {
            gap: 1rem;
        }

        select {
            :focus {
                outline: none;
            }
        }

        div {
            display: flex;
            align-items: center;
            gap: 1rem;
            label {
                font-size: 1rem;
            }
            select {
                padding: .5rem 1rem;
            }
        }
    }

    #banner_desktop {
        width: 100vw;
        @media screen and (max-width: 850px) {
            display: none;
        }
    }

    #banner_mobile {
        width: 100vw;
        @media screen and (min-width: 850px) {
            display: none;
        }
    }

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 4rem;
        gap: 2.5rem;

        @media screen and (max-width: 700px) {
            margin: 2rem;
            gap: 1rem;
        }
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        p {
            font-size: 1.13rem;
        }
        svg {
            width: 1.25rem;
            min-height: 1.25rem;
            :hover {
                opacity: .5;
                cursor: pointer;
            }
        }
    }
`