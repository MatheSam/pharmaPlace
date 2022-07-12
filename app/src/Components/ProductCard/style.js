import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 200px;
  height: 350px;
  box-shadow: 0px 0px 18px 1px rgba(186,185,185,0.75);
  -webkit-box-shadow: 0px 0px 18px 1px rgba(186,185,185,0.75);
  -moz-box-shadow: 0px 0px 18px 1px rgba(186,185,185,0.75);
  border-radius: 10px;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .imageArea {
    width: 100%;
    height: 230px;
    margin-top: 15px;
    
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .infoArea {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      padding: 0px 18px 5px;
      height: 62%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-family: var(--second-font);
      & p {
        font-weight: 500;
        color: var(--grey2);
        font-size: 16px;

        max-width: 280px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      & span {
        font-weight: 500;
        color: var(--primary);
        font-size: 16px;
      }
    }

    button {
      background-color: var(--green);
      color: var(--white);

      font-family: var(--second-font);
      font-weight: 600;
      font-size: 18px;

      flex: 0.5;

      border-radius: 0px 0px 10px 10px;
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
