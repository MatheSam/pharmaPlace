import styled from "styled-components";

export const SectionBox = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
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

  h2 {
    color: var(--white);
    font-size: 20px;
  }

  @media (min-width: 768px) {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 200px;
    height: 70px;
    margin-right: 5px;
    border-radius: 10px;
  }
`;
