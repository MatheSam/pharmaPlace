import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .productsPharm {
    width: 340px;
    height: 150px;
    margin: 10px;
    margin: 20px;
    display: flex;

    background-color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .imgBox {
    width: 90px;
    height: 90px;
    display: flex;
  }

  .iconsBox {
    width: 40px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const BoxInfo = styled.div`
  width: 200px;
  height: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    margin-top: 15px;
  }
`;
