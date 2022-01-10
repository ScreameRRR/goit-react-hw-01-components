
import styled from '@emotion/styled'

export const Table = styled.table `
width: 500px;
text-align: center;
border-radius: 5px;
border: 1px solid #F4F1F1;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
margin: 0px auto;
`;

   
export const TransactionHead = styled.thead`
background-color: #00BCD5;
color: white;
height: 40px;
text-transform: uppercase;
`;
export const TransactionRow = styled.tr`
  text-align: center;
  background-color: white;
  :nth-child(even) {
    background-color:  rgba(220, 220, 220, 1);
  }
`;
export const TransactionType= styled.td`
  padding: 10px; 
`;