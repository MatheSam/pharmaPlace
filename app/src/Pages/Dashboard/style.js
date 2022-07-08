import styled from "styled-components";

export const SectionBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--orange);

  button {
    background-color: var(--orange);
    color: var(--white);
    opacity: calc(0.6);
  }

  button:hover {
    opacity: calc(1);
  }

  @media (min-width: 768px) {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 200px;
    margin-right: 5px;
    border-radius: 10px;
  }
`;
