import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 300px;
  height: 300px;
  margin-bottom: 47px;
  margin-top: 31px;
  margin-left: 28px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #ffffff;
  h2 {
    display: flex;
    justify-content: flex-start;
    font-size: 17px;
    margin-left: 15px;
  }
 
  img {
    display: flex;
    object-fit: contain;
   
    margin:auto;
    margin-top: 5px;
    margin-bottom: 15px;
   
    height: 162px;
    width: 270px;
    
  }
  p {
    margin-left: 15px;
  }
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
    transition: 0.3s;
  }
 


`;
