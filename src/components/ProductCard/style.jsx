import styled from "styled-components"


export const Product = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    padding-bottom: 1rem;

    @media screen and (min-width: 1130px) {
        height: 21rem;
        width: 14.375rem;
    }
    @media screen and (max-width: 1130px) {
        height: 20rem;
        width: 16rem;
    }
    @media screen and (max-width: 600px) {
        height: 16rem;
        width: 10.5rem;
    }

    div {
        img {
            width: 100%;
            height: 10rem;
            border-radius: 3px 3px 0 0;

            @media screen and (max-width: 600px) {
                height: 7rem;
            }
        }
        h3 {
            font-size: 1rem;
            text-align: center;
            padding: 1rem .75rem 0 .75rem;

            @media screen and (max-width: 650px) {
                font-size: .8rem;
                padding: .5rem .6rem 0 .6rem;
            }
        }
        p {
            font-size: 1rem;
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
        font-size: 1rem;
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
            font-size: .8rem;
        }
    }
`