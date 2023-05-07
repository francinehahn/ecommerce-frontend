import styled from "styled-components"


export const Product = styled.div `
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.30);

    @media screen and (min-width: 1130px) {
        height: 22.5rem;
        width: 14.375rem;
    }
    @media screen and (max-width: 1130px) {
        height: 22rem;
        width: 15.7rem;
    }

    img {
        width: 100%;
        height: 10rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8rem;
        padding: 1.5rem .75rem;

        h3 {
            font-size: 1.125rem;
            text-align: center;
        }

        p {
            font-size: 1rem;
            text-align: center;
        }

        button {
            font-size: 1rem;
            margin: 0 auto;
            border-radius: 3px;
            padding: .625rem 1.25rem;
            color: white;
            background-color: rgb(39, 0, 130);
            border: none;
            cursor: pointer;

            :hover {
                background-color: rgba(39, 0, 130, 0.81);
            }
            :active {
                transform: scale(0.97);
            }
        }
    }
`