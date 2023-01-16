import styled from "styled-components"


export const HeaderSection = styled.header `
    background-color: rgb(39, 0, 130);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: sticky;
    top: 0;

    img {
        @media screen and (min-width: 1280px) {
            width: 14%;
        }
        @media screen and (min-width: 980px) and (max-width: 1280px) {
            width: 17%;
            margin: 0 2vw 0 2vw;
        }
        @media screen and (min-width: 800px) and (max-width: 980px) {
            width: 28%;
            margin-right: 6vw;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 30%;
            margin-right: 5vw;
        }
        @media screen and (min-width: 500px) and (max-width: 600px) {
            width: 40%;
            margin-right: 5vw;
        }
        @media screen and (max-width: 500px) {
            width: 47%;
            margin-right: 5vw;
        }
    }
`

export const NavDesktop = styled.nav `    
    @media screen and (min-width: 600px) {
        display: flex;
        gap: 4vw;
        a {
            font-size: 14px;
            color: white;
            text-decoration: none;
            :hover {
                color: lightgray;
            }
        }

        span {
            display: flex;
            align-items: center;
            gap: .5vw;
            svg {
                color: white;
                height: 20px;
                width: 20px;
            }
            p {
                font-size: 14px;
                background-color: white;
                padding: 0 5px;
                margin: -17px 0 0 -8px;
                border-radius: 50%;
            }
        }   
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const NavMobile = styled.nav `
    background-color: rgb(39, 0, 130);
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    button {
        margin: 1.7vh 0 4vh 80vw;
        padding: 5px 11px;
        border-radius: 4px;
        font-size: 16px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
            font-size: 18px;
            line-height: 6vh;
            color: white;
            text-decoration: none;
        }

        span {
            display: flex;
            align-items: center;
            gap: .5vw;
            svg {
                color: white;
                height: 30px;
                width: 30px;
            }
            p {
                font-size: 16px;
                background-color: white;
                padding: 0 6px;
                margin: -25px 0 0 -5px;
                border-radius: 50%;
            }
        }
    }   
`

export const MobileSymbol = styled.div `
    @media screen and (min-width: 600px) {
        display: none;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
        div {
            background-color: white;
            width: 35px;
            height: 5px;
            border-radius: 4px;
        }
    }
`