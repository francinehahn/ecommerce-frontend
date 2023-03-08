import styled from "styled-components"


export const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
        margin: 8vh 0 2vh 0;
    }

    form {
        display: flex;
        gap: .5vw;
        margin-top: 3vh;

        button {
            border: none;
            border-radius: 5px;
            background-color: rgb(39, 0, 130);
            color: white;
            font-size: 16px;
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

    #error {
        color: red;
        margin-top: 2vh;
        font-size: 14px;
    }

    #success {
        color: green;
        margin-top: 2vh;
        font-size: 14px;
    }
`