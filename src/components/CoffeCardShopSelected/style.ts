import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  width: 15.94rem;
  height: 4rem;

  p {
    white-space: nowrap;
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    p {
      font-size: 0.75rem;
      font-weight: 400;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const CounterButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  width: 72px;
  height: 32px;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  border: none;
`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;

  width: 91px;
  height: 32px;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  border: none;

  p {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Divider = styled.div`
  width: 23rem;
  height: 0;
  margin-bottom: 2rem;
  margin-top: 2rem;

  border: 1px solid ${(props) => props.theme["base-button"]};
`;
