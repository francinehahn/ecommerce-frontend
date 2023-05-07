import styled from "styled-components"


export const HeaderSection = styled.header `
    background-color: rgb(39, 0, 130);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    top: 0;

    img {
        width: 12rem;
        padding: .2rem 0;
    }
`

export const NavDesktop = styled.nav `    
    @media screen and (min-width: 600px) {
        display: flex;
        gap: 2.5rem;

        a {
            font-size: .875rem;
            color: white;
            text-decoration: none;
            :hover {
                color: lightgray;
            }
        }

        span {
            display: flex;
            align-items: center;
            gap: .5rem;

            svg {
                color: white;
                height: 1.25rem;
                width: 1.25rem;
            }

            p {
                font-size: .7rem;
                background-color: white;
                padding: .1rem .35rem;
                margin: -1rem 0 0 -.5rem;
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
        margin: 1.2rem 0 2rem 80vw;
        padding: .4rem .8rem;
        border-radius: 4px;
        font-size: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            font-size: 1.125rem;
            line-height: 3rem;
            color: white;
            text-decoration: none;
        }

        span {
            display: flex;
            align-items: center;
            gap: .4rem;

            svg {
                color: white;
                height: 1.875rem;
                width: 1.875rem;
            }

            p {
                font-size: 1rem;
                background-color: white;
                padding: .15rem .5rem;
                margin: -1.5rem 0 0 -.1rem;
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
        gap: .285rem;

        div {
            background-color: white;
            width: 2.187rem;
            height: .26rem;
            border-radius: .25rem;
        }
    }
`