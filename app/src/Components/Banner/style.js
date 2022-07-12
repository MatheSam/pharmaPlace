import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  background-color: var(--primary);

  @media (max-width: 650px) {
    width: 100%;
    height: 350px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    height: 100%;
    width: 50%;
  }

  .text_one {
    width: 100%;

    margin-left: 50%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    color: var(--white);

    font-family: var(--second-font);
    font-weight: bold;
    font-size: 28px;
  }

  .text_two {
    width: 100%;
    margin-left: 50%;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    color: var(--white);

    font-family: var(--main-font);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .text_three {
    width: 100%;
    height: 100px;
    margin-left: 50%;

    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;

    color: var(--white);

    font-family: var(--main-font);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    letter-spacing: 1px;

    .button_visit {
      width: 55%;
      height: 50px;

      background-color: var(--redwine);
      color: var(--white);

      opacity: 1;

      font-family: var(--second-font);
      font-weight: 500;
      font-size: 18px;

      &:hover {
        font-size: 22px;
        letter-spacing: 3.5px;
        transition: 400ms;
      }
    }
  }
`;
