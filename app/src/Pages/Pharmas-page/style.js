import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  /* display: flex; */
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin:auto; 
  margin-top:10px;
  
  
  
  
  
 
@media(max-width: 428px){
  div{
    font-size: 10px;
  }
}  
`;

export const Titulo = styled.div`

display: flex;
justify-content: center;




`
export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;  
  justify-content: space-evenly;
   
  
  @media (max-width: 734px) {
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;    
     scroll-behavior: smooth; 
  }
  
  `;

  
