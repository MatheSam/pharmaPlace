import styled from "styled-components";

export const Identify = styled.div`
  .identify {
    width: 100%;
    height: 70px;

    background-color: var(--primary);

    border-top: 0.5px solid var(--grey);
    border-bottom: 0.5px solid var(--grey);

    margin-top: 15px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .namePharma {
      color: var(--white);

      font-family: var(--main-font);
      font-size: 24px;
      font-weight: bold;

      margin-left: 20px;
    }

    .imgPharma {
      width: 60px;
      height: 60px;

      border-radius: 60px;
      border: 2px solid var(--grey);
    }
  }
`;

export const ProductList = styled.div`
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
