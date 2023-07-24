import styled from "styled-components"


export const Product = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    padding-bottom: 1rem;
    height: 17rem;
    width: 13rem;
    
    @media screen and (max-width: 600px) {
        height: 14.5rem;
        width: 10.5rem;
    }

    div {
        img {
            width: 100%;
            height: 8rem;
            border-radius: 3px 3px 0 0;

            @media screen and (max-width: 600px) {
                height: 6rem;
            }
        }
        h3 {
            font-size: .9rem;
            text-align: center;
            padding: .5rem .75rem 0 .75rem;

            @media screen and (max-width: 650px) {
                font-size: .8rem;
                padding: .5rem .6rem 0 .6rem;
            }
        }
        p {
            font-size: .9rem;
            line-height: 2rem;
            text-align: center;
            padding: 0 .75rem;

            @media screen and (max-width: 650px) {
                font-size: .8rem;
                padding: 0 .6rem;
            }
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .8rem;
        margin: 0 auto;
        border-radius: 3px;
        padding: .625rem 1.25rem;
        color: black;
        background-color: #f1f1f1;
        border: none;
        cursor: pointer;

        :hover {
            opacity: .8;
        }
        :active {
            transform: scale(0.97);
        }

        @media screen and (max-width: 650px) {
            font-size: .6rem;
        }

        svg {
            width: 1rem;
            height: 1rem;
            color: #505050;
        }
    }
`