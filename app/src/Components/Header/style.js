import styled from "styled-components";

export const ThemeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: fixed;
  background-color: #ffffff;
  z-index: 99;

  height: 80px;
  padding: 0 8vw;

  box-shadow: -1px 9px 27px -13px rgba(0, 0, 0, 1);
  -webkit-box-shadow: -1px 9px 27px -13px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 9px 27px -13px rgba(0, 0, 0, 1);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;

    @media (max-width: 500px) {
      width: 100vw;
    }

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
      justify-content: space-around;

      width: 200px;

      @media (max-width: 500px) {
        width: 100px;
      }

      .btnCart,
      .btnUser {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        width: 100px;
        height: 60px;
        font-size: 40px;
        @media (max-width: 500px) {
          width: 70px;
          height: 40px;
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          box-shadow: none;
        }
        svg {
          height: 40px;
          width: 40px;
          border: none;
          color: var(--primary);
          @media (max-width: 500px) {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
  }
`;
