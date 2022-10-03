import styled from "styled-components";

export const Container = styled.div`
    padding-right: 10rem;
    padding-left: 10rem;
    padding-top: 2rem;
    padding-bottom: 10rem;

    h1 {
        font-family: 'Baloo 2';
        font-size: 2rem;
        color: ${props => props.theme["base-subtitle"]};
        margin-bottom: 2rem;
    }
`;

export const CoffeListContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    flex: 1;

    row-gap: 2rem;
    column-gap: 2.5rem;
`;