import styled from "styled-components"

export const Container = styled.div `
    overflow-y: none;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        height: 55vh;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 12px;
            background-color: #ffffff;

            @media screen and (max-width: 800px) {
                width: 5px;
            }
        }
        ::-webkit-scrollbar-track {
            background: #d7d7d7;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #acacac;
            border-radius: 20px;
        }

        @media screen and (max-width: 800px) {
            height: 60vh;
        }

        @media screen and (max-width: 380px) {
            height: 48vh;
        }
    }

    footer {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
    }
`

export const TotalPrice = styled.p `
    color: green;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1rem 0;
    text-align: center;
`

export const EmptyCart = styled.span `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    height: 70vh;
    
    p {
        font-size: 1.25rem;
    }

    svg {
        height: 2.5rem;
        width: 2.5rem;
    }
`

export const Button = styled.button `
    background-color: rgb(39, 0, 130);
    font-size: 1rem;
    color: white;
    padding: .8rem 0;
    border-radius: 3px;
    width: 13rem;

    position: absolute;
    bottom: 14vh;
    right: 0;
    left: 0;
    margin: 0 auto;

    @media screen and (max-width: 380px) {
        bottom: 18vh;
    }

    @media screen and (max-width: 300px) {
        bottom: 24vh;
    }
`