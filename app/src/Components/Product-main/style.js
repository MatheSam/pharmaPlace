import styled from "styled-components";

export const StyledProductMain = styled.main`
  width: 100%;
  padding: 0px 8vw;
  display: flex;
  justify-content: center;

  .area {
    width: 100%;
    padding: 9px 25px;
    gap: 20px 60px;
    height: 850px;
    margin: 30px 0px;
    overflow: auto;

    background-color: var(--white);
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: center;
  }
`;
