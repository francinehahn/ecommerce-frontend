import styled from "styled-components"


export const Container = styled.section `
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        margin-top: 15vh;

        div {
            display: flex;
            flex-direction: column;
            gap: .5vh;
            span {
                font-size: 14px;
                color: red;
            }
        }

        p {
            font-size: 14px;
            color: red;
        }

        button {
            border: none;
            border-radius: 5px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 16px;
            margin-top: 4vh;
            
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

    #recover-pass {
        display: flex;
        justify-content: center;
        margin-top: 5vh;
    }

    div {
        display: flex;
        justify-content: center;
        gap: .5vw;
        p, a {
            margin-top: 3vh;
        }
    }
`

export const PasswordInput = styled.span `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border: 1px solid grey;
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
    }

    svg {
        color: #515151;
        height: 20px;
        width: 20px;
        @media screen and (min-width: 1100px) {
            margin: .5vh .5vw;
        }
        @media screen and (min-width: 500px) and (max-width: 1100px) {
            margin: .5vh 1vw;
        }
        @media screen and (max-width: 500px) {
            margin: .5vh 1.5vw;
        }
        :hover {
            opacity: .7;
            cursor: pointer;
        }
    }
`