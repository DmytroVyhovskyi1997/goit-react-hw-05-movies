import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 20px;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  input {
    padding: 5px 10px;
    width: 50%;
    margin: auto;
  }
  button {
    display: inline-block;
    color: black;
    list-style: none;
    padding: 5px 15px;
    margin: auto;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid black;
    border-radius: 10px;
  }
  h2 {
    margin: 0;
  }
`;
