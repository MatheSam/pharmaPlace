import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin:auto; 
  margin-top:8px;
@media(max-width: 428px){
  div{
    font-size: 10px;
  }
}
  

 

`;
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;   
  
  
   
  
  @media (min-width: 669px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;    
    /* scroll-behavior: smooth; */    
  }
  
  `;

  
