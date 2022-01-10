import styled from '@emotion/styled'

export const Friendlisted = styled.ul`
  margin: 50px auto;
  width: 500px;
  padding: 0;
  
`;
export const StatusOn = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
  margin-right: 20px;
`;

export const StatusOff = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  margin-right: 20px;
`;
export const Item = styled.li`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
border-radius: 5px;
border:  1px solid #ccc; ;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

:not(:last-child) {
  margin-bottom: 20px;

  
}
`;
export const Name = styled.p`
  padding-left: 20px;
`;
export const Avatar = styled.img`
`;