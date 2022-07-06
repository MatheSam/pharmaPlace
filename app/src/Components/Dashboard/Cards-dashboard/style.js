import styled from "styled-components";

export const ContainerAll = styled.div``;

export const SectionBox = styled.div`
  width: 100%;
  height: 93px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  background-color: var(--orange);

  button {
    background-color: var(--orange);
    width: 60px;
    height: 40px;
    border: 1px solid var(--white);
    border-radius: 5px;
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
    width: 250px;
    height: 70px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 110px;
  margin: 10px;

  display: flex;
  justify-content: space-around;

  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .iconsBox {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 120px;
    margin: 20px;
    display: flex;

    .iconsBox {
      width: 60px;
      height: 60px;
    }
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
