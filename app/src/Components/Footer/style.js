import styled from "styled-components";

export const ThemeFooter = styled.footer`
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  > span {
    margin-bottom: 20px;
  }

  > h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 105px;
    padding-top: 20px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    width: 700px;
    padding-left: 170px;
    margin: 20px 0;
    @media (max-width: 700px) {
      width: 500px;
      padding-left: 80px;
    }
    @media (max-width: 500px) {
      width: 300px;
      padding-left: 0px;
    }

    > li {
      display: flex;
      align-items: center;
      height: 40px;
      width: 250px;
      cursor: pointer;
      &:hover {
        color: white;
      }

      @media (max-width: 700px) {
        width: 200px;
      }

      @media (max-width: 500px) {
        width: 150px;
      }
      > a {
        text-decoration: none;
        color: black;

        &:hover {
          color: white;
        }
        > svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
