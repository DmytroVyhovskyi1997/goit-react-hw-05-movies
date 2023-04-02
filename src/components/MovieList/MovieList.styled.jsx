import styled from 'styled-components';

export const StyledLi = styled.li`
  margin-top: 20px;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 500;
  font-size: 20px;
  list-style: decimal;
  a {
    color: black;
  }
  a:hover {
    color: orangered;
  }
`;

export const StyledUl = styled.ul`
  padding: 0;
`;
