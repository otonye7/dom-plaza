import styled from 'styled-components';


export const AgendaItemsContainer = styled.div`
   width: 100%;

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

   .icons {
      display:flex;
      justify-content: space-between;
      width: 40%;
      margin: 0 auto;
   }

   .delete {
      color: red;
   }

   .edit {
      color: blue;
   }

   .items {
      display: flex;
      justify-content: center;
   }
`;