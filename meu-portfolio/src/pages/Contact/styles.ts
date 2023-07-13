import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(50px);
    }
to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const ContainerContact = styled.div<{ isActive?: boolean }>`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem; 
    margin-bottom: 2rem;
    padding: 1rem;
    margin: 0 auto;

    opacity: ${(props) => (props.isActive ? "1" : "0")};
    transform: translateY(${(props) => (props.isActive ? "0" : "20px")});
    transition: opacity 500ms, transform 500ms;
    animation: ${fadeIn}  700ms ease-in-out;

    
    @media (max-width: 768px) {
        margin-top: 50px;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    margin-top: 3rem;
    color: ${(props) => props.theme['purple-300']};
    text-align: center;
    font-family: 'Roboto Mono', monospace;

    text-shadow: 
                -1px -1px 0px  ${(props) => props.theme['white']}, 
                -1px 1px 0px  ${(props) => props.theme['purple-400']},                    
                1px -1px 0px ${(props) => props.theme['purple-400']},                  
                1px 0px 0px  ${(props) => props.theme['purple-400']};

  

`;

export const PurpleText = styled.p`
font-size: 1.1rem;
    font-family: 'Roboto Mono', monospace;
    color: ${(props) => props.theme['purple-400']};

`;

export const LinkIcon = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0.5;
&:hover {
    color: ${(props) => props.theme['purple-300']};
    transform: scale(1.1);
    }
`;

export const IconStyle = styled.div`
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin-top: 2rem;
    padding: 1rem;
    transition: background-color 0.3s ease-in-out;  
    
`;

export const EmailStyle = styled.div`
    border-color: ${(props) => props.theme['purple-400']};
    border-style: solid;
    border-width: 1px;
    padding: 1rem;
    transition: background-color 0.3s ease-in-out;
    border-radius: 0.5rem;
    p{
        
        font-family: 'Roboto Mono', monospace;
        
    }
`;

export const LinkedinStyle = styled.div`
    border-color: ${(props) => props.theme['purple-400']};
    border-style: solid;
    border-width: 1px;
    padding: 1rem;
    transition: background-color 0.3s ease-in-out;
    border-radius: 0.5rem;
    display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;

    p{
        
        font-family: 'Roboto Mono', monospace;
        
    }
`;