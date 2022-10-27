import styled from "styled-components";

export const ContainerCoffeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;

  width: 16rem;
  /* height: 19.4rem; */
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
`;

export const CoffeImgLogo = styled.img`
  margin-bottom: 0.75rem;
  margin-top: -1rem;
`;

export const CoffeType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
  padding: 0 1rem;

  width: 100%;

  div {
    display: flex;

    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    width: 81px;
    height: 21px;

    background: #f1e9c9;
    border-radius: 100px;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;

    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CoffesSabor = styled.h3`
  margin-bottom: 0.5rem;
`;

export const CoffeDescription = styled.p`
  display: flex;
  margin-bottom: 2rem;
  margin-left: 0.75rem;
`;
export const CoffeMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CoffePrice = styled.p`
  margin-right: 1.25rem;
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme["base-text"]};

  &::before {
    content: "R$ ";
    font-family: "Roboto";
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

export const CoffeMenuAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`;
export const CounterCoffeAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  width: 4.5rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px;
`;

export const ButtonCoffeCard = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 2.4rem;
  height: 2.4rem;

  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  border: none;

  &:hover {
    background: ${(props) => props.theme["purple"]};
    transition: 0.2s;
  }
`;
