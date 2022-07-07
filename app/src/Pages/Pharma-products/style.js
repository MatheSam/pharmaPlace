import styled from "styled-components";

export const Identify = styled.div`
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
`;

export const ProductList = styled.div``;

export const Card = styled.div`
  width: 170px;
  height: 200px;

  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  justify-content: space-between;

  box-shadow: -3px 3px 18px -6px rgba(51,49,49,0.75);
  -webkit-box-shadow: -3px 3px 18px -6px rgba(51,49,49,0.75);
  -moz-box-shadow: -3px 3px 18px -6px rgba(51,49,49,0.75);

  .productImg {
    width: 130px;
    height: 60px;
    border-radius: 5px;
  }

  .adcCart {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    height: 20px;

    background-color: var(--green);
    color: var(--black);

    font-size: 12px;
    font-family: var(--main-font);
    font-weight: bold;
  }
`;
