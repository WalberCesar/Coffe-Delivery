import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  width: 40rem;
  min-height: 13rem;
  background-color: ${(props) => props.theme["base-card"]};
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.25rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
  }
`;
export const ContainerPayamentMethod = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  height: 3.2rem;
`;
export const SelectedButtonPayamentMethod = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.2rem;
  height: 3.2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  border: ${(props) => ` 1px solid ${props.theme["purple-dark"]}`};

  font-family: "Roboto";
  font-size: 0.75rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};

  cursor: pointer;
`;
export const ButtonPayamentMethod = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.2rem;
  height: 3.2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  border: ${(props) => ` 1px solid ${props.theme["base-button"]}`};

  font-family: "Roboto";
  font-size: 0.75rem;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};

  cursor: pointer;
`;
