import styled from 'styled-components';


export const AgendaItemsContainer = styled.div`
   width: 100%;

   .ag-container {
      width: 50%;
      margin: 0 auto;

   @media screen and (max-width: 800px){
      width: 90%;
      margin: 0 auto;
  }
   }

   .preview {
    font-size: 18px;
    font-family: Jura;
    font-style: normal;
    font-weight: 400;
    color: black;
    line-height: 1.5;
    padding-left: 0.8rem;
   }

   
   .time {
    font-size: 18px;
    font-family: Jura;
    font-style: normal;
    font-weight: 400;
    color: black;
    line-height: 1.5;
    padding-left: 0.8rem;
   }

   
   .task {
    font-size: 18px;
    font-family: Jura;
    font-style: normal;
    font-weight: 400;
    color: black;
    line-height: 1.5;
    padding-left: 0.8rem;
   }

   .card {
      background-color: #71AFAE;
   }

   .icons {
      display:flex;
      justify-content: space-between;
      width: 97%;
      margin: 0 auto;
   }

   .delete {
      color: red;
   }

   .edit {
      color: blue;
   }

   .items {
      width: 98%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
   }
`;