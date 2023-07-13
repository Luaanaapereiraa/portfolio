import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
    }
to {
        opacity: 1;
        transform: translateY(0);
    }
`
export const ContainerSkills = styled.div<{ isActive?: boolean }>`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin: 0 auto;
    margin-bottom: 2rem;
    opacity: ${(props) => (props.isActive ? "3" : "0")};
    transform: translateY(${(props) => (props.isActive ? "0" : "20px")});
    transition: opacity 700ms, transform 700ms;
    animation: ${fadeIn}  700ms ease-in-out;


    @media (max-width: 768px) {
        margin-top: 10px;
    }

`
export const Grid = styled.div`
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4rem; 
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

`;

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        padding: 1rem;
        transition: background-color 0.3s ease-in-out;  
        &:hover {
        transform: scale(1.5);
        }
    }
    
    label {
        margin-top: 1rem;
        font-size: 1rem;
        color: ${(props) => props.theme['purple-300']};
        font-family: 'Roboto Mono', monospace;
    }
`;


export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 3rem;
    font-family: 'Roboto Mono', monospace;
    color: ${(props) => props.theme['purple-300']};
    text-align: center; 
    text-shadow: -1px -1px 0px  ${(props) => props.theme['white']}, 
                -1px 1px 0px  ${(props) => props.theme['purple-400']},                    
                1px -1px 0px ${(props) => props.theme['purple-400']},                  
                1px 0px 0px  ${(props) => props.theme['purple-400']};
                
    @media (max-width: 768px) {
    margin-bottom: 2rem;
    }

`;