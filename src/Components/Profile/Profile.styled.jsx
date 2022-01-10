import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #FFFFFF;
 
`;

export const ProfileImg = styled.img`
  display: block;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #A1ABB6;
`;

export const Username = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: #122236;
`;

export const ProfileText = styled.p`
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: #A1ABB6;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  border-top: 1px solid black;
  background-color: #F3F6F9;
  margin: 0;
  color: #A1ABB6;
`;

export const StatItem = styled.li`
  :not(:last-child) {
    border-right: 1px solid black;
  }
  display: flex;
  flex-direction: column;
  lign-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding: 10px 10px;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: #768696;
  margin-bottom: 10px;
  font-weight: 700px;
`;

export const Quantity = styled.span`
  ine-height: 1.19;
  letter-spacing: 0.03em;
  color: #1F3349;
`;