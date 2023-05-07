import styled from "styled-components"

export const Container = styled.div `
    min-height: 73vh;
    margin: 3.5rem 5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media screen and (max-width: 800px) {
        margin: 3.5rem 2rem;
    }

    h3 {
        text-align: center;
        margin-bottom: 1rem;
        line-height: 2rem;
        font-size: 1.5rem;

        @media screen and (max-width: 800px) {
            font-size: 1.2rem;
        }
    }
`

export const PersonalInfo = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    span {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 1rem;

        h2 {
            text-align: center;
            font-size: 1.5rem;

            @media screen and (max-width: 800px) {
                font-size: 1.2rem;
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
                text-align: center;
                line-height: 2rem;
                font-size: 1rem;
            }
        }
    }
`

export const Purchases = styled.section `
    #purchases {
        display: flex;
        gap: 1rem;
        padding-bottom: 1rem;
        overflow-x: auto;

        ::-webkit-scrollbar {
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #eeeeee;
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #cdcdcd;
            border-radius: 20px;
        }
    }
`

export const ProductsRegistered = styled.section `
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

    #productsRegistered {
        display: flex;
        gap: 1rem;
        padding-bottom: 1rem;
        overflow-x: auto;

        ::-webkit-scrollbar {
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #eeeeee;
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #cdcdcd;
            border-radius: 20px;
        }
    }
`

export const Sales = styled.section `
    p {
        text-align: center;
    }

    #sales {
        display: flex;
        gap: 1rem;
        padding-bottom: 1rem;
        overflow-x: auto;

        ::-webkit-scrollbar {
            height: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #eeeeee;
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #cdcdcd;
            border-radius: 20px;
        }
    }
`
