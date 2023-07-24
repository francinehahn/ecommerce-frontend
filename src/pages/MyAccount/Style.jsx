import styled from "styled-components"

export const Container = styled.div `
    min-height: 73vh;
    margin: 3.5rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    overflow-x: hidden;

    @media screen and (max-width: 800px) {
        margin: 3.5rem 2rem;
    }

    h3 {
        text-align: center;
        margin-bottom: 1rem;
        line-height: 2rem;
        font-size: 1.2rem;

        @media screen and (max-width: 800px) {
            font-size: 1rem;
        }
    }
`

export const PersonalInfo = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100vw;

    span {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 1rem;

        h2 {
            text-align: center;
            font-size: 1.2rem;

            @media screen and (max-width: 600px) {
                font-size: .8rem;
            }
        }
        
        svg {
            width: 1.25rem;
            height: 1.25rem;
            :hover {
                opacity: .5;
                cursor: pointer;
            }
        }
    }

    div {
        div {
            display: flex;
            justify-content: center;
            gap: .5rem;

            p {
                font-size: 1rem;
                line-height: 1.5rem;

                @media screen and (max-width: 600px) {
                    font-size: .8rem;
                }
            }
        }
    }
`

export const PurchasesSection = styled.section `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductsRegisteredSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        svg {
            width: 1.875rem;
            height: 1.875rem;
            color: green;
            margin-bottom: 1rem;
            :hover {
                opacity: .5;
                cursor: pointer;
            }
        }
    }
`

export const SalesSection = styled.section `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CarouselWrapper = styled.div `
    display: flex;
    gap: 1rem;
    width: 90vw;

    button {
        @media screen and (max-width: 900px) {
            display: none;
        }

        @media screen and (min-width: 900px) {
            border-radius: 5px;
            padding: .5rem;
            background: linear-gradient(90deg, #e5e4e4, #e8e8e8);
            opacity: .3;

            :hover {
                opacity: .7;
            }

            svg {
                height: 2rem;
                width: 2rem;
                color: #989797;
            }
        }
    }
`

export const Carousel = styled.div `
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }
`
