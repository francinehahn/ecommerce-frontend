import styled from "styled-components"


export const Product = styled.div `
    display: flex;
    flex-direction: column;
    padding: 0 0 25px 0;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.30);

    @media screen and (min-width: 1130px) {
        height: 360px;
        width: 230px;
    }
    @media screen and (min-width: 910px) and (max-width: 1130px) {
        height: 330px;
        width: 250px;
    }
    @media screen and (min-width: 800px) and (max-width: 910px) {
        height: 38vh;
        width: 35vw;
    }
    @media screen and (min-width: 600px) and (max-width: 800px) {
        height: 42vh;
        width: 40vw;
    }
    @media screen and (min-width: 480px) and (max-width: 600px) {
        height: 48vh;
        width: 60vw;
    }
    @media screen and (max-width: 480px) {
        height: 45vh;
        width: 75vw;
    }

    h3 {
        text-align: center;
        font-size: 18px;
        margin-top: 20px;
        padding: 0 12px;
    }
    p {
        text-align: center;
        font-size: 16px;
        margin: 15px 0;
    }
    button {
        font-size: 16px;
        margin: 0 auto;
        border-radius: 5px;
        padding: 10px 20px;
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
    img {
        width: 100%;
        height: 22vh;
    }
`