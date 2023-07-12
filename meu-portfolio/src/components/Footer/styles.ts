import styled from "styled-components";


export const ContainerFooter = styled.div`
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center
    p{
        font-size: 1rem;
        color: ${(props) => props.theme['gray-100']};
    }
`;