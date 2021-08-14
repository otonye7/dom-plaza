import styled from 'styled-components';


export const AgendaContainer = styled.div`
   width: 100%;

   .container {
       width: 50%;
       margin: 0 auto;

   @media screen and (max-width: 800px){
      width: 90%;
      margin: 0 auto;
    }
   }

   .agenda-text {
    text-align: center;
    font-size: 30px;
    font-family: Jura;
    font-style: normal;
    font-weight: 400;
    color: black;
    line-height: 1.5;
   } 

`;