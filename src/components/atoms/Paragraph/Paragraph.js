import styled from "styled-components";

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: ${({bold}) => bold ? "700" : "400"};
`;

export default Paragraph;