import styled from "styled-components";
import BannerMobile from "../../Assets/bannerMobile.png";
import Banner from "./../../Assets/banner.png";

export const Img = styled.img`
  width: 1270px;
  height: 400px;
  margin-top: 20px;
  background-image: url(${Banner});
  border-radius: 10px;

  @media (max-width: 500px) {
    height: 350px;
    width: 90%;
    background-image: url(${BannerMobile});
    border-radius: 1px;
    transition: 400ms;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 410px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    width: 100%;
    height: 350px;
  }
`;
