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
    border-radius: 10px;
    transition: 0.5s;
  }
  .productsPharm:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .imgBox {
    width: 90px;
    height: 90px;
    background-color: #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-left: 10px;
  }

  .imgBox img {
    width: 90px;
    height: 90px;
  }

  .iconsBox {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
  }
`;

export const BoxInfo = styled.div`
  width: 200px;
  height: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;

  span {
    margin-top: 25px;
  }

  p {
    margin-top: 15px;
    color: var(--redwine);
  }
`;
