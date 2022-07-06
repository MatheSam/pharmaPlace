import styled from "styled-components";

export const ThemeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  height: 120px;

  padding: 0 8vw;

  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
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
        background: none;
        width: 100px;
        height: 60px;
        font-size: 40px;
      }

      .btnCart {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--primary);
        > svg {
          font-size: 35px;
        }
        @media (max-width: 500px) {
          font-size: 25px;
        }
      }
      .btnUser {
        display: flex;
        align-items: center;
        justify-content: center;
        > button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          box-shadow: none;
          background: transparent;
          > svg {
            width: 40px;
            height: 40px;
            font-size: 40px;
            border: none;
            background: transparent;
            color: var(--primary);

            @media (max-width: 500px) {
              font-size: 25px;
            }
          }
        }
      }
    }
  }
`;
