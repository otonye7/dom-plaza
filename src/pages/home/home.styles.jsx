import styled from 'styled-components';


export const HomeContainer = styled.div`
   width: 100%;

   .home-container {
      display: grid;
      grid-template-columns: 1fr 1fr;

 @media screen and (max-width: 800px){
      display: grid;
      grid-template-columns: 1fr;
  }
   }
`;