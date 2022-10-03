import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 10rem;
    
    width: 100%;
    height: 100vh;

    background: ${props => props.theme.background};
`;

export const Image = styled.img`
    width: 30.75rem;
    height: 18.3rem;
    
    margin-top: 6rem;
`;

export const ContainerItens = styled.div`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.p`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${props => props.theme["yellow-dark"]};
`;

export const SubTitle = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    margin-bottom: 2.5rem;

    color: ${props => props.theme["base-subtitle"]};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    position: absolute;
    width: 526px;
    height: 270px;

    border-radius: 6px 36px;

    border: 1px solid black;
`;