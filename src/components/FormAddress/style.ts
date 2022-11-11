import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2.5rem;
  gap: 2rem;

  width: 100%;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;
export const HeaderInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.125rem;

  width: 100%;
  height: 2.75rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  width: 100%;
`;

export const InputGroupOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
`;

export const InputGroupTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
`;
