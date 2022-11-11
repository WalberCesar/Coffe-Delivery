import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.1rem;
  width: 100%;

  p {
    color: #f81f1f;
    font-weight: 500;
    font-size: 0.75rem;
    position: relative;
  }
`;
export const InputAdrees = styled.input`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  /* width: 100%; */
  height: 2.6rem;

  border-radius: 4px;

  :focus {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
`;
