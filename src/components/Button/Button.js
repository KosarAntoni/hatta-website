import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  border: 2px solid black;
  padding: 10px 25px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  flex-shrink: 0;
  transition: 0.3s;
  
  :hover {
    color: black;
    background-color: white;
  }
`;

export default Button;