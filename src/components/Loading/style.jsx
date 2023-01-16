import styled from "styled-components"


export const LoadingSection = styled.div `
    height: ${props => props.bgcolor === "purple"? '40px' : '20px'};
    width: ${props => props.bgcolor === "purple"? '40px' : '20px'};
    border-radius: 50%;
    border: ${props => props.bgcolor === "purple"? '6px solid rgb(39, 0, 130)' : '3px solid #fff'};
    border-bottom: ${props => props.bgcolor === "purple"? '6px solid #fff': '3px solid rgb(39, 0, 130)'};
    display: block;
    margin: ${props => props.bgcolor === "purple"? '24vh' : '0'} auto;
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1s infinite;
`