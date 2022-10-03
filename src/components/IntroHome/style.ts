import styled from "styled-components";

export const ContainerIntro = styled.div`
    width: 100%;
    height: 34rem;
    padding-left: 10rem;
    padding-right:  10rem;
    padding-bottom: 6.75rem;
    padding-top: 5.875rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const TextIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
`;

export const ImageIntro = styled.img`

`;

export const TitleIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    
    color: ${props => props.theme["base-title"]}; 
    }

    p {
        font-size: 1.25rem;
        color: ${props => props.theme["base-subtitle"]};
        line-height: 130%;
    }
`;

export const ItemsIntro = styled.div`

    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;


    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        p { 
            line-height: 130%;
            color: ${props => props.theme["base-text"]};
        }
    }
`;

export const DivInline = styled.div`
    display: block;
    gap: 2.5rem;

    :first-child {
        margin-bottom: 1.25rem;
        
    }
`;


export const IconCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;

    width: 2rem;
    height: 2rem;

    background: #C47F17;
    border-radius: 1000px;
`;

export const IconPackage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-left: 0.43rem;

    width: 2rem;
    height: 2rem;

    background: ${props => props.theme["base-text"]};
    border-radius: 1000px;
`;

export const IconTimer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;

    width: 2rem;
    height: 2rem;

    background: ${props => props.theme["yellow"]};
    border-radius: 1000px;
`;

export const IconCoffe = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;

    width: 2rem;
    height: 2rem;

    background: ${props => props.theme["purple"]};
    border-radius: 1000px;
`;


