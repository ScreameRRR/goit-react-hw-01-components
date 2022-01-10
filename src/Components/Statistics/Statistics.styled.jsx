import styled from "@emotion/styled";

export const StatisticSection = styled.section`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  border: 1px solid #F4F1F1;


  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #757575;
  
`;

export const StatList = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 5);
  padding: 15px;
  border: 1px solid #E1D8D8;
  color: #FFFFFF;
  
  
`;

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 700;
`;