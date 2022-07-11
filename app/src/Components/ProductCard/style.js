import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 200px;
  height: 350px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;

  .imageArea {
    width: 100%;
    height: 65%;
    margin-bottom: 5px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .infoArea {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      padding: 0px 18px 5px;
      height: 62%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: var(--main-font);
      & p {
        font-weight: 400;
        font-size: 15px;
      }

      & span {
        font-weight: 500;
        font-size: 14px;
      }
    }

    button {
      background-color: var(--green);
      font-family: var(--second-font);
      font-weight: 600;
      color: var(--white);
      flex: 1;
    }
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 280px;
  }

  @media (max-width: 510px) {
    width: 150px;
  }

  @media (max-width: 435px) {
    width: 130px;
  }

  @media (max-width: 340px) {
    width: 100%;
  }
`;
