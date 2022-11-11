import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding-top: 5rem;
  padding-bottom: 15rem;
`;

export const ContainerInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const CoffeShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  /* gap: 2rem; */

  width: 28rem;
  min-height: 31.125rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
`;

export const ButtonConfirmShopping = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 100%;
  height: 2.875rem;

  background: ${(props) => props.theme.yellow};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  :hover {
    opacity: 0.7;
    transition: 0.2s;
  }

  label {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme.white};
    font-stretch: 100;
  }
`;
