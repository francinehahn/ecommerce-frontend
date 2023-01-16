import styled from "styled-components"


export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4vh;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f1f1f1;
    z-index: 5000;
    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        input {
            border: none;
            font-size: 16px;
            padding: 1vh;
            :focus {
                outline: none;
            }
            @media screen and (min-width: 1200px) {
                width: 30vw;
            }
            @media screen and (min-width: 1000px) and (max-width: 1200px) {
                width: 35vw;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                width: 45vw;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: 60vw;
            }
            @media screen and (max-width: 600px) {
                width: 80vw;
            }
        }
    }

    p {
        font-size: 16px;
        color: green;
        text-align: center;
    }
    div {
        display: flex;
        gap: 1vw;
        button {
            border: none;
            border-radius: 5px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 16px;
            margin-top: 2vh;
            :hover {
                opacity: .8;
                cursor: pointer;
            }
            @media screen and (min-width: 1200px) {
                padding: 1.4vh 1.2vw;
            }
            @media screen and (min-width: 900px) and (max-width: 1200px) {
                padding: 1.4vh 1.5vw;
            }
            @media screen and (min-width: 600px) and (max-width: 900px) {
                padding: 1.4vh 2.5vw;
            }
            @media screen and (max-width: 600px) {
                padding: 1.4vh 3.5vw;
            }
        }
    }
`

export const PasswordInput = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    @media screen and (min-width: 1200px) {
        width: 30vw;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
        width: 35vw;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        width: 45vw;
    }
    @media screen and (min-width: 600px) and (max-width: 800px) {
        width: 60vw;
    }
    @media screen and (max-width: 600px) {
        width: 80vw;
    }
    input {
        border: none;
        margin-left: -.5vw;
    }
    svg {
        color: #515151;
        height: 20px;
        width: 20px;
        @media screen and (min-width: 1200px) {
            margin-left: -3vw;
        }
        @media screen and (min-width: 969px) and (max-width: 1200px) {
            margin-left: -3.5vw;
        }
        @media screen and (min-width: 800px) and (max-width: 969px) {
            margin-left: -4.5vw;
        }
        @media screen and (min-width: 660px) and (max-width: 800px) {
            margin-left: -5vw;
        }
        @media screen and (min-width: 570px) and (max-width: 660px) {
            margin-left: -5.5vw;
        }
        @media screen and (min-width: 500px) and (max-width: 570px) {
            margin-left: -6vw;
        }
        @media screen and (min-width: 450px) and (max-width: 500px) {
            margin-left: -6.5vw;
        }
        @media screen and (max-width: 450px) {
            margin-left: -7.5vw;
        }
        :hover {
            opacity: .7;
            cursor: pointer;
        }
    }
`