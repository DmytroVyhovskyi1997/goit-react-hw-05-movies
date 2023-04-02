import styled from 'styled-components';

export const MainInfo = styled.div`
  margin-bottom: 30px;
  display: flex;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledImg = styled.img`
  width: 30%;
`;

export const StyledItem = styled.div`
  padding: 30px 50px;
  font-size: 18px;
  h1 {
    margin-bottom: 15px;
  }
  h2 {
    margin-bottom: 10px;
  }
  p:not(:last-of-type) {
    margin-bottom: 25px;
  }
  span{
    font-weight: bold;
  }
`;

export const AdditionalInfo = styled.div`
  padding: 30px 50px;
  margin-bottom: 30px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  h2 {
    margin-bottom: 20px;
  }
  ul {
    font-size: 18px;
    font-weight: 500;
    list-style: disc;
  }
  li:not(:last-child) {
    margin-bottom: 10px;
  }
  a:hover {
    color: crimson;
  }
`;