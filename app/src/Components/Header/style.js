import styled from "styled-components";

export const ThemeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  height: 120px;

  padding: 0 8vw;

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);

  .logo {
    width: 230px;
    height: 69px;
    img {
      width: 100%;
      height: 69px;
    }
    @media (max-width: 500px) {
      width: 169px;
      height: 60px;
      img {
        height: 60px;
      }
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 120px;

    @media (max-width: 500px) {
      width: 100px;
    }

    .btnCart,
    .btnUser {
      font-size: 35px;
      border: none;
      background: transparent;
      color: var(--primary);
      @media (max-width: 500px) {
        font-size: 25px;
      }
    }
  }
`;
