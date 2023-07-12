import styled from "styled-components";

export const ContainerSkills = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin: 0 auto;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        margin-top: 10px;
        max-height: 250px;
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
    }
`;


export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 3rem;
    margin-top: 3rem;
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