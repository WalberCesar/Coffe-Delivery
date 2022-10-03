import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.75rem;

    width: 23rem;
    height: 5.75rem;
    
`;



export const ValueTotalItens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
    width: 100%;

    P{
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
    }
`;

export const ValueFrete = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    

    P{
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
    }
`;

export const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;

    P{
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme["base-subtitle"]};
    }
`;  

