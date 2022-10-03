import styled from "styled-components";

export const ContainerHeader = styled.header`
    width: 100vw;
    height: 6,5rem;
    padding: 2rem 10rem;
    background: ${({theme}) => theme.background};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
`;

export const RightHeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 0.8rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 143px;
        height: 38px;

        background-color: ${props => props.theme['purple-light']};
        border-radius: 6px;

        padding: 0.5rem;
        gap: 0.25rem;

    }
`;

export const ShoppingCartButton = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    
    width: 2.375rem;
    height: 2.375rem;

    padding: 0.5rem;
    border-radius: 6px;
    border: none;



    background-color: ${props => props.theme["yellow-light"]};
`;

export const Counter = styled.button`
:not(:disabled){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;

    width: 1.25rem;
    height: 1.25rem;

    margin-left: 2.25rem;
    margin-bottom: 2.25rem;

    background: ${props => props.theme["yellow-dark"]};
    border-radius: 1000px;
    border: none;
}

    p {
        font-weight: 700;
        font-size: 12px;
        text-align: center;

        text-align: center;
        letter-spacing: -0.06em;
        color: ${props => props.theme.white}; 
    }

    
`;